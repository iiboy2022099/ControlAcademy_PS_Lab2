const {response} = require('express');
const Student = require('../models/student')
const bcryptjs = require('bcryptjs');

const studentsGet = async(req , res = response) =>{
    const {limite, desde} = req.query;
    const query = {estado:true};

    const [total, students] = await Promise.all([
        Student.countDocuments(query),
        Student.find(query)
        .skip(Number(desde))
        .limit(Numbre(limite))

    ]);

    res.status(200).json({
        total,
        students
    });
}

/*
const studentsGetId = async (req ,res) => {
    const {id} = req.params;
    const student = await Student.findOne ({_id: id});

    res.status(200).json ({
        student
    });
}

const studentDelte = async (req, res) =>{
    const {id} = req.params;
    const student = await Student.findByIdAndUpdate(id, {estado: false});
    const studentAuthenticated = req.student;

    res.status(200).json({
        msg: 'Student to eliminate',
        student,
        studentAuthenticated
    });
}

const studentPut = async (req, res = response) =>{
    const {id} = req.params;
    const {_id,password,email, ...resto} = req.body;

    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const student = await Student.findByIdAndUpdate(id , resto);

    res.status(200).json({
        msg: 'Updated Student',
        student
    });
}
*/
const studentsPost = async (req, res) => {
    const {name, email, password, grade} = req.body;
    const student = new Alumno({name, email, password, grade});

    const salt = bcryptjs.genSaltSync();
    student.password = bcryptjs.hashSync(password, salt);

    await student.save();
    res.status(202).json({
        student
    });
}


module.exports ={
    studentsPost,
    studentsGet
   /* studentsGetId,
    studentDelte,
    studentPut*/
}

