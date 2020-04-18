/** Add any JavaScript you need to this file. */

//// ADD ORDER NUMBER FIELD DYNAMICALLY ////

function addOrderNumber() {
  var elem = document.querySelector("#order_number");
  elem.innerHTML = '<label for="orderNo" class="form-check-label mt-2"><span class="text-danger">* </span>Order Number</label><input type="text" name="orderNo" id="orderNo" placeholder="Please enter your Order Number" class="form-control" required>'
}

//// CLEAR ORDER NUMBER FIELD ERROR ////

function clearOrderNumber() {
  document.querySelector("#order_number").innerHTML = "";
}

//// TO FORCE TO CHECK ONLY ONE BOX ////

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('phoned')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
  })
}

//// SHOW ERROR MESSAGE /////

function errorMessage(messages) {
  document.getElementById('errors').innerHTML += messages;
}

//// CLEAR ERRORS ////

function clearErrors() {
  clearOrderNumber();
  document.getElementById('errors').innerHTML = "";
  document.getElementById('first-name').focus();
}

//// JS FOR SLIDERS ///

function addCategory(id) {

  var element = document.querySelector(id);

  if (element.style.display === "none") {
    element.style.display += "block";
  } else {
    element.style.display = "none";
  }

}

/// OPEN CLOSE MENUS ///

function openMenu() {
  document.getElementById("side-menu").style.display = "block";
  document.getElementById("menu-bar").style.display = "none";
  document.getElementById("close-bar").style.display = "block";
}

function closeMenu() {
  document.getElementById("side-menu").style.display = "none";
  document.getElementById("menu-bar").style.display = "block";
  document.getElementById("close-bar").style.display = "none";
}

///----OPEN CLOSE MENUS END----///


function showChair() {

  document.getElementById("carouselExampleIndicators").style.display = "none";
  document.getElementById("cat-couches").style.display = "none";
  document.getElementById("cat-table").style.display = "none";
  document.getElementById("cat-chair").style.display = "block";

}


function showCouches() {

  document.getElementById("carouselExampleIndicators").style.display = "none";
  document.getElementById("cat-chair").style.display = "none";
  document.getElementById("cat-table").style.display = "none";
  document.getElementById("cat-couches").style.display = "block";

}

function showTables() {

  document.getElementById("carouselExampleIndicators").style.display = "none";
  document.getElementById("cat-chair").style.display = "none";
  document.getElementById("cat-couches").style.display = "none";
  document.getElementById("cat-table").style.display = "block";

}





