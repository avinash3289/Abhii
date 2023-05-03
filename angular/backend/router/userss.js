const express = require('express');
const router = express.Router();
const db = require("../db/index");


router.get("/user", function (req, res) {
    db.query("SELECT * FROM users", function (err, result) {
        if (err) {
            res.send({ success: false, message: "error" });
        }
        else if (result) {
            res.send({ data: result, message: "success" });
        }
        else {
            res.send({ success: false, message: "no data found!!!.." });
        }

    });

});

router.post("/seller", function (req, res) {
    const { username, password } = req.body;
    db.query("select * from sellerregistration where username=? and password=?", [username, password], (err, result) => {
        if (err) {
            res.send({ message: err, });
        }
        else if (result.length > 0) {
            res.send({ submit: true, data: result });
            console.log(result);
        }


        else {
            res.send({ submit: false });
        }
    });
});
router.post("/admin", function (req, res) {
    const { username, password } = req.body;
    db.query("select * from admin where username=? and password=?", [username, password], (err, result2) => {
        if (err) {
            res.send({ message: err, });
            console.log(err);
        }
        else if (result2.length > 0) {
            res.send({ submit: true });
        }
        else {
            res.send({ submit: false, });
        }
    });
});

router.post("/sellerregister", (req, res) => {
    console.log(req.body);
    db.query("insert into sellerregistration set?", req.body, (err, result4) => {
        if (err) {
            console.log(err);
            res.send({ message: err });
        }
        else {
            console.log(result4);
            res.send({ submit: true, });
        }

    });
});

router.get("/sellerdata", function (req, res) {
    db.query("select * from  sellerregistration", (err, result) => {
        if (err) {
            res.send({ message: err, });
        }
        else if (result.length > 0) {
            res.send({ submit: true, data: result });
        }
        else {
            res.send({ submit: false, });
        }
    });
});


router.delete("/deluser/:delid", function (req, res) {
    let id = req.params.delid;
    console.log(id);
    db.query("delete  from sellerregistration where usercode=?", [id], (err, res3) => {
        if (err) {
            res.send({ message: err });
        }
        else {
            res.send({ submit: true, message: "deleted successfull" });

        }
    });
});

router.put("/update/:upid", function (req, res) {
    let id = req.params.upid;
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let phoneno = req.body.phoneno;
    let street = req.body.street;
    let village = req.body.village;
    let mandal = req.body.mandal;
    let District = req.body.District;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let gender = req.body.gender;
    db.query("update  sellerregistration set name=?,email=?,username=?,password=?,phoneno=?,street=?,village=?,mandal=?,District=?,state=?,zipcode=?,gender=? where usercode=?", [name, email, username, password, phoneno, street, village, mandal, District, state, zipcode, gender, id], (err, result3) => {
        if (err) {
            res.send({ message: err });
        }
        else {
            res.send({ submit: true });
        }
    });
});



router.put("/uprate/:fid", function (req, res) {
    const { fat, snf1, snf2, snf3, snf4 } = req.body;
    const id2 = req.params.fid;
    const query = `UPDATE ratechart SET  \`8.70\`=?, \`8.80\`=?, \`8.90\`=?, \`9.00\`=? WHERE fat=?`;
    const values = [snf1, snf2, snf3, snf4, id2];

    db.query(query, values, (err, result) => {
        if (err) {
            res.send({ message: err });
            console.log(err);
        } else {
            res.send({ submit: true });
        }
    });
});


router.post("/ratecharts", function (req, res) {
    const { fat, snf1, snf2, snf3, snf4 } = req.body;
    const query = `INSERT INTO ratechart (fat, \`8.70\`, \`8.80\`, \`8.90\`, \`9.00\`)
                   VALUES (${fat}, ${snf1}, ${snf2}, ${snf3}, ${snf4})`;
    db.query(query, (err, result) => {
        if (err) {
            res.send({ message: err });
            console.log(err);
        }
        else {
            res.send({ submit: true, });
        }

    });
});

router.post("/milkcollect", (req, res) => {
    const { usercode, date,timings,milktype, fat, snf, quantity } = req.body;
    console.log(usercode, fat, snf, quantity,timings,milktype);
    //fetch ratechart information 
    const ratechartquery = 'select  *  from ratechart where fat =? ';
    db.query(ratechartquery, [fat], (err, results3) => {
        if (err) {
            console.error(err);
        }
        else{
            if(results3.length===0){
                res.status(400).send('Error retrieving rate chart data');

            }
            else{
                const { '8.70': r870, '8.80': r880, '8.90': r890, '9.00': r900 } = results3[0];
                let price = null;
                if (snf >= 8.70 && snf < 8.80) {
                  price = r870;
                } else if (snf >= 8.80 && snf < 8.90) {
                  price = r880;
                } else if (snf >= 8.90 && snf < 9.00) {
                  price = r890;
                } else if (snf >= 9.00) {
                  price = r900;
                }
                if(price===null){
                    res.status(400).send("invalid snf value");
                }
                else{
                    const Amount=quantity*price;
                    db.query("insert into milkcollection (usercode,date,timings,milktype,fat,snf,quantity,price,Amount) values(?,?,?,?,?,?,?,?,?)", [usercode, date,timings,milktype, fat, snf, quantity, price,Amount], (err, res1) => {
                        if (err) {
                            res.send({ message: err });
                            console.log(err);
                        }
                        else {
                            res.send({ submit: true, });
                            console.log(res1);
                        }
                    })
                }
            }
        }
      
       
    })

})

router.get("/getmilk", function (req, res) {
    db.query("select * from milkcollection", (err, res9) => {
        if (err) {
            res.send({ message: err });
        }
        else if (res9.length > 0) {
            res.send({ submit: true, milkdata: res9 });
        }
        else {
            res.send({ submit: false });
        }
    })
});
router.post("/genbill",function(req,res){
    const  {usercode,date1,date2}=req.body;
     
    db.query("select m.usercode,s.Name,sum(m.quantity) as Liters,sum(m.amount) as Totalamount  from milkcollection m join sellerregistration s on m.usercode=s.usercode where date>=? and date<=? and m.usercode=?",[date1,date2,usercode],(err,result5)=>{
        if(err){
            res.send({message:err});
        }
        else if(result5.length>0){
            res.send({submit:true,bill:result5});
        }
        else{
            res.send({submit:false``});
        }
    })

});

router.get("/getvalues",function(req,res){
    db.query("select count(*) from sellerregistration",(err,res1)=>{
        if(err){
            res.send({message:err});
        }
        else{
                db.query("select sum(Amount) from milkcollection",(err,res2)=>{
                    if(err){
                        res.send({message:err});
                    }
                    else{
                        db.query("select sum(quantity) from milkcollection",(err,res3)=>{
                            if(err){
                                res.send({message:err});
                            }
                            else{
                                db.query("select max(price) from milkcollection",(err,res4)=>{
                                    if(err){
                                        res.send({message:err});
                                    }
                                    else{
                                        res.send({submit:true,
                                            nousers:res1,
                                            amount:res2,
                                            totalmilk:res3,
                                            milkprice:res4,

                                        });
                                    }
                                });
                            }
                        });
                    }
                });
        }
    });
});


module.exports = router;