const example1 = () => {
  try {
    let x = a;
  } catch (error) {
    console.log(error);
    console.log("caught an error", error.message);
  }
};

const example2 = () => {
  try {
    console.log("inside an outer try block");
    try {
      
    }
  } catch {}
};

example1();
