var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(string) {
    cats.push(string);
}

function destructivelyPrependCat(string) {
    cats.unshift(string);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    const prependCat =[name, ...cats];
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat; 
}