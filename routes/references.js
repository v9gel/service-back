var express = require('express');
var router = express.Router();
var db = require('../models/index')

router.get('/activities', function(req, res, next) {
    db['activities'].findAll({
        attributes: ['id', 'name', 'code']
    })
        .then(activities => {
            res.json(activities)
        });
});

router.get('/subdivisions', function(req, res, next) {
    db['subdivisions'].findAll({
        attributes: ['id', 'name', 'code', 'kladr'],
        include: [
            {
                model: db['activities'],
                attributes: ['id', 'name'],
            }
        ]
    })
        .then(subdivisions => {
            res.json(subdivisions)
        });

});

module.exports = router;