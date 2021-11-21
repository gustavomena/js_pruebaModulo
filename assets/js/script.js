import AnimalGallery from "./animalGallery.js";

//Crea la galeria de animales
let animal_array = (() => {
  return new AnimalGallery();
})();

//obtiene los datos del animal especifico del JSON
//completa las rutas y las agrega al html
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
//agrega la url de la imagen del animal seleccionado
//extraida desde el json
function ShowImgSelected(url_img) {
  document.querySelector(
    "#preview"
  ).innerHTML = `<img src="${url_img}" id="imagen"  class="col-12 rounded mx-auto d-block" height = "200">`;
}
//agrega la url del sonido en un campo oculto (evita una vuelta larga)
function AddSound(url_sound) {
  document.getElementById("soundURL").innerText = url_sound;
}

//crea el listener para obtener el valor del animal seleccionado
let animalSelection = document.getElementById("animal");

//al hacer seleccionar el animal, llama a la funcion que extrae el JSON
//del animal seleccionado y se lo pasa al registro de animales
animalSelection.addEventListener("click", function () {
  getAnimal(animalSelection.value);
});

//crea y lee los datos al presionar el boton agregar
let animalSender = document.getElementById("btnRegistrar");
animalSender.addEventListener("click", () => {
  //valida el formulario en forma inmediata
  if (formValidator()) {
    //agrega el animal al array de la galeria
    const index = animal_array.AddAnimal(
      document.getElementById("animal").value,
      document.getElementById("edad").value,
      document.getElementById("comentarios").value,
      document.getElementById("soundURL").innerText,
      document.getElementById("imagen").src
    );
//rescata el valor del animal agregado a la galeria ()
    let animal_process = animal_array.AnimalGalleryArray[index];
//construye el card y lo inyecta al html
    buildCard(animal_process, index);
    console.log(animal_array.AnimalGalleryArray);
//limpia el formulario 
    const cleanForm = (() => {
      animalSelection.value = "Seleccione un animal";
      document.getElementById("edad").value = "Seleccione un rango de años";
      document.getElementById("comentarios").value = "";
      document.getElementById("preview").innerHTML = "";
    })();
  }
});

//construye el card para inyectarlo al html
//agrega y deja funcional el boton del sonido
function buildCard(animal, id) {
  let element = document.getElementById("Animales");
  let htmlString = `<div class="card animal-card bg-secondary" id="card${id}">
  <img id="image-${id}" src="${animal.Img}" width="200" height="200"  class="card-img-top card-img " data-toggle="modal" data-target="#exampleModal">
  <div class="card-body btn bg-secondary  animal-btn " onclick="document.getElementById('sound${id}').play();">
 <audio id="sound${id}" src="${animal.Sonido}" preload="auto">
 </audio>
  </div>
</div>
</div>`;

  let newDiv = document.createElement("div");
  newDiv.innerHTML = htmlString;
  element.appendChild(newDiv);
  return element;

}


//lee el evento al levantar el modal 
$('#exampleModal').on('shown.bs.modal', function (e) {
 //obtiene el modal 
 let modal = document.getElementsByClassName("modal-body")[0]; 
 //obtiene el ID asignado a cada animal (en el id de la imagen)
 const getId=e.relatedTarget.id;
 console.log(getId);
 //limpia el ID
 const id =getId.replace('image-','');
 console.log(id);
 //Hace la llamada al array de la galeria de animales con el id
 let animal = animal_array.AnimalGalleryArray[id];
 console.log(animal);
  
  
  
  //crea el modal
  let newDiv = document.createElement("div");
  newDiv.innerHTML =`
  <img src="${animal.Img}"width="200" height="200" class="col-12 modal-img"/>
  <p>${animal.Edad}</p>
  <p>Comentarios</p>
  <p>${animal.Comentarios}</p>
  `
  //inyecta el modal
  modal.appendChild(newDiv);
  
})

//despues que el modal cierra, lo limpia
$('#exampleModal').on('hidden.bs.modal', function (e) {
  let modal = document.getElementsByClassName("modal-body")[0];
  modal.innerHTML="";
})



//valida el formulario
function formValidator() {
  if (animalSelection.value == "Seleccione un animal") {
    return alert("Debe seleccionar un animal");
  } else if (
    document.getElementById("edad").value == "Seleccione un rango de años"
  ) {
    return alert("Debe seleccionar un rango de edad");
  } else if (document.getElementById("comentarios").value == "") {
    return alert("Los comentarios no pueden estar vacíos");
  }
  return true;
}
