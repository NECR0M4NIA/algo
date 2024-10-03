function addition(a, b) {
    return a + b
}
console.log(addition(2, 3));

function salutation(nom) {
    return "Bonjour " + nom
}
console.log(salutation("Alice"));

function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(estPair(4));
console.log(estPair(7));

function aireRectangle(longueur, largeur) {
    return longueur * largeur
}
console.log(aireRectangle(5, 3))

function estMajuscule(chaine) {
    if (chaine === chaine.toUpperCase()) {
        return true
    } else {
        return false
    }
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false

function maxDeuxNombres(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

function difference(a, b) {
    return a - b
}
console.log(difference(10, 3)); // Résultat attendu : 7

function convertirEnCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

function estMajeur(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false