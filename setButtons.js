let div =  document.querySelector('.botoes');

let botoesValues = ['C','(',')','/',7,8,9,,'*',4,5,6,'-',1,2,3,'+','.',0,'<-','='];

botoesValues.forEach(value =>{
    let button = document.createElement('button');
    button.type='button';
    button.classList.add('botao');
    button.value=value;
    button.textContent=value;
    
    if(!isNaN(value)){
        button.classList.add('number');
    }else if(value == '+' || value == '-' || value == '*' || value == '/' ||value == '='){
        button.classList.add('operation')
    }else{
        button.classList.add('util');
    }

    div.appendChild(button);
});