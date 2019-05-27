const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    try {
        const message = req.body.message;
        if (message) {
            res.status(200).send("Recebido com sucesso");
            console.log(`\n\n Nova mensagem:`);
            console.log(message);
            console.log('=================');
        } else {
            res.status(400).send("<h1>Houve um erro na sua requisição, verifique o seu body</h1>");
        }
    } catch (error) {
        res.status(400).send("Houve um erro na sua requisição");
    }
});

module.exports = router;