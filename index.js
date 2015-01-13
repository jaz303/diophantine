// ax + by = c
exports.linear = linear;
function linear(a, b, c) {
    var out = [];
    for (var i = 0; i < c; ++i) {
        for (var j = 0; j < c; ++j) {
            if (i * a + j * b === c) {
                out.push({a: i, b: j});
            }
        }
    }
    return out;
}

console.log(linear(4, 3, 980));