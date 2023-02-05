// *********** SWITCHS ***************

document.querySelectorAll(".datepicker_day").forEach((element) => {
  element.addEventListener("click", selecter);
});

function selecter(evt) {
  document.querySelectorAll(".selected").forEach((element) => {
    element.classList.remove("selected");
  });
  evt.target.classList.add("selected");
}

// *********  POPup BUTTONS***********

const popUpButtons = document.querySelectorAll(".pop-up-button");

popUpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.parentNode;
    const popUp = parent.querySelector(".pop-up");
    popUp.classList.toggle("show");
  });
});

// *********  POPUP LIST *************

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pop-up-button1");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const wrapper = document.querySelector(".wrapper1");
      wrapper.classList.toggle("show1");
    });
  });
  const items = document.querySelectorAll(".item2");
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      items.forEach(function (i) {
        i.style.fontWeight = "normal";
      });
      item.style.fontWeight = "bold";
      wrapper.classList.remove("show1");
    });
  });
});

// ************** CHARTS ****************

document.addEventListener("DOMContentLoaded", function () {
  const $ppc = document.querySelector(".progress-pie-chart");
  const percent = parseInt($ppc.dataset.percent);
  const deg = (360 * percent) / 100;

  if (percent > 50) {
    $ppc.classList.add("gt-50");
  }

  document.querySelector(
    ".ppc-progress-fill"
  ).style.transform = `rotate(${deg}deg)`;
  document.querySelector(".ppc-percents span").innerHTML = `${percent}%`;
});

// ********* SLIDER ************

/*  rate slider */
const rangeInputs = document.querySelectorAll(".slider1");
const numberInput = document.querySelector(".slider1");

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

numberInput.addEventListener("input", handleInputChange);

//***********SLİDER TİCKED **********

document.querySelectorAll(".__range-step").forEach(function (ctrl) {
  var el = ctrl.querySelector("input");
  var output = ctrl.querySelector("output");
  var newPoint, newPlace, offset;
  el.oninput = function () {
    // colorize step options
    ctrl.querySelectorAll("option").forEach(function (opt) {
      if (opt.value <= el.valueAsNumber) opt.style.backgroundColor = "#9C346B";
      else opt.style.backgroundColor = "#fff";
    });
    // colorize before and after
    var valPercent =
      (el.valueAsNumber - parseInt(el.min)) /
      (parseInt(el.max) - parseInt(el.min));
    var style =
      "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
      valPercent +
      ", #9C346B), color-stop(" +
      valPercent +
      ", #fff));";
    el.style = style;

    // Popup
    if (
      (" " + ctrl.className + " ").indexOf(" " + "__range-step-popup" + " ") >
      -1
    ) {
      var selectedOpt = ctrl.querySelector('option[value="' + el.value + '"]');
      output.innerText = selectedOpt.text;
      output.style.left = "50%";
      output.style.left =
        selectedOpt.offsetLeft +
        selectedOpt.offsetWidth / 2 -
        output.offsetWidth / 2 +
        "px";
    }
  };
  el.oninput();
});

window.onresize = function () {
  document.querySelectorAll(".__range").forEach(function (ctrl) {
    var el = ctrl.querySelector("input");
    el.oninput();
  });
};
