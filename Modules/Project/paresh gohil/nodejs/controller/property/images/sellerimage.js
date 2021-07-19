const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const router = express.Router({mergeParams : true})
const authenticate = require("../../authentication/authentication")
const multer = require("multer")
const upload = multer().single('Images')
const {Sellerimage} = require("../../../model/sellerimage")
const fs = require("fs")

app.use(express.json());

app.use(fileUpload());

class sellers{
    static async all(req,res){
        const image = await Sellerimage.find({Property_Type_id : req.params.propertyid})
        res.send(image)
    }
    static async posts(req,res){
        console.log("hello")
        console.log(req.params.propertyid)
        // const imagees = Buffer.from(req.body.Images,'base64')
        // console.log(imagees)
        const image = new Sellerimage({
            Property_Type_id : req.params.propertyid,//"6081800d82106d386c2a878f",
            imageid : req.body.imageid,
            Images : {
                data : req.file.buffer,
                contentType : req.file.mimetype
            }        
        })
        // var buffer = req.body.Images.data
        // var image1 = fs.writeFileSync("path.png",buffer)
        const result = await image.save()
        res.send(result)
    }
    static async puts(req,res){
        const image = Sellerimage.find({Property_Type_id : req.params.propertyid, imageid : req.params.imageid})
        const image1 = await Sellerimage.updateOne(image,{Images : {
            data : req.file.buffer,
            contentType : req.file.mimetype
        }})
        res.send(image1)
    }
    static async deletes(req,res){
        const image = Sellerimage.find({Property_Type_id : req.params.propertyid, imageid : req.params.imageid})
        const result = await Sellerimage.deleteOne(image)
        res.send(result)
    }
}

router.get("/",sellers.all)

router.post("/",upload,sellers.posts)

router.put("/:imageid",authenticate,sellers.puts)

router.delete("/:imageid",authenticate,sellers.deletes)

module.exports = router
