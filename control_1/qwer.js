//Task 1 
function ww(){
    let mass = [2005, 2016, 2012, 2018, 2021, 2018, 2014];
    let countPresents = 0;
    let countAllChildren = mass.length;

    for(let i=0; i<mass.length; i++){
        let age = 2026 - mass[i];
        if(age >= 6 && age <= 11){
            countPresents ++;
        }
    }
    console.log(countPresents + " детей из " + countAllChildren + " получат подарки на НГ ")
}
ww();
