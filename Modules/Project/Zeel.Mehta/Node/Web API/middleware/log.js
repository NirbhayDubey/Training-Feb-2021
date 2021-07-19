const info=(req,res,next) => {
    console.log(req.headers.ip);

    console.log(`${req.url} - ${req.method} and ${new Date()}`);
         next();


}
module.exports=info;