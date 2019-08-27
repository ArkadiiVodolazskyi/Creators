"use strict";

function isScrollable () {
	if (siteMenu.classList.contains("opened")) {
		document.body.classList.add("stopScroll");
	}
	else {
		document.body.classList.remove("stopScroll");
	}
}

// portfolio.html | #order

let fillOrder = document.getElementById("fillOrder");
let modalOrder = document.getElementById("modalOrder");
let makeOrder = document.getElementById("makeOrder");
let overlay = document.getElementById("overlay");

function isScrollable () {
	if (modalOrder.classList.contains("opened")) {
		document.body.classList.add("stopScroll");
	}
	else {
		document.body.classList.remove("stopScroll");
	}
}

fillOrder.addEventListener("click", function() {

	modalOrder.classList.add("opened");
	overlay.classList.add("opened");
	isScrollable();

});

makeOrder.addEventListener("click", function() {

	modalOrder.classList.remove("opened");
	overlay.classList.remove("opened");
	isScrollable();

});

overlay.addEventListener("click", function() {

	modalOrder.classList.remove("opened");
	overlay.classList.remove("opened");
	isScrollable();

});

// blog.html | #toOrder

let toOrder = document.getElementById("toOrder");

toOrder.addEventListener("click", function() {

	fillOrder.classList.add("highlighted");

});

fillOrder.addEventListener("blur", function() {

	fillOrder.classList.remove("highlighted");

});

