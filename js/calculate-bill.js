//to get the value of the element
const theElement = document.querySelector(".targetElement");
console.log(theElement.value);

//to set a new value in an event
theElement.value = "The new value..."

//to add behaviour to a button
const theButton = document.querySelector(".targetButton");
theButton.addEventListener("click", function(){
    //do something when the button is clicked
});

//add eventListener