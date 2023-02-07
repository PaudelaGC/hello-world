let AlphabetCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
encodeToA1 = lineToCode => {
    let result = 0;
    let holder = 0;
    let found = false;
    for (let i = 0; i < lineToCode.length; i++) {
        for (let y = 0; y < AlphabetCaps.length; y++) {
            if (lineToCode[i] === AlphabetCaps[y] && !found) {
                found = true;
                holder = Math.pow(26, i) * (y + 1);
                result = result + holder;
            }
        }
        found = false;
    }
    return console.log(result);
}

encodeToA1('A');
encodeToA1('B');
encodeToA1('C');
encodeToA1('Z');
encodeToA1('AC');
encodeToA1('AAA');
encodeToA1('ABCDE');
