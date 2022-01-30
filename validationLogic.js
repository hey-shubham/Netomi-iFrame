let responseData = fetch(
  "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
);
var country = document.getElementById("country");
var state = document.getElementById("state");
responseData
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      country.innerHTML += `<option value="${e.name}" >${e.name}</option>`;
      if (e.name === country.value) {
        let statesArr = e.states;
        statesArr.map((item) => {
          state.innerHTML += `<option value="${item.code}">${item.name}</option>`;
        });
      }
    });
  });

async function selectState() {
  let response = await fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  );
  let data = await response.json();

  var options = state.getElementsByTagName("option");
  for (var i = 1; i < options.length; i++) {
    state.removeChild(options[i]);
    i--;
  }

  data.forEach((e) => {
    if (e.name === country.value) {
      let statesArr = e.states;
      statesArr.forEach((item) => {
        state.innerHTML += `<option value="${item.code}">${item.name}</option>`;
      });
    }
  });
}

const result = window.parent.document.getElementById("outside");
function validateForm() {
  res = {};

  let name = document.forms["myForm"]["name"].value;
  if (name.length < 4 || name.length > 10) {
    res.Names = "error: length should be in between 4-10 characters.";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
    return false;
  }

  let contact = document.forms["myForm"]["contact"].value;
  if (contact.trim().length != 10) {
    res.Contact = "error: mobile number should be of 10 digits.";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
    return false;
  }

  let country = document.forms["myForm"]["country"];
  if (country.value == "") {
    res.Country = "error: country field is mandatory.";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
    return false;
  }

  let state = document.forms["myForm"]["state"];
  if (state.value == "") {
    res.State = "error: state field is mandatory.";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
    return false;
  }

  let email = document.forms["myForm"]["mail"].value;
  if (email.trim().length < 6 || !email.includes("@") || !email.includes(".")) {
    res.Email = "error: email should be valid.";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
    return false;
  }

  if (JSON.stringify(res) === "{}") {
    res.Result = "Success: All fields are valid";
    result.innerHTML = `<div>${JSON.stringify(res)}</div>`;
  }

  return false;
}
