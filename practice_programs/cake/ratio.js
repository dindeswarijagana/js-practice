export class Ratio {
  #numerator;
  #denominator;
  constructor(numerator, denominator) {
    this.#numerator = numerator;
    this.#denominator = denominator;
  }

  add(ratio) {
    return new Ratio(
      this.#numerator * ratio.#denominator +
        ratio.#numerator * this.#denominator,
      this.#denominator * ratio.#denominator
    );
  }

  sub(ratio) {
    return new Ratio(
      this.#numerator * ratio.#denominator -
        ratio.#numerator * this.#denominator,
      this.#denominator * ratio.#denominator
    );
  }

  #gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return this.#gcd(b, a % b);
  }

  simplify() {
    const gcd = this.#gcd(this.#numerator, this.#denominator);
    return new Ratio(this.#numerator / gcd, this.#denominator / gcd);
  }

  toString() {
    return `${this.#numerator}/${this.#denominator}`;
  }
}
