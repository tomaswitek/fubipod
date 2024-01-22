// include dependencies
import express from "express";
import {createProxyMiddleware, Options} from "http-proxy-middleware";
import https from "https";
import fs from "fs";

const app = express();

const options: Options = {
  router: {
    "api.example.com": "http://127.0.0.1:8055",
    "example.com": "http://127.0.0.1:3000",
  },
  target: "http://127.0.0.1:3000",
  ws: true,
  // ssl: true,
  // secure: true,
  changeOrigin: true,
};

const sslOptions = {
  key: fs.readFileSync("./key.pem"), // replace with your key.pem file path
  cert: fs.readFileSync("./cert.pem"), // replace with your cert.pem file path
};

app.use(createProxyMiddleware(options));

// app.listen(80);
https.createServer(sslOptions, app).listen(443);
