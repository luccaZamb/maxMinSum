function minMaxSum(input) {
    var num = input.split(' ');
    for (var i = 0; i < num.length; i++) {
        num[i] = parseInt(num[i])
    }
    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < num.length; i++) {
        var sum = 0;
        for (var j = 0; j < num.length; j++) {
            if ( i != j ) {
                sum += num[j];
            }
        }
        if (sum < min) min = sum;
        if (sum > max) max = sum;
    }
    console.log(min, max)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
minMaxSum(_input);
});