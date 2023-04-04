const express = require('express')
const { createClient } = require('redis')
const app = express()
const client = createClient({
  url: process.env.REDIS_SERVER_URL
});

client.on('error', err => console.log('Redis Client Error', err));

async function increment(){
  let retries = 5;
  while (true) {
    try {
      return await client.incr('hits')
    } catch (e) {
      if(retries === 0){
        throw e
      }
      retries -= 1;
    }
  }
}

app.get('/',async function (req, res) {
  let conunt = await increment();
  res.send('Hello World' + conunt);
})

app.listen(3000, async function() {
  await client.connect();  
})