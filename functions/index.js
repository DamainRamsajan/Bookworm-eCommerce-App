const functions = require('firebase-functions');
const express = require("express"); 
const cors = require("cors");
const stripe = require("stripe")("sk_test_51I8QuPA67WFEmKggiBWbNiuKSbaYLnHHUmJ5K2tYoIUNCaviycl53NdcOhdaZc94DwrinPa9qylMcUDZJJGaNirI00urqAIjco");

//API

//App Config
const app = express();

//Middleware
app.use (cors({origin: true}))
app.use (express.json());

//Api Routes
app.get("/", (request, response) => response.status(200).send ("Hello World"));

app.post ("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("payment requst received ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listener
exports.api = functions.https.onRequest(app);


