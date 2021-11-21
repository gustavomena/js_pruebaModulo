import Animal from "./animal.js";
class Serpiente extends Animal {
  #sonido_animal;
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.#sonido_animal=sonido;
  }
  Sisear() {
    return this.#sonido_animal;
  }
}

export default Serpiente;