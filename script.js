  const btn = document.getElementById("button");

  btn.addEventListener("click", () => {

    document.body.style.background = "darkred";


    
    setTimeout(() => {
      document.body.style.background = "black";
    }, 200);
    
  });