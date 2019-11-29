function type_check_v1(val, type) {
    let typeVal = typeof val;
    console.log(typeVal);
    if(typeVal === type && type === 'object') return false;
    if (typeVal === type && typeVal !== 'undefined') return true;
    if (typeVal === "object" && type!=="object" && (type === "null" || type === "array")) return true;

    else return false;


}

function type_check_v1(vari,type) {
    switch (typeof vari) {
        case 'object':
            if(Array.isArray(vari)) return type==="array";
            if(vari === null) return type==="null";
        default :
            return typeof vari ===type;
    }
}

function type_check_v2(check, config)
{
    for (const key of Object.keys(config)) {
        switch (key) {
            case 'value':
                if(JSON.stringify(check) !== JSON.stringify(config[key])) return false;
            case 'enum':
                let i = 0;
                for (; i < config[key].length; i++) {
                    const element = config[key][i];

                    if(type_check_v2(check, {value: element})) break;
                }
                if(i === config[key].length) return false;
            case 'type':
                if(!type_check_v1(check, config[key])) return false;
        }

    }

    return true;
}


console.log(type_check_v2("foo", {type: "string", value: "foo"}));







// //les null et array return null et array
// console.log("number_true: ", type_check_v1(1, "number"));
// console.log("number_false: ", type_check_v1(1, "string"));
// console.log("string_true: ", type_check_v1("raouf", "string"));
// console.log("string_false: ", type_check_v1("raouf", "number"));
// console.log("bool_true: ", type_check_v1(true, "boolean"));
// console.log("bool_false: ", type_check_v1(false, "string"));
// console.log("null_true: ", type_check_v1(null, "null"));
// console.log("null_false: ", type_check_v1(null, "object"));
// console.log("array_true: ", type_check_v1([0,2], "array"));
// console.log("array_false: ", type_check_v1([0,2], "object"));
 console.log("nullNotObject_false ", type_check_v1(null, "object"));

// "objectSuperMatch": {
//     "input": [
//         {
//             toto: {
//                 fi: 3,
//                 fa: {
//                     trim: " test "
//                 }
//             }
//         },
//         {
//             type: "object",
//             properties: {
//                 toto: {
//                     type: "object",
//                     properties: {
//                         fi: { value: 3 },
//                         fa: { enum: [3, "string", { trim: " test " }] }
//                     }
//                 }
//             }
//         }
//     ],
//         "output": true
// }
