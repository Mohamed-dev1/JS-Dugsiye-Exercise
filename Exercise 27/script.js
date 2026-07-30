// Exercise 27 

//introduction to promises

function ardey() {
  return new Promise((xalin, didid) => {
    setTimeout(() => {
      const guul = true;
      if (guul) {
        xalin({ id: 1, magaca: "mohaan" });
      } else {
        didid("wo diidayy");
      }
    }, 2000);
  });
}

ardey()
  .then((xogta) => console.log(xogta))
  .catch((errror) => console.log(errror));