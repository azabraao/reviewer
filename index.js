window.onload = function(){
    let node = document.createElement("a");
    node.className = "board-header-btn";
    node.id = "calc-day";
    let textnode = document.createTextNode("Calcular dia");
    node.appendChild(textnode);
    
    document.querySelector("div.mod-right").id = "head-buttons";
    let headButtons = document.getElementById("head-buttons"); 
    headButtons.appendChild(node);
    
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
    window.addEventListener('keyup',function(e){
        // Day calculation. Shortcut letter T with alt key.
        if(e.altKey && e.keyCode == 84){
            var sum=0;
            document.querySelectorAll('.card-label').forEach( el => { 
                sum += parseInt(el.textContent) 
            });
            alert(sum);
        }
        // Week calculation. Shortcut letter S with alt key.
        if(e.altKey && e.keyCode == 83){
            var count = 0,sum = 0; 
            document.querySelectorAll('.current-comment').forEach( el => {
                if(count <= 7){
                    let arr = el.textContent.split('-'); 
                    sum += parseInt(arr[0]);	
                    count++;
                }
            });
            alert(sum);
        }
        // Month calculation. Shortcut letter M with alt key.        
        if(e.altKey && e.keyCode == 77){
            var count = 0,sum = 0;
            document.querySelectorAll('.current-comment').forEach( el => {
                let arr = el.textContent.split('-');
                if((sum + parseInt(arr[0]))){
                    sum += parseInt(arr[0]);
                }
            });
            alert(sum);
        }  
    });
}