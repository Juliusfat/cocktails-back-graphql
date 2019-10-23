'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('./api/routes/product');

var _product2 = _interopRequireDefault(_product);

var _order = require('./api/routes/order');

var _order2 = _interopRequireDefault(_order);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));

// Routes which should handle request
app.use('/products', _product2.default);
app.use('/orders', _order2.default);

app.use(function (req, res, next) {
    var error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

exports.default = app;