generateArray = x => {
    let arrayContainer = [];
    for (let i = 0; i < x; i++) {
        let arrayInside = [];
        for (let y = 0; y < i + 1; y++) {
            arrayInside.push(y + 1);
        }
        arrayContainer.push(arrayInside);
    }
    return console.log(arrayContainer);
}
generateArray(15);
