const { readFile } = require('fs');

function readDatabase(fileName) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const field = lines[i].toString().split(',');
            if (field[3] !== 'field') {
              if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                students[field[3]].push(field[0]);
              } else {
                students[field[3]] = [field[0]];
              }
            }
          }
        }
      }
      resolve(students);
    });
  });
}

module.exports = readDatabase;
