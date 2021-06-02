'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-east-2:090585669487:caps';

const msg = JSON.stringify({ orderId: 12345, customer: "GOOGLE", vendorId: topic})

const payload = {
    Message: msg ,
    TopicArn: topic
}

sns.publish(payload).promise().then(data => {
    console.log('data from sns ===>', data);
}).catch(e => console.log(e.Message));

