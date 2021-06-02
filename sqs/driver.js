'use strict';

const { Consumer } = require('sqs-consumer')

const app = Consumer.create({
    queueUrl: 'https://sqs.us-east-2.amazonaws.com/090585669487/caps',
    handleMessage: async (msg) => {
        let parsed = JSON.parse(msg.Body);
        let order = JSON.parse(parsed.Message)
        console.log(order);
    }
})


app.on('error', (err) => {
    console.error(err.message);
  });
   
  app.on('processing_error', (err) => {
    console.error(err.message);
  });
   
  app.start();
  