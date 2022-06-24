function Grade(num) {
    var num;
    num = 60;
    if (num >= 90) {
        rank = ("Grade A");
    }
    else if (num >= 80) {
        rank = ("Grade B");
    }
    else if (num >= 70) {
        rank = ("Grade C");
    }
    else if (num >= 60) {
        rank = ("Grade D");
    }
    else {
        rank = ("FAIL");
    }
    return rank;
}
var output = Grade(60);
console.log(output);
