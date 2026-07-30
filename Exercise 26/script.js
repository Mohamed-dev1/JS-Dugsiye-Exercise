//Exercise 26

// 1:sychronus  or blocking

/*function isii() {
  alert("waa inaa block gareya ");
  return { id: 2, magca: "ali", city: "mogadisho" };
}

console.log("wa inaa alert so tabata marka hore");

const data = isii();
console.log(data);
*/

// 2:Asynachronus  //non blockin

function getid(callback) {
  setTimeout(() => {
    console.log("after 3 sec");
    const lambar = (cadi = { id: 1, name: "ali" });
    callback(lambar);
  }, 3000);
}
getid(function (lambar) {
  console.log(lambar);
});

console.log("isii")