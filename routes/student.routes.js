const { Router } = require('express');
const { check } = require('express-validator');

const {
    studentsPost,
    studentsGet,
    /*studentsGetId,
    studentDelte,
    studentPut*/
} = require("../controllers/studentController");

const router = Router();

router.get("/", studentsGet);

router.post(
    "/",
    [check("name", "Disculpe el nombre no puede estar vacio").not().isEmpty(),
    check("email", "Este email no es valido para nosotros").isEmail(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({ min: 6 }),
    check("grade", "Disculpe el grado del estudiante no puede estar vacio").not().isEmpty(),
    ], studentsPost
);
/*
router.get(
    "/:id",
    [
        check('id', 'El id no es permitido, ingrese el correcto').isMongoId(),
        check('id'),
    ], studentsGetId
);

router.delete(
    "/:id",
    [
        check('id', 'El id no es permitido, ingrese el correcto').isMongoId(),
        check('id'),
    ], studentDelte
);

router.put(
    "/:id",
    [check('id', 'El id no es permitido, ingrese el correcto').isMongoId(),
    check('id'),
    ], studentPut
);
*/
module.exports = router;
