"use strict" //厳格モードにする

//モジュール
const express = require("express");
const http = require("http");
const path = require("path");

//オブジェクト
const app = express();
const server = http.Server(app);

//定数
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

//公開フォルダの指定
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//サーバの起動
server.listen(
    PORT, 
    () => {
        console.log("Server on port %d", PORT);
    }
);