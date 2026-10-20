const fs = require('fs');
fs.writeFileSync("dummy.txt","Heeloo");
const os=require('os')
console.log(os.platform())