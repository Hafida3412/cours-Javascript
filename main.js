//log de Hello JS
console.log("Hello JS!");
let age = 37;//dans la console
/*
Apprenons à coder
en Javasript
*/
nomBloc (parametrage){
//instruction(s)et/ou boc(s)
}

//exemple concret simple
if (age >= ageMin){

}
while (k < 10){

}

/*les variables s'écrivent en camelCase, ps de sigle, ni d'accent. On peut mettre
un chiffre mais jamais au début*/

//exemples://

nom
deuxMots
unPeuPlusDeMots
longNomDeVariableEnCamelCase
eteEnsoleille//sans accent
segmentPoint1

//Variable "let"

let animal = "dog"; //déclaration et initialisation de la variable animal
animal ="cat"; //modification de sa valeur
animal= "bird";//modification de sa valeur

//Constante "const"

const deux = 2; //la valeur ne peut être modofiée
/* exemple écrire deux = 3 va générer une erreur.
-> uncaught TypeError: Assignement to constant variable.*/

//Les types de données primitifs les plus ustiles:

//un number: entier ou décimal
const deux = 2;
let quantite = 3;
const prix = 1.15;

//string: on le met entre guillemets/quottes
const prenom = "John";
let repas = "pizza";
constcriDuChien ="aboiement";

//boolean: true or false
let isAdult = true;
let isTaskDone = false;
const hasBeenToTokyo = true;

/* La portée d'une variable = zone de code dans laquelle elle peut être utilisée,
dans laquelle elle est définie.
Exemple:*/

{
    {//début du bloc dans lequel age est déclaré
        let age = 37;// début de sa portée
    {
        {

        }
    }
    }//fin du bloc dans lequel age est déclaré = fin de sa portée
}

//Les opérateurs

//Affectations et calculs

//->opérateur d'affectation simple
let price= 1.17;
const animal = "dog";
let isAdult = true;

//->opérateurs arythmétiques: + - * /
//Nous y ajoutons l'opérateur "modulo"= %
//exemple: a%b se pronone "a modulo b"
//le modulo est le reste de la division entière de a par b
/*Par exemple:
7%3 vaut 1, car 7/3 vaut 2 en division entière, il reste donc 1(7-(2*3))
=> 7= 2*3 +1  */

//-> les opérateurs d'affectation spéciaux:
//il y a des opérateurs qui cumulent plusieurs actions: + - * / %


//->opérateurs de concaténation: son symbile est"+" en JS

//COMPARAISONS
//-> les opérateurs d'égalité:
/* "==": même valeur
   "===": même valeur et même type
   "!=": valeur différente
   "!==": valeur différente ou type différent
Ils renvoient un boolean

//-> les opérateurs de comparaison: "<" "<=" ">" ">="
//Ils renvoient un boolean


//Conditions

/*->les opérateurs logiques: sert à lier plusieurs conditions pour savoir si
l'ensemble est true or false.
"&&": le "et" logique qui sert à savoir si 2 conditions sont vraies
"||": le "ou" logique qui sert à savoir si au moins 1 des 2 conditions est vraie
"!": le "non"logique, qui sert à inverser une condition


//-> les opérateurs ternaires
/* il est composé de 3 parties. Il est composé de 2 symboles qui séparent ces 3
parties: "?" ET ":"

Syntaxe globale: condition? siVraie : siFaux*/

//LES BLOCS LES PLUS UTILES

//->Les blocs de condition:

//le "if" ou "if/elseif/else"

//exemple:

if (age >= 18){
    console.log("la personne est majeure.")
}

//la variante if/else if

if (age>=18){
    console.log( "la personne est majeure.");
    }else{
        console.log("la personne est mineure.");
}

//La variante if/elseif(si une condition est vraie sinon si uen autre condition...)
if(age >= 100){
    console.log("la personne est centenaire");
    }else if(age>=80){
        console.log("la personne est au moins octogénaire");
    }else if(age>=60){
        console.log("la personne est au moins seagénaire.");
    }else if (age>=40){
        console.log("la personne est au moins quarantenaire");
    }
//La variante if/elseif/else se comporte de la même manière avec un else à la fin
if(age >= 100){
    console.log("la personne est centenaire");
    }else if(age>=80){
        console.log("la personne est au moins octogénaire");
    }else if(age>=60){
        console.log("la personne est au moins seagénaire.");
    }else if (age>=40){
        console.log("la personne est au moins quarantenaire");
    }else{
        console.log("la personne n'est pas encore quadragénaire");
    }

//Le switch-case
//exemple:

let action= "virement";
switch(action){
    case "retrait";
    //instruction de retrait
       break;
    case "virement";
    //instruction de virement
       break;
    case "cloturerCompte";
    //instruction de clôture du compte
       break;
    default:
    //instruction par défaut
       break;
}

/*cas sans break systématique(certaines instructions peuvent être exécutées enentrant
    par différentes "case")*/
let numberToGuess = 7;
let operation = "foisDeuxPlusTrois";

switch(operation){
    case "plusUn":
    numberToGuess++.
    break;

    case "foisDeuxPlusTrois":
    numberToGuess *= 2;

    case "plusTrois":
        numberToGuess += 3;
        break;

    case "foisZero":
        default:
            numberToGuess = 0;
            break;
}

//LES BOUCLES LES PLUS UTILES: chaque passage dans une boucle est appelée une itération

//-> la boucle FOR
//Le programme sait combien d'itérations il devra effectuer
//Syntaxe: for(initialisation; condition pr continuer; incrémentation){}

//exemple d'utilisation:
//le for "de a à b inclus"
for(let i = 1; i<=10; i++){
    console.log('3 x ${i} = ${3 * i}');
}
// -> nous obtenons la table de multiplication de 3

//le for "n fois"
for(let i= 0; i < 3; i++){
    console.log("Je serai un bon développeur");
}
//la phrase sera écrite 3 fois


//Le FOR "de a à b inclus avec un pas différent de 1"
for(let i = 3; i <= 10; i += 3){
    console.log('${i} est inférieur ou égal à 10 et est divisible par 3');
}
// ça donne le résultat: 3, 6, 9

//Le FOR inversé (on décrémente au lieu d'incrémenter)
for(let i = 5; i > 0; i--){
    console.log('${i}...');
}
console.log("Bonne année !");
// le résultat: 5 4 3 2 1 Bonne année!


//LA BOUCLE WHILE
//Le programme ne sait pas combien d'itérations il devra effectuer
//Syntaxe: while(condition pour continuer){}
//il faut bien vérifier que la boucle enverra false sinon boucle infinie(crash)
  
//Exemple:
let kAge = 12;
while (kAge < 18){
    console.log(`J'ai maintenant ${kAge} ans...`);
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);
// résultat: J'ai maintenant 12 ans....même phrase jusu'à 18 ans


//LES FONCTIONS

//Syntaxes globales d'une fonction(déclaration et appel):
//Nom: nom de la fonction
//Arguments:oui, il y en a 3 ->arg1, arg2, arg3
//Implémentation: calcul de arg1*arg2+arg3
//Renvoi d'un résutat:oui->le résultat du calcul

//déclaration de la fonction
function nomDeLaFonction(arg1, arg2, arg3){
    //logique implémentée
    const result = arg1 * arg2 + arg3;
    //renvoi d'un résultat
    return result;
}
//appel de la fonction déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1, 2, 3);

//Une fonction simple

//déclaration de la fonction getNombreFoisTrois, qui prend en argument un
//nombre et qui renvoie le triple de ce nombre
functiongetNombreFoisTrois,(nombre){
    //nombre est un argument ey une variable locale
    return nombre * 3;//la fonction retourne le résultat du calcul
} 

//appel à al fonction getNombreFoisTrois, en lui passant 5 en argumnt
// et affectation du résultat reçu dans la const cinqFoisTrois,
const cinqTroisFois = getNombreFoisTrois(5); //cinsTroisFois = 15
//log de cinqFoisTrois dans la console
console.log("cinqFoisTrois =" + cinqFoisTrois);
//résultat: cinqFoisTrois= 15

//Exemple de fonction sans résultat rétourné
function logPhraseAvecPointDExclamation(phrase){
    console.log(`${phrase} !`);
}

logPhraseAvecPointDExclamation("Je serai un bon développeur");
//Résultat:"Je serai un bon développeur!"

//UNE FONCTION SANS ARGUMENT(Ici renvoie une valeur approximative de pi:(π)

//Une fonction sans argument
function getApproximationPi(){
    return 3.14; // ou 22/7
}
console.log(`360 deg = 2*pi ~= ${2* getApproximationPi()} rad`);
//résultat: 360 deg = 2*pi ~= 6.28 rad

//function qui retourne le résultat de l'addition de 2 nombres
function getResultatAdditionDe2Nombres(nombre1, nombre2){
    return nombre1 + nombre2;
}

//fonction qui retourne le résultat de la multiplication de 2 nombres
function getResultatAdditionDe2Nombres(nombre1, nombre2){
return nombre1 * nombre2;
}

//une fonction qui appelle d'autres fonctions, en fonction de l'opération demandée
//et retourne le résultat reçu de la fonction appelée
//note: l'instruction "return" met fin à l'exécution de la fonction

functiongetResultatAdditionDe2Nombres(nombre1, opération, nombre2){
    //en fonction de l'opération demandée
    switch(operation){
        //addition et soustraction(a - b = a + b)
        case "addition":
            return getResultatAdditionDe2Nombres(nombre1, nombre2);
            case "soustraction":
                return getResultatAdditionDe2Nombres(nombre1, -nombre2);
        //multiplication et division (a / b = a *1/b)
            case "multiplication":
                return getResultatAdditionDe2Nombres(nombre1, nombre2);
                case "division":
                    return getResultatAdditionDe2Nombres(nombre1, 1/ nombre2);

    //opérations non générées par la fonction
    default:
        console.log(`Opération"${operation}" non gérée`);
        return null;
    }
}

console.log(`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition", 2)}`);
console.log(`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction", 1)}`);
console.log(`3 * 4 = ${getResultatCalculEntre2Nombres(3, "multiplication", 4)}`);
console.log(`10 / 2 = ${getResultatCalculEntre2Nombres(10, "division", 2)}`);
console.log(`2 ** 3 = ${getResultatCalculEntre2Nombres(2, "puissance", 3)}`);

//Résultat: 7 + 2 = 9; 6 - 1 = 5; 3 * 4 = 12; 10 / 2 = 5;
//Opération "puissance" non gérée 2 ** 3 = null


//  LES TABLEAUX

//-> Les tableaux indexés:
/* - il regroupe des éléments,
   - c'est une liste ordonnée d'éléments
   - chaqe élément a pour emplacement un index
   - la longueur length est le nb d'éléments qu'il contient
ATTENTION: * le 1er élt a l'index 0
           * le dernier a l'index(n-1)
*/


//->utilités:
/*   - permet de regrouper des élts ensembles dans le but par ex:
        *boucler sur le tableau(svt grâce à une boucle FOR)
        *et appliquer une logique commune pr chaq élt
     - il est extensible pouvant contenir 0 à n élément (pratique qd on ne sait pas à l'avance le nb d'élt)
     - chaque élt peut être de n'importe quel type(on peut y stocker des nb, des tableaux, des fonctions etc...)
*/


//->les bases de leur utilisation:

//-> créer un tableau indexé vide:
const tableauVide = [];

//-> créer un tableau indexé qui contient des valeurs fournies:
const tabNums = [11, 22, 33, 44, 55, 66, 77];


//-> ajouter un élément à la fin du tableau(en dernière position):
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);
console.log("tableauVide[1]=", tableauVide[1]);
//résultat: tableauVide = ->(3) [2, 3, 7]

//->récupérer un élt par son index, son emplacement qui commence par 0:
console.log("tableauVide[1]=" , tableauVide[1]);
//résultat: tableauVide[1] = 3


//->modifier la valeur d'un élément à un certain index:
tableauVide[2] = "abc";
console.log("tableauVide =" , tableauVide);
//résultat: tableauVide = ->(3)[2, 3, `abc`]


//->boucler sur un tableau et appliquer une valer logique pour chaque élt:
for(let i = 0; i < tableauVide.length; i++){
    //récupération de l'élt à l'index i
    const elementTableauVide = tableauVide[i];
    //log de cet élt
    console.log("tableauVide[" + i + "] = ", elementTableauVide);
}

//résultat: tableauVide[0] = 2; tableauVide[1] = 3;tableauVide[2] = abc;


//Quelques méthodes utiles
/* Une méthode est une fonction qui appartient à une classe
Syntaxe: pour appeler une méthode "uneMethode" sur un tableau indexé "unTableau", on écrit:*/
    unTableau.uneMethode()

 //-> méthode .push (= ajouter un élt à la fin du tableau)
 tableauVide.puch(2);
 
 //-> méthode .join(=séparateur entre chaque élt _|_)
 console.log(`tabNums.join("_|_) = ${tabNums.join("_|_")}`);
 //résultat: tabNums.join("_|_")= 11_|_22_|_33_|_44_|_55_|_66_|_77


//->méthode .includes(elementRecherche): renvoie true or false si l'élt est dans le tableau ou pas
console.log(
    `L'élément ${77} ${tabNums.includes(77)? "est": "n'est pas"} présent dans le tableau [${tabNums.join(", ")}]`);

console.log(
    `L'élément ${42} ${tabNums.includes(42)? "est": "n'est pas"} présent dans le tableau [${tabNums.join(", ")}]`);
//résultat: l'élément 77 est présent dans le tableau [11........77]
//          l'élément 42 n'est pas présent dans le tableau[11.......77]

//-> méthode .indexOf(elementRecherche): renvoie l'index de l'elt recherché(entre 0 et length-1 si trouvé, -1 sinon)

const indexOf77 = tabNums.indexOf(77);
if(indexOf77 != -1){
    console.log(`l'élément ${77} est à l'index ${indexOf77} dans le tableau [${tabNums.join(", ")}]`);
}else{
    console.log(`l'élément ${77} n'est pas présent dans le tableau [${tabNumsjoin(", ")}]`)
}
//résultat: l'élt 77 est à l'index 6 dans le tableau [11........77]

//->méthode .slice(indexDebutEltInclus, indexFinEltExclu): renvoir une copie d'un morceau de tableau:
const morceau = tabNums.slice(2, 4);
console.log(`morceau(tabNums.slice(2, 4)) = [$(morceau.join(", "))]`);
//résultat: morceau(tabNums.slice(2, 4)) = [33, 44]


//LES TABLEAUX ASSOCIATIFS



