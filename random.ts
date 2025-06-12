export interface Randomizer {
  rnd(): number
  range(num1: number, num2: number): number
  int(rangeSize: number): number
  choice(array: Array<number>): number
  shuffle(array: Array<number>): Array<number>
  get seed(): number
}

export function buildRandom(seed: number = Date.now()): Randomizer {
  console.log('SEED=', seed)
  // https://stackoverflow.com/a/47593316/138256
  function mulberry32(): number {
    var t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }

  return {
    rnd: mulberry32,
    range(num1: number, num2: number): number {
      const [min, max] = [num1, num2].sort();
      return Math.floor(min + (max - min + 1) * mulberry32());
    },
    int(rangeSize: number): number {
      "use strict";
      console.assert(rangeSize > 0);
      return this.range(0, rangeSize - 1);
    },
    choice(array: Array<number>): number {
      const length = array.length;
      if (length) {
        return array[this.int(length)];
      }
    },
    shuffle(array: Array<number>): Array<number> {
      var i = array.length;

      while (i) {
        const r = this.int(i--);
        [array[i], array[r]] = [array[r], array[i]];
      }

      return array;
    },
    get seed(): number {
      return seed;
    }
  };
}
