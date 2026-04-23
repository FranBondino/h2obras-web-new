import pdfplumber
import sys
import io

# Set stdout to use UTF-8
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

portfolio_projects = [
    "Hospital Regional Oscar Orias", "Fisherton Park", "Aeropuerto Int. Rosario",
    "Edificio Ewain I", "Distrito Puerto Norte", "Edificio La Segunda Seguros",
    "Nuevo Hospital Nodal Venado Tuerto", "CEMAFE / Iturraspe", "Acuario Río Paraná",
    "Centro Justicia Penal", "Torre Metra (Puerto Norte)", "Campus UNRN Bariloche",
    "Fideicomiso Maui Puerto Norte", "Hilton Garden Inn", "Casino Rosario",
    "Centro Islámico King Fhad", "Estación Elevadora Aguadas", "Torres Dolfines Guaraní",
    "Edificio Corporativo Sancor", "Hospital de Emergencias (HECA)", "Quilmes Cervecería",
    "Polo Tecnológico Zona Sur", "Juzgados Federales", "Centro Comercial Alto Rosario",
    "Aeropuerto de Córdoba", "Planta de Biogas", "Sanatorio de Niños",
    "Complejo Fórum Puerto Norte", "Planta General Motors", "Edificio Aduana",
    "Planta Cargill", "Ciudad Judicial", "Terminal Puerto Rosario", "Hospital Iturraspe"
]

def extract_and_compare(pdf_path):
    output = ""
    pdf_text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    pdf_text += text + "\n"
        
        output += "--- COMPARISON RESULTS ---\n"
        found = []
        not_found = []
        for p in portfolio_projects:
            # Simple substring match (case insensitive)
            if p.lower() in pdf_text.lower():
                found.append(p)
            else:
                # Try parts of the name if it's long
                parts = p.split()
                match = False
                if len(parts) > 2:
                    short_name = " ".join(parts[:2])
                    if short_name.lower() in pdf_text.lower():
                        found.append(f"{p} (Matched as '{short_name}')")
                        match = True
                if not match:
                    not_found.append(p)
        
        output += "\nPROJECTS FOUND IN PDF:\n"
        for p in found:
            output += f"✅ {p}\n"
            
        output += "\nPROJECTS NOT FOUND IN PDF:\n"
        for p in not_found:
            output += f"❌ {p}\n"
            
        output += "\n--- FULL CONTENT FOR DEBUGGING ---\n"
        output += pdf_text
        return output
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_v2.py <pdf_path>")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    print(extract_and_compare(pdf_path))
