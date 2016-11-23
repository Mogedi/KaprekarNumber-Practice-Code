function Kaprekar(input1, input2) {

    var i = input1;

    var arrayOfDigits = [];

    var arrayOfSquaredDigits = [];

    var arrayOfConditionals = [];

    var arrayOfSummedDigits = [];

    var arrayOfSumsOfDigits = [];

    var arrayOfIndex = [];

    while(i <= input2) {
        arrayOfDigits.push(i);
        arrayOfSquaredDigits.push(Math.pow(i, 2).toString())
        arrayOfConditionals.push(Math.pow(i, 2).toString().length % 2 == 0);
        i++;
    }

    for(var i = 0; i < arrayOfSquaredDigits.length; i++) {
        if(arrayOfConditionals[i]) {
            var index = arrayOfSquaredDigits[i].length / 2
            arrayOfSummedDigits.push(parseInt(arrayOfSquaredDigits[i].substr(0, index)) + parseInt(arrayOfSquaredDigits[i].substr(index, arrayOfSquaredDigits[i].length)));
            // arrayOfEvenLengthDigits.push(parseInt(arrayOfDigits[i].substr(index, arrayOfDigits[i].length)));

            arrayOfIndex.push(i);
        }

    }

    var arrayOfFinals = [];

    for (var i = 0; i < arrayOfSummedDigits.length; i++) {
        if (arrayOfDigits[arrayOfIndex[i]] == arrayOfSummedDigits[i]) {
            arrayOfFinals.push(arrayOfSummedDigits[i])

        }
    }

    // 
    // console.log(arrayOfSummedDigits);
    // console.log(arrayOfIndex);
    // console.log(arrayOfDigits);
    // console.log(arrayOfDigits[arrayOfIndex[5]]);
    console.log(arrayOfFinals);

    return Array.isArray(arrayOfSquaredDigits)
}
