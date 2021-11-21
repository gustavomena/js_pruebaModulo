import Animal from "./animal.js";
class Leon extends Animal {
  #sonido_animal;
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
    this.#sonido_animal=sonido;
  }
  Rugir() {
    return this.#sonido_animal;;
  }
}

export default Leon;