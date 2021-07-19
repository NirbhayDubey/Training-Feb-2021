const express = require('express');
const { custom } = require('joi');
const Joi = require('joi');
var createError = require('http-errors');

const app = express();

app.use(express.json());

const customers = [
    {id: 1, name: "Tarun Moradiya", email: "tarun@email.com"},
    {id: 2, name: "Bhargav Modi", email: "bhargav@email.com"},
    {id: 3, name: "Harshit Shampat", email: "harshit@email.com"}
]


app.get('/customers', (req, res) => {
    res.send(customers);
});

app.get('/customers/:id', (req, res) => {
    let customer = customers.find((c) => c.id === parseInt(req.params.id));
    
    if (!customer) return res.status(404).send('the given customer was not found');

    res.send(customer);
});

app.post('/customers', async (req, res) => {
    const {error} = await validate(req.body)

    if(error) return res.status(404).send(error);

    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        email: req.body.email
    }

    customers.push(customer);

    res.send(customer);
})

app.put('/customers/:id', async (req, res) => {
    let customer = customers.find((c) => c.id === parseInt(req.params.id));
    
    if (!customer) return res.status(404).send('the given customer was not found');

    const {error} = await validate(req.body);

    if(error) return res.status(404).send(error);

    customer.name = req.body.name;
    customer.email = req.body.email;

    res.send(customer)
})

app.delete('/customers/:id', (req, res) => {
    let customer = customers.find((c) => c.id === parseInt(req.params.id));
    
    if (!customer) return res.status(404).send('the given customer was not found');

    const index = customers.indexOf(customer)

    customers.splice(index, 1)

    res.send(customer)
})

async function validate(customer) {
    schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    });

    return await schema.validate(customer);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`sercer is running on port ${port}`));