async function uploadFile(fileName, fileKey) {
    return new Promise(async function(resolve, reject) {
    const params = {
    Bucket: ‘bucketName’, // pass your bucket name
    Key: fileKey,
    ACL: ‘public-read’,
    Body: fileSystem.createReadStream(fileName.path),
    ContentType: fileName.type
    };
    await s3.upload(params, function(s3Err, data) {
    if (s3Err){
    reject(s3Err);
    }
    console.log(`File uploaded successfully at ${data.Location}`);
    resolve(data.Location);
    });
    });
    }

    var uploadFilePromises = [];

    var cpUpload = upload.fields([{ name:’screenShots’, maxCount:1 },{ name:’apk’, maxCount:1 }]);
router.post(‘/updateApp’, cpUpload, async function (req, res, next) {
}