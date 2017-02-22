function addTogether() {

    var args = Array.from(arguments);

    if (args.length === 2) {
        if (typeof(args[0]) != 'number' || typeof(args[1]) != 'number')
            return undefined;

        else {
            return args[0] + args[1];
        }
    }

    else if (args.length === 1) {
        if (typeof(args[0]) != 'number')
            return undefined;

        else {
            return function (val) {
                
                return (typeof(val) == 'number') ? val + args[0] : undefined;
            };
        }

    }
}

addTogether(2,3);
var sumTwoAnd = addTogether(2);
sumTwoAnd(8);
addTogether(2)([3]);