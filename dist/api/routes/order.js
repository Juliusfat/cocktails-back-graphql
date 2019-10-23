'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerOrder = _express2.default.Router();

routerOrder.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'you get all the orders'
    });
});

routerOrder.post('/', function (req, res, next) {
    res.status(200).json({
        message: 'you post fews orders'
    });
});

routerOrder.get('/:orderId', function (req, res, next) {
    var id = req.params.orderId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you got the special id of order',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you got an id'
        });
    }
});

routerOrder.put('/:orderId', function (req, res, next) {
    res.status(200).json({
        message: 'you update the order'
    });
});

routerOrder.delete('/:orderId', function (req, res, next) {
    res.status(200).json({
        message: 'you delete the order'
    });
});

exports.default = routerOrder;