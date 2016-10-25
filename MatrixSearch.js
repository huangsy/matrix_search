module.exports = {
    // 二分查找，递归
    binary: function(array, from, to, target) {
        var mid;
        if (from <= to) {
            mid = parseInt((from + to) / 2);
            if (array[mid] === target) {
                return true;
            } else if (target < array[mid]) {
                return this.binary(array, from, mid - 1, target);
            } else {
                return this.binary(array, mid + 1, to, target);
            }
        } else {
            return false;
        }
    },

    // 获取所在行数
    getRowNum: function(matrix, target) {
        var from = 0; // 起始行
        var to = matrix.length - 1; // 末尾行
        var rowSize = to; // 行数
        var rowNum = -1; // 所在行号，-1为不存在
        // 二分查找，非递归
        while (from !== to) {
            var mid = parseInt((from + to) / 2);
            var midRow = matrix[mid]; // 中间一行
            var prevRow = matrix[mid - 1]; // 中间前一行
            var nextRow = matrix[mid + 1]; // 中间后一行
            if (midRow[0] <= target && midRow[midRow.length - 1] >= target) {
                // 在中间一行
                rowNum = mid;
                break;
            } else if (mid === 1 && prevRow[0] >= target && prevRow[prevRow.length - 1] <= target ) {
                // 在第一行
                rowNum = 0;
                break;
            } else if (mid + 1 === rowSize && nextRow[0] <= target && nextRow[nextRow.length - 1] >= target) {
                // 在最后一行
                rowNum = rowSize;
                break; 
            } else if (mid > 1 && prevRow[prevRow.length - 1] >= target) {
                // 在中间一行前面
                to = mid - 1;
            } else if (mid + 1 < rowSize && nextRow[0] <= target) {
                // 在中间一行后面
                from = mid + 1;
            } else {
                // 不在任何一行
                break;
            }
        }
        // 找到所在行
        if (from === to) {
            rowNum = from;
        }
        return rowNum;
    },

    search: function(matrix, target) {
        var rowNum = this.getRowNum(matrix, target);
        if (rowNum < 0) { // 找不到行号，即不存在
            return false;
        }
        return this.binary(matrix[rowNum], 0, matrix[rowNum].length - 1, target);
    }
};
