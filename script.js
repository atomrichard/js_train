
//var, const, let
function aFunction() {
  //console.log(undefinedVariable3);

  var undefinedVariable1;
  let undefinedVariable2;
  //const undefinedVariable3;

  console.log(undefinedVariable1);
  console.log(undefinedVariable2);
  //console.log(undefinedVariable3);

  var firstVariable = "Our first variable";
  let secondVariable = "Our second variable";
  const thirdVariable = "Our third variable";

  function bFunction() {

    var firstVariable = "Our first variable 2";
    let secondVariable = "Our second variable 2";
    const thirdVariable = "Our third variable 2";

    console.log(firstVariable);
    console.log(secondVariable);
    console.log(thirdVariable);
  }
  bFunction();

  if(0 === 0) {
    var firstVariable = "Our first variable 2";
    let secondVariable = "Our second variable 2";
    const thirdVariable = "Our third variable 2";

    console.log(firstVariable);
    console.log(secondVariable);
    console.log(thirdVariable);
  }

  console.log(firstVariable);
  console.log(secondVariable);
  console.log(thirdVariable);
}
//aFunction();

//primitives, objects
function cFunction() {
  let numberPrimitive = 1;
  let stringPrimitive = "text";
  let booleanPrimitive = false;
  let nullPrimitive = null;
  let undefinedPrimitive = undefined;

  console.log(typeof numberPrimitive);
  console.log(typeof stringPrimitive);
  console.log(typeof booleanPrimitive);
  console.log(typeof nullPrimitive);
  console.log(typeof undefinedPrimitive);

  let anObject = {
    key1: "value",
    key2: 33
  };

  let anArray = ["key1", "key 2"];

  console.log(typeof anObject);
  console.log(typeof anArray);

  console.log("e" === "e");

  let e = "ef";
  let f = "e";

  console.log(e === f + "f");

  console.log(0 === 0);
  console.log([] === []);
  console.log(["key"] === ["key"]);

  console.log({} === {});

  console.log( Array.isArray([]) );
}
//cFunction();

function dFunction() {

  const anObject = {
    key1: "valalmi",
    key2: {
      keyA: "valalmi más"
    },
    key3: function () {
      return "egészen más";
    }
  }
  console.log(anObject.key1);

  console.log(anObject.key2.keyA);

  //const anotherObject = anObject; //- referencia (linkel)
  //const anotherObject = {...anObject}; // csak a felső réteget másolja
  const anotherObject = JSON.parse(JSON.stringify(anObject)); //ez mélymásolást csinál

  console.log(anotherObject === anObject);

  anotherObject.key1 = 2;

  console.log(anObject.key1);
  console.log(anotherObject.key1);

  anotherObject.key2.keyA = "ugyanaz";

  console.log(anObject.key2.keyA);

  console.log(anObject.key3());
  console.log(anotherObject.key3());
}
//dFunction();

//for-s & array-s
function eFunction() {

  for (let i = 0; i < 15; i++) {
    //console.log(i);
  }
  //console.log(i);
  const anotherArray = [1,2,5,"banana",true];

  for (let item of anotherArray) {
    //console.log(item);
  }

  for (let i = 0; i < anotherArray.length; i++) {
    //console.log(i);
    //console.log( anotherArray[i] );
  }

  for (let i in anotherArray) {
    //console.log(i);
    //console.log( anotherArray[i] );
  }

  const anObject = {
    key1: "valami1",
    key2: "valami2"
  }
  //console.log(Object.keys(anObject).length);

  for (let i = 0; i < Object.keys(anObject).length; i++) {
    //console.log(i);
    let key = Object.keys(anObject)[i];
    //console.log( anObject[key] );
  }

  for (const item of Object.keys(anObject)) {
    //console.log(anObject[item]);
  }

  for (const item of Object.values(anObject)) {
    console.log(item);
  }

}
//eFunction();

//function, method, arrow function, parameter
function fFunction() {
  function functionName() {
    return "ez a functionName nevű függvényünk";
  }
  const functionName2 = function () {
    return "ez a functionName2 nevű függvényünk";
  }
  const functionName3 = () => "ez a functionName3 nevű függvényünk";

  const functionName4 = () => {
    return "ez a functionName4 nevű függvényünk";
  }

  // console.log( functionName() );
  // console.log( functionName2() );
  // console.log( functionName3() );
  // console.log( functionName4() );

  const objectWithMethods = {
    key1: function () {
      return "ez a objectWithMethods objektum key1 nevű metódusa";
    },
    key2: "haha ez meg egy string"
  }
  // console.log( objectWithMethods.key1() );
  // console.log( objectWithMethods.key2 );


  function functionName5(aParameter){
    //console.log(typeof aParameter);
    console.log(`Ezt kaptuk paraméterként: ${aParameter}`);
  }

  let anArgument = "Hello, hello";

  functionName5(anArgument);

  functionName5("Bye, bye");

  functionName5(4);

  functionName5(["e","d"]);

  functionName5();

}
fFunction();



//operators and if/else



function loadEvent() {

}

window.addEventListener("load", loadEvent);
