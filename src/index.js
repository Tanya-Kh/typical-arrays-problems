
exports.min = function min(array) {
    if (array !== undefined && array.length) {
        return Math.min.apply(Math, array);
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (array !== undefined && array.length) {
        return Math.max.apply(Math, array);
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (array !== undefined && array.length) {
        var amount = array.length;
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / amount;
    } else {
        return 0
    }
}
