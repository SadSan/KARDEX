const controller = {};

controller.list =  (req, res) =>{
    req.getConnection((err, conn)=>{
        conn.query('select * from factura', (err, factura)=>{
            if(err){
                res.json(err);
            }
            res.render('factura',{
                data: factura
            });
        })
    })
};


controller.saveCompra =  (req, res) =>{

    const body = req.body;
   
    req.getConnection((err, conn) => {
        conn.query('insert into factura (id_producto, nombre_producto, cantidad, precio_total_compra ) values ?', [body], (err, customer) => {
            console.log(customer);
            res.send('works');
            console.log(req.body);
        })
    })
};
controller.save =  (req, res) =>{

    const data = req.body;
   
    req.getConnection((err, conn) => {
        conn.query('insert into factura (id_producto, nombre_producto, cantidad, precio_total_compra ) set ?', [data], (err, customer) => {
            console.log(customer);
            res.send('works');
        })
    })
};
/*
controller.delete =  (req, res) =>{
    res.send('Hello world');
};
*/
module.exports = controller;