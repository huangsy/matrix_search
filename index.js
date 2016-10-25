var MatrixSearch = require('./MatrixSearch');
var should = require('should');
var matrix = [
    [2,   4,  8,  9],
    [10, 13, 15, 21],
    [23, 31, 33, 51],
    [53, 61, 63, 71],
    [73, 81, 83, 91],
    [93, 101, 103, 121]
];

MatrixSearch.getRowNum(matrix, 1).should.be.exactly(-1);
MatrixSearch.search(matrix, 1).should.be.exactly(false);

MatrixSearch.getRowNum(matrix, 4).should.be.exactly(0);
MatrixSearch.search(matrix, 4).should.be.exactly(true);

MatrixSearch.getRowNum(matrix, 3).should.be.exactly(0);
MatrixSearch.search(matrix, 3).should.be.exactly(false);

MatrixSearch.getRowNum(matrix, 22).should.be.exactly(-1);
MatrixSearch.search(matrix, 22).should.be.exactly(false);

MatrixSearch.getRowNum(matrix, 60).should.be.exactly(3);
MatrixSearch.search(matrix, 60).should.be.exactly(false);

MatrixSearch.getRowNum(matrix, 81).should.be.exactly(4);
MatrixSearch.search(matrix, 81).should.be.exactly(true);

MatrixSearch.getRowNum(matrix, 100).should.be.exactly(5);
MatrixSearch.search(matrix, 100).should.be.exactly(false);

MatrixSearch.getRowNum(matrix, 130).should.be.exactly(-1);
MatrixSearch.search(matrix, 130).should.be.exactly(false);
