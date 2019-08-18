let a = [];

function generateRandom(){
    return Math.round(10*Math.random());
}

function generateArray(){
    for(let i = 0; i < 100; i++){
        a.push(generateRandom())
    }
    console.log(a);
}
generateArray();

function calcStat(){
    for(let i = 0; i < a.length; i++) {
        if(stat[a[i]]) stat[a[i]]++;
        else stat[a[i]] = 1;
    }
    console.log(stat);
        
}
calcStat();