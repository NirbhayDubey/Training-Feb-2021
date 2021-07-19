var express = require("express");
var router = express.Router();
const { User } = require("../Models/userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
//const  {token} = require('morgan')

//generate new object for google auth
const client = new OAuth2Client(
  "453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
);

var jwt = require("jsonwebtoken");
const { response } = require("express");

/* GET users listing. */
exports.getResponse = async function (req, res, next) {
  res.send("Welcome please login");
};

exports.login = async function (req, res, next) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User alredy registerd");

    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res
      .header("x-auth-token", token)
      .send(_.pick(user, ["_id", "name", "email"]));
  } catch {
    res.send("Something went wrong");
  }
};

//  exports.googleLogin = (req, res) => {
//   try{
//       const { tokenId } = req.body;

//   client.verifyIdToken({
//     idToken:tokenId,
//     audience:
//       "453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
//   }).then(response=>{
//     const {email_verified,name,email} = response.payload
//     if(email_verified) {
//       User.findOne({email}.exec((err,user)=>{
//         if(err){
//             return res.status(400).json({
//               error:"Something went wrong"
//             })
//         }else{
//           if(user){
//               const token = jwt.sign({_id:user._id},process.env.JWT_SIGIN_KEY,{expiresIn:'7d'})
//               const {_id,name,email} =user;
//               res.json({
//                 token,
//                 user:{_id,name,email}
//               })
              
//           }else{
//               let password = email+process.env.JWT_SIGNIN_KEY
//               let newUser = new User({name,email,password});
//               newUser.save((err,data) ={
//                 if(err){
//                   return res.status(400).json({
//                     error:"Something went wrong..."
//                   })
//                 }
//                 const token = jwt.sign({_id:data._id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'})
//                 const {_id,name,email} = user;

//                 res.json({
//                   tokken,
//                   user:{_id,name,email}
//                 })
//               })else{
//                 let password = email+process.env.JWT_SIGNIN_KEY;
//                 let newUser = new User({name,email,password});
//                 newUser.save((err,data)=>{
//                   if(err){
//                     return res.status(400).json({
//                       error:"Something went wrong..."
//                     })
//                   }
//                 })
//               }
//           }
//         }
//       })
      
//       )}
//     console.log(response.payload);
//   });
//   console.log();
// }catch{
//   res.send('something happend dear.Its look like you are not a programmer' )
// }
// };
