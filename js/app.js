//const lista = document.getElementsByTagName('collection-item')
const lista = document.getElementsByTagName('li');
for (var i = 0; i < lista.length; i++) {
  if (i % 2 == 0) {
    let element = lista[i];
    element.style.background = '#f2f2f2'
    //console.log(element);
  }
}
