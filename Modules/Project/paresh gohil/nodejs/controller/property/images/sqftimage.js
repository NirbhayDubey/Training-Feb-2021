const express = require("express")
const app = express()
const router = express.Router({mergeParams : true})
const multer = require("multer")
const upload = multer().single('seller')
const {Sqftimage} = require("../../../model/sqftimage")
const authenticate = require("../../authentication/authentication")

app.use(express.json())

class sqfts{
    static async all(req,res){
        const image = await Sqftimage.find({Property_Type_id : req.params.propertyid})
        res.send(image)
    }
    static async posts(req,res){
        const image = new Sqftimage({
            Property_Type_id : req.body.Property_Type_id,//"6081800d82106d386c2a878f",
            BHK : req.body.BHK,
            Area : req.body.Area,        
            Images : {
                data : req.file.buffer,
                contentType : req.file.mimetype
            },
            Budget : req.body.Budget        
        })
        // var buffer = req.file.buffer
        // var image1 = fs.writeFileSync("path.png",buffer)
        const result = await image.save()
        res.send(result)
    }
    static async puts(req,res){
        const image = Sqftimage.find({Property_Type_id : req.params.propertyid, BHK : req.params.BHK})
        const image1 = await Sqftimage.updateOne(image,{Images : {
            data : req.file.buffer,
            contentType : req.file.mimetype
        }})
        res.send(image1)
    }
    static async deletes(req,res){
        const image = Sqftimage.find({Property_Type_id : req.params.propertyid, BHK : req.params.BHK})
        const result = await Sqftimage.deleteOne(image)
        res.send(result)
    }
}

router.get("/",sqfts.all)

router.post("/",authenticate,upload,sqfts.posts)

router.put("/:BHK",authenticate,sqfts.puts)

router.delete("/:BHK",authenticate,sqfts.deletes)

module.exports = router
