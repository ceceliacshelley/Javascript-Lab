// var name1 = "Harry Potter";
// var name2 = "Yoda";
// var name3 = "Cecelia Shelley";

// // function myFunction() {
// //   var str = "Harry Potter";
// //   var n = str.length;
// // }

// // console.log(name.length)

// If (name1.length > name2.length && name1.length > string3.length) {
//     alert(${harryPotter})
// }

let name1 = prompt("What is the first name");
let name2 = prompt("What is the second name");
let name3 = prompt("What is the third name");

if (name1.length > name2.length && name1.length > name3.length) {
  alert(name1 + " has the longest name");
}

if (name2.length > name1.length && name2.length > name3.length) {
  alert(name2 + " has the longest name");
}

if (name3.length > name1.length && name3.length > name2.length) {
  alert(name3 + " has the longest name");
}

if (name1.length > name3.length && name1.length === name2.length) {
  alert(name1 + " and " + name2 + " has the longest name");
}

if (name2.length > name1.length && name2.length === name3.length) {
  alert(name2 + " and " + name3 + " has the longest name");
}

if (name1.length > name2.length && name1.length === name3.length) {
  alert(name1 + " and " + name3 + " has the longest name");
} else if (name1.length == name2.length && name1.length === name3.length) {
  alert("all the lengths of the names are the same");
}
