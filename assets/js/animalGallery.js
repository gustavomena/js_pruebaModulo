import Aguila from "./animalClasses/aguila.js";
import Leon from "./animalClasses/leon.js";
import Lobo from "./animalClasses/lobo.js";
import Oso from "./animalClasses/oso.js";
import Serpiente from "./animalClasses/serpiente.js";


//Clase que controla los animales en la galeria
class AnimalGallery {
  #gallery_array;

  constructor() {
    this.#gallery_array = new Array();
    //this.#animal_json= new AnimalJson();
  }

  //lo que entra desde el registro
  AddAnimal(nombre, edad, comentarios,sonido,imagen) {

    const animal_created = this.#AnimalSelectorClass(
      nombre,
      edad,
      imagen,
      comentarios,
      sonido
    );
    this.#gallery_array.push(animal_created);
    return this.#gallery_array.length - 1;
  }

  
  #AnimalSelectorClass(nombre, edad, img, comentarios, sonido) {
    switch (nombre) {
      case "Aguila":
        return new Aguila(nombre, edad, img, comentarios, sonido);
      case "Leon":
        return new Leon(nombre, edad, img, comentarios, sonido);
      case "Lobo":
        return new Lobo(nombre, edad, img, comentarios, sonido);
      case "Oso":
        return new Oso(nombre, edad, img, comentarios, sonido);
      case "Serpiente":
        return new Serpiente(nombre, edad, img, comentarios, sonido);
    }
  }

  get AnimalGalleryArray() {
    return this.#gallery_array;
  }
}

export default AnimalGallery;
