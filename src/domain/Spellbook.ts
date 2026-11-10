import Spell, { type FirstAppearance } from "./Spell";

/**
 * A collection of spells without repeated names.
 *
 * @class
 */
class Spellbook {
  #spells: Spell[] = [];

  /**
   * Adds a spell to the book.
   *
   * @param {Spell} spell - The spell to add.
   * @throws {Error} Throws an error if a spell with the same name already exists.
   */
  addspell(spell: Spell): void {
    const exists = this.#spells.some(
      (spel) => spel.Name.toLowerCase() === spell.Name.toLowerCase(),
    );
    if (exists) {
      throw new Error(`${spell.Name} ya está en el libro de hechizos`);
    }
    this.#spells.push(spell);
    //console.log("Spell ${spell.Name} added");
  }

  /**
   * Returns a copy of the spells in the book.
   *
   * @return {readonly Spell[]} The spells, in the order they were added.
   */
  getSpells(): readonly Spell[] {
    return [...this.#spells];
  }

  /**
   * Returns the spells that first appeared in the given medium.
   *
   * @param {FirstAppearance} origin - The medium to filter by.
   * @return {Spell[]} The matching spells.
   */
  findByOrigin(origin: FirstAppearance): Spell[] {
    return this.#spells.filter((spel) => spel.firstAppearance === origin);
  }

  /**
   * Counts how many spells there are for each first appearance.
   *
   * @return {Record<FirstAppearance, number>} The amount of spells per medium.
   */
  countByOrigin(): Record<FirstAppearance, number> {
    const counts: Record<FirstAppearance, number> = {
      book: 0,
      movie: 0,
      videogame: 0,
    };
    for (const spel of this.#spells) {
      counts[spel.firstAppearance]++;
    }
    return counts;
  }
}

export default Spellbook;
