const fs = require('fs');
const path = require('path');

const dirs = [
    path.join(__dirname, 'src', 'pages'),
    path.join(__dirname, 'src', 'components')
];

for (const dir of dirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(path.join(dir, file), 'utf8');

            // Clean up orphaned hex codes from broken bracket removal
            content = content.replace(/\s*#[a-fA-F0-9]+\]/g, '');

            fs.writeFileSync(path.join(dir, file), content, 'utf8');
            console.log(`Cleaned ${file}`);
        }
    }
}
