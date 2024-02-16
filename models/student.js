const{Schemma, model} = requiere('mongoose');

const StudentSchemma = Schemma({
    nombre:{
        type: [true, 'El Nombre es un capo obligatorio']
    },
    email:{
        type:String,
        requiere: [true, 'El correo es un campo obligatorio'],
        unique: true
    },
    password:{
        type:String,
        requiere: [true, 'La contraseña es un campo obligatorio']
    },
    role:{
        type: String,
        default: "STUDENT_ROLE"
    },
    grado:{
        type: String,
        require: [true, 'El grado es un campo obligatorio']
    },
    cursos:{
        type: [String],
        default: []
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Student', StudentSchemma);