const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    try {
        const message = req.body.message;
        if (message) {
            res.status(200).send("Recebido com sucesso");
            console.log(`\n Nova mensagem:`);
            console.log(message);
            console.log('\n =================');
        } else {
            res.status(400).send("<h1>Houve um erro na sua requisição, verifique o seu body</h1>");
        }
    } catch (error) {
        res.status(400).send("Houve um erro na sua requisição");
    }
});

router.get('/', (req,res) => {
    res.status(400).send("<h1>Somente utilizando post</h1>");
});

router.get('/segredo', function(req, res, next) {
    res.status(200).send("PHP não é linguagem de programador");
  });

module.exports = router;