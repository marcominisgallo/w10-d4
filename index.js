console.log("ciao typescript");
// 1) Quali sono i tipi primitivi principali in TypeScript?
// risposta nr1 . abbiamo come tipo primitivi:
// string,numero, booleano,null,undefined ed any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nameUser = "Marco";
var age = 24;
var studyingTypeScript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name, greeting) {
    if (greeting === void 0) { greeting = "Ciao"; }
    return greeting + " " + name;
};
console.log(greet("Marco"));
console.log(greet("Marco", 'Salve'));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log("SUM", sum(1, 1));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoConIva = function (prezzo, iva) {
    if (iva === void 0) { iva = 0.22; }
    return prezzo + prezzo * iva;
};
console.log('PREZZOCONIVA', prezzoConIva(200));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatString = function (s1, s2) {
    return s1.length + s2.length;
};
console.log('CONCATSTRING', concatString("ciao", "ioan"));
var concatStringMarco = function (s1, s2) {
    return s1.length + (s2 || "buongiorno").length;
};
console.log('concatStringMarco', concatStringMarco("ciao"));
// 7) Cos'è un Type Union e come si scrive?
//   un type union puo essere definito come un tipo che può avere più  tipi diversi. In TypeScript, puoi definire un tipo union utilizzando il simbolo | (pipe) tra i tipi. Ad esempio, puoi definire un tipo che può essere sia una stringa che un numero come string | number.
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var typeUnion;
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
var giorniDellaSettimana = "Lunedi";
console.log('giorniDellaSettimana', giorniDellaSettimana);
// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3, 4, 5, 6];
console.log('numbers', numbers);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla = [
    "ciao",
    "siamo",
    "i numeri",
    3,
    1,
];
console.log('tupla', tupla);
var marco = {
    email: "marcominisgallo@yahoo.it",
    firstname: "Marco",
    lastname: "Minisgallo",
    age: 24,
};
console.log('marco', marco);
// Creazione dell'array tipizzato di oggetti "Studente"
var studenti = [
    { nome: "Marco", voto: 30 },
    { nome: "Otta", voto: 30 },
    { nome: "Luca", voto: 25 },
    { nome: "Michele", voto: 29 },
];
console.log('studenti', studenti);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var macchina = {
    doors: 4,
    engine: "diesel",
    brand: "fiat",
    model: "panda",
    releaseYear: 2000,
};
console.log('macchina', macchina);
var response = {
    title: "matrix",
    years: 1999,
    rated: "pg-13",
    runtime: "120min",
    genre: "action",
    director: "david",
    actors: "keanu",
    ratings: [
        {
            source: "Rotten Tomatoes",
            value: "85%",
        },
        {
            source: "Metacritic",
            value: "73/100",
        },
    ],
    metascore: "85",
    imdBrating: "8.7",
    plot: "un film di fantascienza",
    language: "inglese",
    country: "USA",
    awards: "oscar",
    poster: "https://example.com/poster.jpg",
    type: "movie",
    DVD: "201312314",
    production: "warner ",
    boxOffice: "cadomalato",
    website: "https://example.com",
    response: true,
    imdbVotes: 10000,
    imdbID: "tt123123",
};
