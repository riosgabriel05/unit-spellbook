import { expect, test } from "vitest";
import Spell from "../domain/Spell";

const lumos = new Spell("Lumos", "Ilumina la punta de la varita", "book");

test("A spell from a book is original", () => {
  expect(lumos.isOriginal()).toBeTruthy();
});
