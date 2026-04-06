import re
import os

files = {
    'home': '/mnt/c/Users/Administrador/.gemini/antigravity/brain/27cd75b0-379a-4089-ba3d-c20936d08996/.tempmediaStorage/home.html',
    'portfolio': '/mnt/c/Users/Administrador/.gemini/antigravity/brain/27cd75b0-379a-4089-ba3d-c20936d08996/.tempmediaStorage/portfolio.html',
    'equipment': '/mnt/c/Users/Administrador/.gemini/antigravity/brain/27cd75b0-379a-4089-ba3d-c20936d08996/.tempmediaStorage/equipment.html'
}

dest = {
    'home': '/home/franbondino/h2obras-web-new/src/pages/Home.jsx',
    'portfolio': '/home/franbondino/h2obras-web-new/src/pages/Portfolio.jsx',
    'equipment': '/home/franbondino/h2obras-web-new/src/pages/Equipment.jsx'
}

def html_to_jsx(html):
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    
    # Self-closing tags
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br([^>]*?)(?<!/)>', r'<br />', jsx)
    jsx = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr />', jsx)
    
    # Fix style attributes
    jsx = jsx.replace('style="font-variation-settings: \\\'FILL\\\' 1"', 'style={{fontVariationSettings: "\\\'FILL\\\' 1"}}')
    jsx = jsx.replace('style="font-variation-settings: \\\'FILL\\\' 0, \\\'wght\\\' 400, \\\'GRAD\\\' 0, \\\'opsz\\\' 24;"', 'style={{fontVariationSettings: "\\\'FILL\\\' 0, \\\'wght\\\' 400, \\\'GRAD\\\' 0, \\\'opsz\\\' 24"}}')

    return jsx

for key, path in files.items():
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find('</nav>')
    end_idx = content.find('<footer')
    
    if start_idx != -1 and end_idx != -1:
        main_content = content[start_idx+6:end_idx].strip()
    else:
        main_content = content

    jsx_content = html_to_jsx(main_content)
    
    comp_name = key.capitalize()
    final_jsx = f'''export default function {comp_name}() {{
    return (
        <>
            {jsx_content}
        </>
    );
}}
'''
    with open(dest[key], "w", encoding="utf-8") as f:
        f.write(final_jsx)
    print(f"Created {dest[key]}")

print("Done")
