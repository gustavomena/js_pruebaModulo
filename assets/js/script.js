import AnimalGallery from "./animalGallery.js";
//import AnimalTarget from "./animalTarget.js";
let animal_array=(()=> {
  return new AnimalGallery();
})();

async function getAnimal(animal_name) {
  console.log(animal_name);
  const img_url = "./assets/imgs/";
  const sounds_url = "./assets/sounds/";
  const url = "../../animales.json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.animales.find(({ name }) => name === animal_name);
    //console.log(result);
    ShowImgSelected(img_url + result.imagen);
    AddSound(sounds_url + result.sonido);
    return result;
  } catch (error) {
    console.error(error);
  }
}
function ShowImgSelected(url_img) {
  document.querySelector(
    "#preview"
  ).innerHTML = `<img src="${url_img}" id="imagen"  class="col-12 rounded mx-auto d-block" height = "200">`;
}
function AddSound(url_sound) {
  document.getElementById("soundURL").innerText = url_sound;
}

let animalSelection = document.getElementById("animal");
animalSelection.addEventListener("click", function () {
  getAnimal(animalSelection.value);
 
});

let animalSender = document.getElementById("btnRegistrar");
animalSender.addEventListener("click",()=>{
   
if(formValidator()){

const index=animal_array.AddAnimal(
  document.getElementById("animal").value,
  document.getElementById("edad").value,
  document.getElementById("comentarios").value,
  document.getElementById("soundURL").innerText,
  document.getElementById("imagen").src
  
);

let animal_process=animal_array.AnimalGalleryArray[index];
buildCard(animal_process,index);
//console.log(target);

console.log(animal_array.AnimalGalleryArray);
 const cleanForm=(()=> {
    animalSelection.value="Seleccione un animal";
    document.getElementById("edad").value="Seleccione un rango de años";
    document.getElementById("comentarios").value="";
    document.getElementById("preview").innerHTML="";
   
  })();
}
   
})

function buildCard(animal,id){

  let element = document.getElementById("Animales");
  let htmlString=`<div class="card animal-card bg-secondary" id="${id}">
  <img src="${animal.Img}" width="200" height="200"  class="card-img-top" data-toggle="modal" data-target="#exampleModal"  alt="...">
  <div class="card-body btn bg-secondary  animal-btn " onclick="document.getElementById('sound${id}').play();">
 <audio id="sound${id}" src="${animal.Sonido}" preload="auto">
 </audio>
  </div>
</div>
</div>`;

let newDiv=document.createElement("div");
newDiv.innerHTML=htmlString;
console.log(htmlString);
element.appendChild(newDiv);
}


function formValidator(){
    if (animalSelection.value == "Seleccione un animal"){
        return alert("Debe seleccionar un animal");
    }
    else if(document.getElementById("edad").value=="Seleccione un rango de años"){
        return alert("Debe seleccionar un rango de edad");
    }
    else if(document.getElementById("comentarios").value==""){
        return alert("Los comentarios no pueden estar vacíos");
    }
    return true;
}


