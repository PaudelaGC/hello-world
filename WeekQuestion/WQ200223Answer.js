function completarParentesis(llista){
    let oberts = 0;
    let tancats = 0;
    let total = 0;
    for(let i = 0; i<llista.length; i++){
        if(llista[i] === '('){
            oberts++;
        }else if(llista[i] === ')'){
            tancats++;
        }
    }
    if(oberts>tancats){
        total = oberts - tancats;
    }else{
        total = tancats - oberts;
    }
    console.log(total);
}

completarParentesis('))))');
completarParentesis(')()))');
completarParentesis(')(()');
completarParentesis('(');
