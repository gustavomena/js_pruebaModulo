import Animal from "./animal.js";
class Aguila extends Animal {
  #sonido_animal;
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.#sonido_animal = sonido;
  }

  Chillar() {
    return this.#sonido_animal;
  }
}

export default Aguila;
