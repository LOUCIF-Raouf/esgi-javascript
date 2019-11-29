function type_check_v1(val, type) {
    let typeVal = typeof val;
    console.log(typeVal);
    if(typeVal === type && type === 'object') return false;
    if (typeVal === type && typeVal !== 'undefined') return true;
    if (typeVal === "object" && type!=="object" && (type === "null" || type === "array")) return true;

    else return false;


}

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


