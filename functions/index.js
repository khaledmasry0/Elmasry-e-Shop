const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51M3rkEIMAD5fKj4S4N4OkIXqETQLSmxLnslRH52WFo8oazvHA23iGGzkmPvAqdTbJdtSTazJii9X49Kp22XzJmBr002U1scnHB"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("khaled"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//http://127.0.0.1:5001/am-commerce/us-central1/api
exports.api = functions.https.onRequest(app);
