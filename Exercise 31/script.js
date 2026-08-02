//Exercise 31
//sameynoya HTTP get request /users
async function fetchh() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to  users");
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchh();