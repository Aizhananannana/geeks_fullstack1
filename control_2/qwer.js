//Task 1

//let phoneNumber = 4815154823541789;
function cl (phoneNumber, symbol = "*"){
    return phoneNumber.slice(0,6) +
    symbol.repeat(phoneNumber.length - 10) + phoneNumber.slice(-4);
}
console.log(cl("4815154823541789"));
console.log(cl("4815154823541789", "*"));



//Task 2
function cll (grade, symbol = "*"){
    if(grade<1 || grade >5){
        return "";
    }
    let stars = "";

    for(let i=0; i<grade; i++){
        stars+="*";
    }
    return stars
}
console.log(cll(5));  
console.log(cll(2));  
console.log(cll(10)); 
console.log(cll(-5)); 


//Task 3 
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
