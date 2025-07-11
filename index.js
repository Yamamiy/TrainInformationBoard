const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const GAS_URL = "https://script.google.com/macros/s/AKfycbyATeLQqbQ1fVppusnr64kiRofBftx2U15CfLsduFadPt51qnWaxqizdoncgKG_5ugz/exec"

app.get("/notice",async (req, res) => {
    try {
        const response = await fetch(GAS_URL);
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(data);
    }catch(e){
        console.error(e);
        res.status(500).json({ message: "取得に失敗しました"});
    }
});

app.listen(PORT,() => {
    console.log(`Proxy server runnning on port ${PORT}`);

});