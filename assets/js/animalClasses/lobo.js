import Animal from "./animal.js";
class Lobo extends Animal {
  #sonido_animal;
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.#sonido_animal=sonido;
  }
  Aullar() {
    return this.#sonido_animal;
  }
}

export default Lobo;