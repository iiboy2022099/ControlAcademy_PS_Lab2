const{Schema, model} = require('mongoose');

const StudentSchema = Schema({
    name:{
        type: [true, 'El Nombre es un capo obligatorio']
    },
    email:{
        type:String,
        require: [true, 'El correo es un campo obligatorio'],
        unique: true
    },
    password:{
        type:String,
        require: [true, 'La contraseña es un campo obligatorio']
    },
    role:{
        type: String,
        default: "STUDENT_ROLE"
    },
    grade:{
        type: String,
        require: [true, 'El grado es un campo obligatorio']
    },
    course:{
        type: [String],
        default: []
    },
    state:{
        type: Boolean,
        default: true
    }
});

/*StudentSchema.methods.toJSON = function(){
    const{ __v, password, _id, ...student} = this.toObject();
    student.uid = _id;
    return student;
};*/


module.exports = model('Student', StudentSchema); 
