/**
 * Where a spell showed up for the first time.
 */
export type FirstAppearance = "book" | "movie" | "videogame";

export const FIRST_APPEARANCES: FirstAppearance[] = [
  "book",
  "movie",
  "videogame",
];

export const ORIGIN_LABELS: Record<FirstAppearance, string> = {
  book: "Libro",
  movie: "Película",
  videogame: "Videojuego",
};

/**
 * Represents a spell of the spellbook.
 *
 * @class
 */
class Spell {
  Name: string;
  descripcion: string;
  firstAppearance: FirstAppearance;

  /**
   * Creates an instance of the Spell class.
   *
   * @constructor
   * @param {string} name - The name of the spell.
   * @param {string} descripcion - What the spell does.
   * @param {FirstAppearance} firstAppearance - Where the spell appeared first.
   * @throws {Error} Throws an error if any of the data is not valid.
   */
  constructor(
    name: string,
    descripcion: string,
    firstAppearance: FirstAppearance,
  ) {
    const cantidad = 120;
    if (name.trim().length === 0) {
      throw new Error("El nombre del hechizo no puede ser vacío");
    }
    if (descripcion.trim().length === 0) {
      throw new Error("La descripción del hechizo no puede ser vacía");
    }
    if (descripcion.length > cantidad) {
      throw new Error("La descripción no puede superar los 120 caracteres");
    }
    if (!FIRST_APPEARANCES.includes(firstAppearance)) {
      throw new Error("Debe indicar la primera aparición del hechizo");
    }
    this.Name = name;
    this.descripcion = descripcion;
    this.firstAppearance = firstAppearance;
  }

  /**
   * Checks if the spell was first seen in the original books.
   *
   * @return {boolean} True if the first appearance was a book.
   */
  isOriginal() {
    return this.firstAppearance === "book";
  }

  /**
   * Returns the text shown to the user for the first appearance.
   *
   * @return {string} The label of the first appearance.
   */
  getOriginLabel() {
    return ORIGIN_LABELS[this.firstAppearance];
  }

  /**
   * Returns a one-line description of the spell.
   *
   * @return {string} The name, origin and description of the spell.
   */
  describe() {
    const text = `${this.Name} (${this.getOriginLabel()}): ${this.descripcion}`;
    return text;
  }
}

export default Spell;
