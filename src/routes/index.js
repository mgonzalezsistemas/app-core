const {Router} = require('express');
const router = Router();

//routes
router.get('/', (req, res) =>{
    const data = {
        'version':'1.0'
    }
    res.send(data);
});

module.exports= router;