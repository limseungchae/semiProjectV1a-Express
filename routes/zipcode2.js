const express = require('express');
const router = express.Router();
const Zipcode = require('../models/Zipcode');

router.get('/', async (req, res) => {
    res.render('zipcode2', {title:'시구군동 찾기 v2'});
});

router.get('/sido', async (req, res) => {
    let sidos = new Zipcode().getSido().then(sido => sido); // 시도 검색

    res.send(JSON.stringify(await sidos)); // 조회결과를 JSON형식으로 전송
});

router.get('/gugun/:sido', async (req, res) => {
    let sido = req.params.sido;
    let guguns = new Zipcode().getGugun(sido).then(gugun => gugun);

    res.send(JSON.stringify(await guguns));
});

router.get('/dong/:gugun', async (req, res) => {
    let gugun = req.params.gugun;
    let dongs = new Zipcode().getDong(gugun).then(dong => dong);

    res.send(JSON.stringify(await dongs));
});




module.exports = router;
