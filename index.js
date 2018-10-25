var node = document.createElement("a");
node.className = "board-header-btn";
node.id = "calc-day";
var textnode = document.createTextNode("Calcular dia");
node.appendChild(textnode);

document.querySelector("div.mod-right").id = "head-buttons";
var divAtual = document.getElementById("head-buttons"); 
divAtual.appendChild(node);

document.querySelectorAll('.list-header-name').forEach( el => {
    if( el.textContent == "Feito")
        el.id = "dayScore";
});

document.getElementById('calc-day').addEventListener("click",function(){
    let sum = 0;
    document.querySelectorAll('.card-label').forEach( el => {
        sum += parseInt(el.textContent);
        document.getElementById('dayScore').textContent = "Pontos hoje: "+sum;
    });
});