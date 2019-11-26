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

    return str.toLowerCase()
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}

console.log(capitalize('raouf loucif'));

function camelCse(str) {
    return capitalize(str).replace(' ', '');
}

console.log(camelCse('raouf loucif'));

function snake_case(str) {
         return str.toLowerCase().split(' ')
            .map(function (item) {
                return item.replace(',','');
            })
            .join("-");
}
console.log(snake_case("Hello World, i am john"));
