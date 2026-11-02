//Task 1
const myFavoriteFilm = {
    rating:7.4,
    name: "spider man",
    debutYear: 2002,
    creators: "Stan Lee and Steve Ditko",
    Runtime: "121m",
    Director: "Sam Raimi",
    mainCast: "Tobey Maguire",
    plot:"After a mutant spider bite grants him superpowers, high schooler Peter Parker becomes Spider-Man to protect New York City and fight the villainous Green Goblin.",
    Genre: "Action, Adventure, Sci-Fi",
    BoxOffice: "$825,025,044"
}
 console.log(myFavoriteFilm)




 
//Task 2
const myFavoriteBook = {
    name: "Flowers for Algernon",
    autor: "Daniel Keyes",
    debut: 1959,
    NumbeOfPages: "311+-",
    Genre: "Science finction",
    Subgenres: "Psychological drama, philosophical fiction",
    Country: "USA",
    OriginalLanguage: "English",
    audience: "Teenagers and adults",
    description: "The book tells the story of Charlie Gordon, a man who undergoes an experiment to increase his intelligence. He becomes a genius but discovers that intelligence does not guarantee happiness.",
    themes: "Intelligence, friendship, love, loneliness, and human dignity"
}
console.log(myFavoriteBook)






// Task 3
let IssikKul = {
    name: "Иссык-Куль",
    region: "Иссык-Кульская область",
    distanceFromBishkek: 260,
    comfortLevel: 5,
    entertainment: [
      "Купание",
      "Катание на катерах",
      "Рыбалка",
      "Горные экскурсии"
    ],
    history: "Иссык-Куль — одно из крупнейших высокогорных озёр мира. Его название переводится как «горячее озеро», так как оно не замерзает зимой.",
    bestSeason: "Лето"
}
let AlaArcha = {
    name: "Ала-Арча",
    region: "Чуйская область",
    distanceFromBishkek: 40,
    comfortLevel: 4,
    entertainment: [
      "Пешие прогулки",
      "Альпинизм",
      "Походы в горы",
      "Фотографирование"
    ],
    history: "Национальный парк Ала-Арча был основан в 1976 году для сохранения красивой горной природы Кыргызстана.",
    bestSeason: "Весна и лето"
  }
let TashRabat = {
    name: "Таш-Рабат",
    region: "Нарынская область",
    distanceFromBishkek: 520,
    comfortLevel: 2,
    entertainment: [
      "Осмотр исторического памятника",
      "Верховая езда",
      "Фотографирование",
      "Походы в горы"
    ],
    history: "Таш-Рабат — древний каменный караван-сарай, который служил местом отдыха торговцев на Великом шёлковом пути.",
    bestSeason: "Лето"
  }

const allSight = [IssikKul,AlaArcha,TashRabat];
console.log(allSight)