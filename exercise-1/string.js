function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst('test'));
console.log(ucfirst('Test'));
console.log(ucfirst('rest raouf'));
console.log(ucfirst('3est'));
console.log(ucfirst(''));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.toLowerCase()
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}

console.log(capitalize('raouf loucif'));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return capitalize(str).replace(' ', '');
}

console.log(camelCase()('raouf loucif'));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.toLowerCase().split(' ')
        .map(function (item) {
            return item.replace(',', '');
        })
        .join("-");
}

console.log(snake_case("Hello World, i am john"));

function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    let char = '';
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i);
        switch (char) {
            case'a':
                newstr += 4;
                break;
            case'e':
                newstr += 3;
                break;
            case'i':
                newstr += 1;
                break;
            case'o':
                newstr += 0;
                break;
            case'u':
                newstr += "(_)";
                break;
            case ('y'):
                newstr += 7;
                break;

            default:
                newstr += char;
        }
    }

    return newstr;

}

console.log(leet("anaconda"));


function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.split("").reverse().join("");

}

console.log(verlan("hello"));

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(' ').reverse().join(' ');
}


console.log(yoda("hello word"));

function prop_access() {
    
}
