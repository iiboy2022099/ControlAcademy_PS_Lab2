const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Role = require('../models/role');

const rolePost = async (req, res) => {
    const {role} = req.body;
    const rooles = new Role ({role});

    await rooles.save();
    res.status (200).json({
        role
    });
}

module.exports = {
    rolePost
} 