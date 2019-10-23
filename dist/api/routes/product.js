'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerProduct = _express2.default.Router();

routerProduct.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'you get all the products'
    });
});

routerProduct.post('/', function (req, res, next) {
    res.status(200).json({
        message: 'you post fews products'
    });
});

routerProduct.get('/:productId', function (req, res, next) {
    var id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you got the special id of product',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you got an id'
        });
    }
});

routerProduct.put('/:productId', function (req, res, next) {
    res.status(200).json({
        message: 'you update the product'
    });
});

routerProduct.delete('/:productId', function (req, res, next) {
    res.status(200).json({
        message: 'you delete the product'
    });
});

exports.default = routerProduct;