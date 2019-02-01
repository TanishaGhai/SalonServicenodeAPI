
(function(customersController)
{
    var data= require('../data');
    customersController.init=function(app)
{
    app.get('/api/customers', function (req, res) {
        console.log('I received a GET request');
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
        console.log("Got a GET request for one Customer" + id);
        res.send('Hello one Customer' + id);
    })

};
})(module.exports)


