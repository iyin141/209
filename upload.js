const fs = require('fs');

function run() {

    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading txt file', err);
            return;
        }
    
     
        const content = `<div class="text">${data}</div>\n`;
    
    
        fs.readFile('discover.html', 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error reading html file', err);
                return;
            }
    
            const update = htmlData.replace(/<div class="total">[\s\S]*<\/div>/, `<div class="total">${content}</div>`);
    
    
            fs.writeFile('discover.html', update, (err) => {
                if (err) {
                    return;
                }
                console.log('html updated');
            });
        });
    });
    
}
const _run = run
module.exports = { run: _run, };

//readfile reads code of a file
//write file either creates or wipes old data in exsiting file to put new code
//append file adds code to the end of file
//unlink is used to delete files in the file system