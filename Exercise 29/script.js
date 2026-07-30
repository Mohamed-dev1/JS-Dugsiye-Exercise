//Exercise 29

//fetching Date using fetch

async function fetchdate() {
  console.log("fetching date");
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataa = await response.json();
  console.log(dataa);
 
}
fetchdate();
