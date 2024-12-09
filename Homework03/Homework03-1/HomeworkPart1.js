/* HOMEWORK Part 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types: object, boolean, number, string
undefined */

function getType(value) {
    const type = typeof value;
    console.log(`Value of: ${value} is Type: ${type}`);
    return type;
}

console.log("Testing object types:");
getType({});
getType({ key: "value" });
getType(["Age: 30"]);
getType(["Name:"]);
getType(([]));


console.log("Testing boolean types:");
getType(true);
getType(false);
getType(1>2);
getType(Boolean("text"));
getType(2<-1);

console.log("Testing number types:");
getType(23);
getType(-Infinity);
getType(-500);
getType(5.6);
getType(Number(666));

console.log("Testing strings types:")
getType("Jhonny");
getType(`Bravo`);
getType(" ");
getType(String(66));
getType('30');

console.log("Testing undefined types:")
getType(undefined);
getType(void 0);
getType((() => {})()); 
getType(document.notExist);
getType(document.exist);