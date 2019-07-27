const twit = require("twit");
const express = require("express");

const T = new twit({
  consumer_key: "Nqsp0hh3GVnJCaumctwDvrV3T",
  consumer_secret: "1fawUHffsFytpvuhNLcwDvhzlDCpBSD4jIoYJsoZc1Ao1wS6Ej",
  access_token: "372549963-Wnzqik3LDPFOi3Ailg7kkweoQxvGgMLSFluLpTOq",
  access_token_secret: "zWAot50vgUUdlEWZMVrmMBS6X1XFljgRBm1Fm893PAR77"
});

const fetchTweets = async query => {
  const { data } = await T.get("/search/tweets", {
    q: query,
    count: 10
  });
  return data;
};

const app = express();

app.get("/tweets/search", async (req, res) => {
  const { query } = req.query;
  const tweets = await fetchTweets(query);
  res.send(tweets);
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});
