let count = document.querySelector(".count");
let incBtn = document.querySelector("button.inc");
let decBtn = document.querySelector("button.dec");
let resetBtn = document.querySelector("button.reset");

let step5 = document.querySelector("button.five");
let step10 = document.querySelector("button.ten");
let step15 = document.querySelector("button.fifteen");

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + (action.step || 1);

    case "dec":
      return state - (action.step || 1);

    case "reset":
      return 0;

    case "reset":
      return 0;

    default:
      return state;
  }
}

let store = Redux.createStore(reducer);
let initialStep = 1;

store.subscribe(() => {
  counter = store.getState();
  count.innerText = counter;
});

incBtn.addEventListener("click", () => {
  store.dispatch({
    type: "inc",
    step: initialStep,
  });
});

decBtn.addEventListener("click", () => {
  store.dispatch({
    type: "dec",
    step: initialStep,
  });
});

resetBtn.addEventListener("click", () => {
  store.dispatch({
    type: "reset",
  });
});

step5.addEventListener("click", (e) => {
  e.target.classList.add("active");
  step10.classList.remove("active");
  step15.classList.remove("active");
  initialStep = 5;
});

step10.addEventListener("click", (e) => {
  step5.classList.remove("active");
  e.target.classList.add("active");
  step15.classList.remove("active");

  initialStep = 10;
});

step15.addEventListener("click", (e) => {
  e.target.classList.add("active");
  step5.classList.remove("active");
  step10.classList.remove("active");

  initialStep = 15;
});
