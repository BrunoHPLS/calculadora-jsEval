let tela = document.querySelector('#tela');
let expError = document.querySelector('#expression-error');

div.addEventListener('click',function(event){
    let target = event.target.value;

    if(target=='='){
        let resp;
        expError.textContent ='';
        try{
        resp = eval(tela.value);
        tela.value=resp;
        }catch(err){
            expError.textContent = 'Erro na expressão';
        }
    }
    else if(target=='<-'){
        tela.value = tela.value.substring(0,tela.value.length-1);
    }
    else if(target=='C'){
        tela.value = '';
    }
    else{
        tela.value+=event.target.value;
    }
});