import Animal from "./animal.js";
class Oso extends Animal {
  #sonido_animal;
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.#sonido_animal=sonido;
  }
  Grunir() {
    return this.#sonido_animal;
  }
}

export default Oso;