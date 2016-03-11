function diff(arr1, arr2) {
    var diff1 = arr1.filter(function (element, index, array) {
        return arr2.indexOf(element) === -1;
    });
    var diff2 = arr2.filter(function (element, index, array) {
        return arr1.indexOf(element) === -1;
    });

    return diff1.concat(diff2);
}

// Expect ["pink wool"]
console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
