// task1 


let grades = [2,4,5,3,4,5,5,5,3]
let result = []
for(let i = 0; i < grades.length; i++){
    if(grades[i] == 5){
        result.push("Great")
    } 
    if(grades[i] == 4){
        result.push("Good")
    }
    if(grades[i] == 3){
        result.push("Okey")
    }
    if(grades[i] == 2){
        result.push("Bad")
    }
}
console.log(grades)
console.log(result)



//task 2


let inn = ["01212201212345", "11212201212345", "21212201212345", "11212201212345", 
    "11212201212345", "01212201212345", "21212201212345"]
let countCompanies = 0;
let countMale = 0;
let countFemale = 0;
for(let i=0; i<inn.length; i++){
    if(inn[i][0] == "0"){
        countCompanies++;
    }
    if(inn[i][0] == "1"){
        countFemale++;
    }
    if(inn[i][0] == "2"){
        countMale++;
    }
}
console.log(inn)
console.log("Count of Companies: " + countCompanies)
console.log("Count of Female: " + countFemale)
console.log("Count of Male: " + countMale)


// task 3

let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
let countVisaCards = 0;
for(let i=0; i<cards.length; i++){
    if(cards[i][0] == "4"){
        countVisaCards++;
    }
}
console.log(cards)
console.log(countVisaCards + " out of 7 cards are Visa")