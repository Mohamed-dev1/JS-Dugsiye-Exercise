//Exercise 27

function fetcuserDate() {
  return new Promise((resulve, rejected) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resulve({ id: 1, name: "cali" });
      } else {
        rejected("faileed user");
      }
    }, 3000);
  });
}

//usimg async/wait
async function displayuserDAte() {
  const useer = await fetcuserDate();
  console.log(useer);
}

displayuserDAte();
