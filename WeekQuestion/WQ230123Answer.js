function llegirString(x){
    llistat = [];
    let numAbns;
    let numDesp;
    let other = "...";
    llistat[0] = x[0];
    for(let i = 0; i<x.length; i++){
        numAbns = x[i]
        if(i != (x.length - 1)){
            numDesp = x[i+1];
            if(numDesp - numAbns == 1){
                llistat.push(numDesp);
    
            }else
            if(numDesp - numAbns == 2){
                llistat.push((numAbns + 1));
                llistat.push(numDesp);
            }else{
                llistat.push(other);
                llistat.push(numDesp);
            }
        }
        
    }
    console.log(llistat);
}


const llista = [1,2,4,5,7,9,11,22,24,28,29,30,32,33,37,45];
llegirString(llista);

