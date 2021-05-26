//       A REVOIR
const input = document.querySelector('input');

input.addEventListener('keydown', clicker);


function clicker(event) {
  if (event.keyCode === 13) {
   document.getElementById('runesButton').click();
  }
};


document.getElementById('runesButton').addEventListener('click', () => {
	var champion = document.getElementById('form');
	var first = "https://u.gg/lol/champions/";
	var last = "/build/";
	var x = first.concat(champion.elements[0].value);
	var link = x.concat(last);

	window.open(link);
});