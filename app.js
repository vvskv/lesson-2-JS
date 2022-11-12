const userOne = {
  role: "manager",
  firstname: "Vasiliy",
};
const userTwo = {
  role: "admin",
  firstname: "Artym",
};
function getDefaultRole() {
  return "admin";
}
function checkAccess(user, role = getDefaultRole) {
  return user.role === role;
}
function showSuccessMessage(user) {
  console.log("################");
  console.log(`# Access ${user.firstname}#`);
  console.log("################");
}

function showErrorMessage(user) {
  console.log("################");
  console.log(`# Error ${user.firstname}#`);
  console.log("################");
}

function checkAccessAndShowMessage(user, role) {
  if (checkAccess(user, role)) {
    showSuccessMessage(user);
  } else {
    showErrorMessage(user);
  }
}

checkAccessAndShowMessage(userOne);
checkAccessAndShowMessage(userTwo, "admin");

function showHelloUser(user = "Guest") {
  console.log(`Hello ${user}`);
}
showHelloUser("Vasiliy");
showHelloUser();

// ---------------Практика--------------------
console.log("-----Practice--------")
function mathStepen(num, step = 1) {
  return num ** step;
}
console.log(mathStepen(2, 8));

function getSred(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum / arr.length;
}
let someArr = [1, 2, 3];
console.log(getSred(someArr));
console.log(getSred([1, 2000, 3, 4, 5, 5, 6, 40, 5, 6, 6, 8]));

const sayHi2 = () => console.log("Hello!");
sayHi2();

const showStrN = (str, n = 1) => {
    for (let index = 0; index < n; index++) {
        console.log(str);        
    }
}
showStrN('hello',5);

const isVowel = a => {
    let arr = ["а", "у", "е", "ы", "о", "я", "и", "ю", "э", "ё"];
    let answer = false;
    arr.forEach(element => {
          if(element === a) {
            answer = true;
          }      
    });
    return answer;
}
"eaui".indexOf()
console.log(isVowel('а'));

const isPoly = a => {
    let reverseA = a.split('').reverse().join('');
    return a === reverseA;
}
console.log(isPoly("aadAaa"));