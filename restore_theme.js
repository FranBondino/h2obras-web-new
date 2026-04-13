const fs = require('fs');
const path = require('path');

const map = {
    // Backgrounds
    'bg-slate-950': 'bg-background',
    'bg-slate-900': 'bg-surface-container-low',
    'bg-slate-800': 'bg-surface-container',

    // Texts
    'text-white': 'text-primary',
    'text-slate-400': 'text-secondary',
    'text-slate-500': 'text-on-surface-variant',
    'text-slate-600': 'text-outline',
    'text-slate-300': 'text-on-surface',

    // Accents & Borders
    'bg-cyan-500': 'bg-tertiary-fixed',
    'bg-cyan-600': 'bg-primary-container',
    'bg-cyan-950': 'bg-primary-container/10',
    'bg-cyan-900': 'bg-primary-container/20',
    'text-cyan-400': 'text-tertiary-fixed-dim',
    'text-cyan-500': 'text-on-tertiary-container',
    'border-cyan-500': 'border-primary',
    'border-cyan-600': 'border-primary-container',
    'border-cyan-700': 'border-primary',
    'border-cyan-800': 'border-primary',
    'border-cyan-900': 'border-primary',
    'border-slate-800': 'border-outline-variant',
    'border-slate-700': 'border-outline',
    'text-gradient-light': 'text-gradient-primary'
};

const dirs = [
    path.join(__dirname, 'src', 'pages'),
    path.join(__dirname, 'src', 'components')
];

for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(path.join(dir, file), 'utf8');
            for (const [dark, light] of Object.entries(map)) {
                content = content.replace(new RegExp(dark + '(?![a-zA-Z0-9_-])', 'g'), light);
            }
            fs.writeFileSync(path.join(dir, file), content, 'utf8');
            console.log(`Processed ${file}`);
        }
    }
}
