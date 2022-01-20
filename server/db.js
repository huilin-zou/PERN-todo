const Pool=require("pg").Pool
const pool=new Pool({
    user:"postgres",
    
    database:"perntodo"
});

module.exports=pool;
