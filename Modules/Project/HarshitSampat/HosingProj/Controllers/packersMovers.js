//import module
const {PackersAndMovers} = require('../Models/PackersAndMovers')

//
//const {} = require('')

//get all packersandmover 
exports.getpackerAndMovers = async (req,res)=>{
        if(req.params.id){
            //get Packers movers details by id
            const getPackerAndMoversData = await PackersAndMovers.findById(req.params.id)
            if(!getPackerAndMoversData) res.send("Could not get what you want")
    
            //send response
            res.send(getPackerAndMoversData)
        }
        else{
            // get all packers and movers 
            const getpackerandmovers = await PackersAndMovers.find()
            res.send(getpackerandmovers)
        }
    }

//add new data to users which want packers and movers
exports.addNewData_Packers_ANd_Movers = async (req,res)=>{

   const NewData = new  PackersAndMovers({
    User:req.body.User,
    ReloacteFrom: req.body.ReloacteFrom,
    ReloacteTO : req.body.ReloacteTO,
    TentativeDateOfMovement:req.body.TentativeDateOfMovement
})
    //save to database
    await NewData.save()

    //send response
    res.send(NewData)

}   


