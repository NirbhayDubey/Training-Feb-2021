//import modules

const {Assistant, validateAssistant:validate}= require('../Models/asistant')

//get all assistants
exports.getAllAssistants = async (req,res)=>{
   
    if(req.params.id){
        //get assistant by id
        const assistant = await Assistant.findById(req.params.id).populate('Department')
        if(!assistant) res.send("Could not find assistant check id")

        //send response
        res.send(assistant)
    }
    else
    { //get all assistant
    const assistants = await Assistant.find().populate('Department')

    //send response
    res.send(assistants)
   }
}

//add new assisstant    

exports.addNewassistant = async (req,res)=>{
    
    //validate
    const validateAssistant = validate(req.body)
    if(!validateAssistant)res.status(400).res.send('Could not found')

    //add new assistant
    const assistant  = new Assistant({
        assistantName :req.body.assistantName,
        assistantEmail:req.body.assistantEmail, 
        assistantNo: req.body.assistantNo,
        department: req.body.department
    })
    await assistant.save()
//send response
    res.send(assistant);

}

exports.updateAssistant = async (req,res)=>{
    //check assistant is in database or not
    const assistant =  await Assistant.findById(req.params.id);
    if(!assistant) res.status(400).send('Assistant not found')
    
    //update assistant
        if(req.body.assistantName) assistant.assistantName=req.body.assistantName;
        if(req.body.assistantEmail)assistant.assistantEmail=req.body.assistantEmail; 
        if(req.body.assistantNo)assistant.assistantNo= req.body.assistantNo;
        if(req.body.department)assistant.department= req.body.department;

        //save data to database
        assistant.save()

        //send response
        res.send(assistant)
}


exports.deleteAssistant = async (req,res)=>{

    //remove if doctor exist
    const assistant = await Assistant.findByIdAndRemove(req.params.id)

    //if not found 
    if(!assistant) return res.status(401).send('Assistant with this id is not found')

    //send response
    res.send(assistant)

}