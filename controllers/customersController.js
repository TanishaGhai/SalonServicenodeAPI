
(function(customersController)
{
    var data= require('../data');
    customersController.init=function(app)
{
    app.get('/api/customers', function (req, res) {
        console.log('I received a GET request');
        res.set(
        {
            "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
        }
        )
        data.getAllCustomers(function(err,customers)
        {
            if(err)
            {
                res.send(400,err);
            }
            else
            {
                res.set('Content-Type','application/json');
                res.send(customers);
            }
        })
     })


    app.get('/api/customers/:id', function (req, res) {
        const { id }=req.params;
        console.log('I received a GET request1');
        res.set(
        {
            "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
        }
        )
        data.getCustomer(id,function(err,customers)
        {
            console.log(id);
            if(err)
            {
                res.send(400,err);
            }
            else
            {
                res.set('Content-Type','application/json');
                res.send(customers);
            }
        })
    })

};
})(module.exports)


