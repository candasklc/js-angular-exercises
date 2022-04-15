async function f() {
  const text = "Waited for tis text.";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1500);
  });

  await promise.then(function getElement() {
    document.getElementById("subtitle").innerHTML = text;
  }); // wait until the promise resolves (*)
}

f();
