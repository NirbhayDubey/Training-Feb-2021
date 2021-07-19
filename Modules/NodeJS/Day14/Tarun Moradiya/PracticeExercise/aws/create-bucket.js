const AWS = require('aws-sdk');
const config = require('config');

// Enter copied or downloaded access ID and secret key here
const ID = config.get('ID');
const SECRET = config.get('SECRET');

// The name of the bucket that you have created
const BUCKET_NAME = 'rx-bucket';

// Initialize s3 interface by passing secretkey
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

// create bucket
const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-south-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});