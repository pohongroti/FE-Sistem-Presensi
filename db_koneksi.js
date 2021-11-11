// meload module
const mysql=require('mysql');
// Inisialisai pool-kolam
const connectionKeKolam=mysql.createPool({
    connectionLimit: 100,
    host:'localhost',
    user:'root',
    password:'',
    database:'presensi',
    debug:false
});

module.exports=connectionKeKolam;