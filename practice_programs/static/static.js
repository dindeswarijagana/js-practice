const debug = (arg) => {
  console.log(arg);
  return arg;
};

class Class {
  static #string = "this is a string";
  static string = this.#string;

  constructor() {
    this.string = "this is not a string";
  }

  static {
    console.log("hello world");
  }

  display() {
    return "this";
  }

  display() {
    return "this 2";
  }

  static display() {
    function display() {
      console.log("this is inside display");
    }

    function display() {
      console.log("this is inside display 2");
    }
    display();
    return debug(this.string);
  }

  static display() {
    return debug(this.string + "hi");
  }
}

console.log(Class.display());

function display() {
  console.log("this is display");
}

function display() {
  console.log("this is display 2");
}
