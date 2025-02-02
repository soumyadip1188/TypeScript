"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Where String is parameter datatype and void is the return type
//Assigning to void
var a;
a = undefined;
a: void ;
a = "test";
a: undefined;
var b;
b = a;
a = b;
var f1 = function () {
    return 10;
};
var f2 = function () { return true; };
var f3 = function () {
    return "Hello";
};
//v1, v2 & v3 are of type void
var v1 = f1();
var v2 = f2();
var v3 = f3();
console.log(v1); //10
console.log(v2); //true
console.log(v3); //hello
//Since v1,v2 & v3 are voids you cannot use them
v1 + 10; //not ok   
//Operator '+' cannot be applied to types 'void' and 'number'
v1 + 10; //not ok    
var f1 = function () {
    return 10;
};
function log(x) {
    console.log(x);
    return 5;
}
log(5);
log('Sahoo');
log(true);
log(undefined);
//public static void main() this main function return nothing
var useless = undefined;
//useless = 1;
console.log('useless:', useless);
var a;
var b;
a = undefined;
a = 'test';
b = a; //ok
a = b;
