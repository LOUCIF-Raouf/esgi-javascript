function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}
//
//
// console.log(ucfirst('test'));
// console.log(ucfirst('Test'));
// console.log(ucfirst('rest raouf'));
// console.log(ucfirst('3est'));
// console.log(ucfirst(''));
// console.log(ucfirst(null));
// console.log(ucfirst({}));
//
function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.toLowerCase()
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}


// console.log(capitalize('RAOUF LOUCIF'));
// console.log(capitalize('_dipiscing elit'));
// console.log(capitalize('null'));
// console.log(capitalize('Object'));

// function camelCase(str) {
//     if (typeof str !== "string" || str.length === 0) return "";
//     return capitalize(str).replace(' ', '');
// }
//
// console.log("camelCase: "+camelCase('ToggleCaseIsTheCoolest'));
//


function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
     return str.split(' ').map(function (col) {
         return ucfirst(col.replace('_',''));
     }).join('');
}

console.log(camelCase("toggle case is the coolest"));
console.log(camelCase("toggleCase is the coolest"));
console.log(camelCase("ToggleCase is the 3oolest"));
console.log(camelCase("ToggleCase is_the coolest"));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    // return str.toLowerCase().split(' ')
    //     .map(function (item) {
    //         return item.replace(',', '');
    //     })
    //     .join("-");

    return str.toLowerCase().replace(/[^a-zA-Z0-9]/gi,'_');
    // return str.toLowerCase().replace(/[^\w]/gi,'_'); // ou ça

}


// console.log(snake_case("Hello World, i am john"));
// console.log(snake_case("toggle case is the coolest"));
// console.log(snake_case("ToggleCase is the 3ooles"));
// console.log(snake_case("ToggleCaseIsTheCool3st"));
// console.log(snake_case("ToggleCase is_the coolest"));
//
function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.replace(/[aeiouy]/ig,function (car) { // le i est pour ignorer les majuscule
        switch (car) {
            case 'A':
            case 'a':
                return 4;
            case 'E':
            case 'e':
                return 3;
            case 'I':
            case 'i':
                return 1;
            case 'O':
            case 'o':
                return 0;
            case 'U':
            case 'u':
                return '(_)';
            case 'Y':
            case 'y':
                return 7;
            default:
                return ''
        }

    })
}


// function leet(str){
//    return str.split('').map(function (car) {
//        switch (car) {
//            case 'A':
//            case 'a':
//                return 4;
//            case 'E':
//            case 'e':
//                return 3;
//            case 'I':
//            case 'i':
//                return 1;
//            case 'O':
//            case 'o':
//                return 0;
//            case 'U':
//            case 'u':
//                return '(_)';
//            case 'Y':
//            case 'y':
//                return 7;
//            default:
//                return car;
//        }
//
//    }).join('');
//
// }
// console.log(leet("anaconda"));
// console.log(leet("anacoNDa"));
// console.log(leet("leet"));
// console.log(leet(" "));
// //
//
function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    // return str.split("").reverse().join("");
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join('');
    }).join(" ");

}

//
// console.log(verlan("yoda m Luke"));
// console.log(verlan("70da m L(_)k3"));

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(' ').reverse().join(' ');
}




// console.log(yoda("hello word"));
//
// function vif(str,code) { // regarde l'algo Chiffre de Vigenère wikipédia
//     while (code.length < str.length){
//         code+= code;
//
//     }
//     return str.split("").map(function (car,index) {//toujours map pour accéder aux éléments du tableau et les modifier
//         car = car.toLowerCase();
//         const  carCode = car.charCodeAt(0) - "a".charCodeAt(0);
//
//         if(carCode<0 || carCode>25) return car;
//         const  codeCode= code[index].charCodeAt(0) - "a".charCodeAt(0);
//
//         const encodedCode=(carCode + codeCode)%26;
//         return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
//     }).join('');
// }
// function prop_access(obj,path) { // regarde l'algo d'abord
//
// }
//
// var objec = {
//     'part1' : {
//         'name': {
//             'coucou': 'ok'
//         },
//         'size': '20',
//         'qty' : '50'
//     }
// };
