let Descarga = document.querySelector("a.cv");
console.log(Descarga);

function alertDescarga() {
  alert("Descarga");
}

Descarga.addEventListener("click", alertDescarga, true);


const menuItems = document.querySelectorAll(".item-menu");
console.log(menuItems);

menuItems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".l-menu");
    currentItem.classList.remove("l-menu");
    e.target.classList.add("l-menu");
  });
});
