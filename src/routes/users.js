const {Router} = require('express');
const router = Router();

//routes
router.get('/', (req, res) =>{
    const data = [
        {
        'name':'Manuel Gonzalalez',
        'email':'manugonza13@hotmail.com',
        'age':25
        },
        {
        'name':'Dalembert Fernandez',
        'email':'tato@hotmail.com',
        'age':25
        },
        {
        'name':'Nicolas Zeballos',
        'email':'nicozebas@hotmail.com',
        'age':26
        },
    ]
    res.status(200).send(data);
});

router.post('/', (req,res) => {
    const {name,email,edad} = (req.body);
    const user ={...req.body};
    if (name && email && edad) {
        res.status(200).send(user); 
    }else{
        res.status(500).send({'error':'Internal server error'})
    }
    
})

module.exports= router;