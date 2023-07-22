import { createContext, useState } from "react";

const initialState = {
  wordsList: []
};

export const MyContext = createContext(initialState);

export const MyProvider = ({children}) => {

  const [currentRandomWords, setCurrentRandomWords] = useState([]);
  const [ currentLevel, setCurrentLevel ] = useState(1);
  const [ recallWords, setRecallWords ] = useState([]);

  const value = {
    wordsList: ["aparat", "atmosfera", "baka", "bar", "baron", "baze", "beba", "beli", "bes", "besan", "biblioteka", "bič", "biće", "blagoslov", "blato", "bogomoljka", "boj", "boja", "bol", "bolest", "bomba", "boravak", "borba", "brada", "brak", "brat", "brda", "brod", "brodić", "broj", "brz", "budan", "buka", "čaj", "čamac", "car", "čarobnjak", "carstvo", "čas", "čaša", "časovnik", "ćelija","čelik", "cena", "centar", "četiri", "cev", "cia", "cigle", "ciklus", "ćilim", "cilindar", "cilj", "cipela", "civilizacija", "čovečanstvo", "čovek", "creva", "crkva", "crv", "čudovište", "ćutanje", "čvor", "da", "dah", "daleko", "dama", "dan", "danas", "dar", "datum", "đavo", "deca", "dečaci", "dejstvo", "delfini", "deo", "desetina", "desni", "devet", "dim", "direktor", "disk", "div", "divljak", "dlan", "dnk", "dno", "doba", "dobro", "dodir", "događaj", "doktor", "dokument", "dolina", "dom", "doneti", "doručak", "dosadno", "draga", "drhtaj", "drugar", "drum", "društvo", "družina", "drveće", "država", "đubre", "dug", "duga", "dugme", "duhovi", "duž", "dužnost", "dva", "dvor", "dvorana", "dvorište", "dženkins", "džin", "džip", "efekat", "ekipa", "ekran", "ekspedicija", "eksperiment", "eksplozija", "elektron", "element", "energija", "evolucija", "fabrika", "faza", "figura", "film", "Bobi Fišer", "Magnus Karlsen", "Kasparov", "Novak Djokovic", "Lionel Messi", "Kristiano Ronaldo", "fizičar", "fizika", "flota", "fon", "fotografija", "funkcija", "galaksija", "gas", "gazda", "general", "genije", "glad", "glava", "glup", "gnezdo", "godina", "gomila", "gora", "gorivo", "gas", "gorko", "gosti", "gost", "govor", "gospodin", "gospodar", "govornik", "grad", "građevina", "gradonačelnik", "grana", "granica", "gravitacija", "grč", "greh", "greška", "grlo", "grmljavina", "grob", "grupa", "gusto", "gutljaj", "gužva", "gvožđe", "hakovati", "helikopter", "hemičar", "hladnoća", "hologram", "hor", "horizont", "hotel", "hrabrost", "hram", "hrana", "humir", "hvala", "ići", "ideja", "identitet", "idiot", "igla", "iluzija", "imanje", "informacija", "institut", "instrument", "inteligencija", "inženjer", "iskustvo", "istina", "istok", "zapad", "sever", "jug", "istorija", "ivica", "izazov", "izbor", "izdržati", "izgovor", "izlaz", "iznova", "iznenada", "izveštaj", "izvršiti", "ja", "jaje", "jak", "jastreb", "jastuk", "jato", "jednostavno", "jela", "jezik", "jugo", "jupiter", "jutro", "kabina", "kabl", "kadar", "kafe", "kamen", "kamera", "kamion", "kanal", "kancelarija", "kanjon", "kap",
"kapetan", "kapi", "kapija", "kapsula", "kaput", "kaput", "karta", "kardinal", "katarina", "andjela"],
    currentRandomWords: currentRandomWords,
    setCurrentRandomWords: setCurrentRandomWords,
    currentLevel,
    setCurrentLevel,
    recallWords,
    setRecallWords
};




  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}
