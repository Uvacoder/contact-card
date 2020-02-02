const elem = document.getElementById('elem');
console.log(elem)

function handler1() {
    alert('Thanks!');
};

function handler2() {
    alert('Thanks again!');
};

elem.onclick = () => alert("Hello");
elem.addEventListener("click", handler1); // Thanks!
elem.addEventListener("click", handler2); // Thanks again!