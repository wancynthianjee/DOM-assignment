document.body.style.backgroundColor='#9a9a9a';
document.getElementById('title').style.color='#004000';
var h3 = document.getElementsByTagName("h3");
for (var i = 0; i < h3.length; i++) {
  h3[i].style.textTransform = "uppercase";
}
// document.getElementById('miki').style.textTransform='uppercase'
// document.getElementById('mikil').style.textTransform='uppercase'
var  fruitList = document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Apples";
fruitList.appendChild(newFruit);


var  vegetableList = document.getElementById("vegList");
var newVegetable = document.createElement("li");
newVegetable.textContent = "Cabbages";
vegetableList.appendChild(newVegetable);


