module.exports = {
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
    search: function(matrix, target) {
        var rowSize = matrix.length;
        return result = this.binary([1,2,4], 0, 2, target);
    }
};;
