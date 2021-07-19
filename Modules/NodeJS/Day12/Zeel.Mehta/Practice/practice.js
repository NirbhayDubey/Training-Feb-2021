const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength:5,
        maxlength:255,
        // match:/pattern/
    },
    category:{
        type:String,
        required:true,
        enum:['web','mobile','network'],
        lowercase: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync : true,
            validator: function(v, callback){
                setTimeout(() =>{
                    // Do some async work
                    const result = v && v.lenght>0;
                    callback(result)
                },4000);
            },
            message : 'A course should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min:10,
        max:200
    }
});

const Course=mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        category:'Web',
        author: 'Mosh',
        tags: ['frontend'],
        isPublished: true,
        price: 15
    });

    try{
        
        const result = await course.save();
        console.log(result);
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message);
    }    
}

async function getCourses(){

}
async function updateCourse(id){

}
async function removeCourse(id){

}

createCourse();