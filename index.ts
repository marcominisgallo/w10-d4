console.log("ciao typescript");
// 1) Quali sono i tipi primitivi principali in TypeScript?

// risposta nr1 . abbiamo come tipo primitivi:
// string,numero, booleano,null,undefined ed any

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let nameUser: string = "Marco";
let age: number = 24;
let studyingTypeScript: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
const greet = function (name: string, greeting: string = "Ciao") {
    return greeting + " " + name;
  };
  console.log(greet("Marco",));
  console.log(greet("Marco", 'Salve'));

  // 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
    return a + b;
  };
console.log("SUM", sum(1, 1))

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoConIva = function (prezzo: number, iva: number = 0.22): number {
    return prezzo + prezzo * iva;
  };
  console.log('PREZZOCONIVA', prezzoConIva(200));

  // 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
  
  const concatString = function (s1: string, s2: string) {
    return s1.length + s2.length;
  };
  console.log('CONCATSTRING', concatString("ciao", "ioan"));
  
  const concatStringMarco = function (s1: string, s2?: string) {
    return s1.length + (s2 || "buongiorno").length;
  };
  console.log('concatStringMarco', concatStringMarco("ciao"));
  // 7) Cos'è un Type Union e come si scrive?

  //   un type union puo essere definito come un tipo che può avere più  tipi diversi. In TypeScript, puoi definire un tipo union utilizzando il simbolo | (pipe) tra i tipi. Ad esempio, puoi definire un tipo che può essere sia una stringa che un numero come string | number.
  
  // 8) Crea una variabile che possa contenere un numero, null o undefined.
  
  let typeUnion: number | null | undefined;
  // 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
  let giorniDellaSettimana:
    | "Lunedi"
    | "Martedi"
    | "Mercoledi"
    | "Giovedi"
    | "Venerdi"
    | "Sabato"
    | "Domenica" = "Lunedi";
  
  console.log('giorniDellaSettimana', giorniDellaSettimana);
  
  // 10) Tipizza il seguente array di numeri:
  // const numbers = [1, 2, 3]
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  
  console.log('numbers', numbers);
  
  // 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
  
  const tupla: [string, string, string, number, number] = [
    "ciao",
    "siamo",
    "i numeri",
    3,
    1,
  ];
  
  console.log('tupla', tupla);

  // 12) Qual è la differenza tra type e interface?
  
  //   La differenza principale tra type e interface in TypeScript è che type è più flessibile e può rappresentare tipi complessi, mentre interface è più rigida e viene utilizzata principalmente per definire la forma di oggetti. Inoltre, le interfacce possono essere estese e implementate, mentre i type non possono essere estesi.
  //   In generale, se hai bisogno di definire un tipo semplice o un'unione di tipi, puoi usare type. Se stai definendo la forma di un oggetto o una classe, è meglio usare interface.
  
  // 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
  
  interface Uomo {
    firstname: string;
    lastname: string;
    age: number;
  }
  // 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
  
  interface user extends Uomo {
    email: string;
    phone?: number;
  }
  
  const marco: user = {
    email: "marcominisgallo@yahoo.it",
    firstname: "Marco",
    lastname: "Minisgallo",
    age: 24,
  };
  console.log('marco', marco);
  // 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

  // Definizione del tipo "Studente"
type Student = {
    nome: string;
    voto: number;
  };
  
  // Creazione dell'array tipizzato di oggetti "Studente"
  const studenti: Student[] = [
    { nome: "Marco", voto: 30 },
    { nome: "Otta", voto: 30 },
    { nome: "Luca", voto: 25 },
    { nome: "Michele", voto: 29 },
  ];
  
  console.log('studenti', studenti);
  
  // 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
  
  interface Veicolo {
    brand: string;
    model: string;
    releaseYear: number;
  }
  
  interface Auto extends Veicolo {
    doors: number;
    engine: string;
  }
  // 17) Crea un oggetto che implementi l'interfaccia Auto.
  
  const macchina: Auto = {
    doors: 4,
    engine: "diesel",
    brand: "fiat",
    model: "panda",
    releaseYear: 2000,
  };
  console.log('macchina', macchina);
  // 18) Cosa sono i Generics in TypeScript?
  
  //   I Generics in TypeScript sono un modo per creare componenti riutilizzabili che possono lavorare con diversi tipi di dati senza perdere le informazioni sui tipi. Consentono di definire funzioni, classi e interfacce che possono operare su variabili di tipo generico, rendendo il codice più flessibile e riutilizzabile.
  //   I Generics sono definiti utilizzando parametri di tipo tra parentesi angolari <>. Ad esempio, puoi definire una funzione,interfaccia o classe  generica che accetta un argomento di tipo A e restituisce un valore dello stesso tipo A:
  
  // interface Address<A> {
  //     // A è un GENERIC, un parametro DI TIPO
  //     street: string
  //     civicNumber: number
  //     city: string
  //     zipCode: number
  //     area: A // GENERIC
  //   }
  
  //   const italianAddress: Address<string> = {
  //     city: 'Genova',
  //     street: 'Corso Italia',
  //     civicNumber: 50,
  //     zipCode: 16100,
  //     area: 'Liguria',
  //   }
  
  // 19) È possibile avere più tipi generici in un'interfaccia?
  
  //   Si, è possibile avere più tipi generici in un'interfaccia in TypeScript. Puoi definire più parametri di tipo tra parentesi angolari quando dichiari l'interfaccia. Ad esempio:
  // interface Pair<T, U> {
  
  // 20) Crea un'interfaccia generica per una risposta API.
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  interface Rating {
    source: string;
    value: string;
  }
  
  interface ApiResponse2<A> {
    title: string;
    years: string | number;
    rated: string;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    ratings: A;
    metascore: string | number;
    imdBrating: string | number;
    imdbVotes: string | number;
    imdbID: string;
    type: string;
    DVD: string;
    boxOffice: string;
    production: string;
    website: string;
    response: boolean;
  }
  
  const response: ApiResponse2<Rating[]> = {
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