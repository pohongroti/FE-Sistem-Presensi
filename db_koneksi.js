// meload module
const mysql=require('mysql');
// Inisialisai pool-kolam
const connectionKeKolam=mysql.createPool({
    connectionLimit: 100,
    host:'localhost',
    user:'root',
    password:'rootpw',
    database:'presensismk2kra',
    debug:true
});

module.exports=connectionKeKolam;