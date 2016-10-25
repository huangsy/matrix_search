var MatrixSearch = require('./MatrixSearch');
var should = require('should');
var matrix = [
    [2,   4,  8,  9],
    [10, 13, 15, 21],
    [23, 31, 33, 51]
];

MatrixSearch.search(matrix, 4).should.be.exactly(true);
MatrixSearch.search(matrix, 3).should.be.exactly(false);
