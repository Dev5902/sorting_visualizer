let selector = document.getElementById("selector");
let menu = document.getElementById("menu");
let open = true;
let o = document.querySelector("#container");
selector.addEventListener("click", async () => {
  if (open) {
    menu.style.left = "-400%";
    //     await Sleep(100)
    //  menu.classList.remove("col-md-3");
    //   menu.classList.add("col-md-1");
    menu.style.display = "none";
    //  o.classList.remove("col-md-9")
    // o.classList.add("col-md-11")
  } else {
    // o.classList.remove("col-md-11")
    //  o.classList.add("col-md-9")
    //await Sleep(100)
    menu.style.left = "0%";

    menu.style.display = "block";
    //menu.classList.remove("col-md-1");
    //  menu.classList.add("col-md-3");
  }
  open = !open;
});
