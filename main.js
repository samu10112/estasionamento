var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");
var largura_carro=90;
var altura_carro=120;
var posicaoX=10;
var posicaoY=380
var novo_fundo;
var novo_carro;
var imagem_fundo="https://static.vecteezy.com/ti/vetor-gratis/t1/1993321-conceito-design-cars-vehicle-from-top-view-in-the-parking-area-design-concept-vetor.jpg";
var imagem_carro="car2.png";

function adicionar(){
    novo_fundo=new Image();
    novo_fundo.onload=atualiza_fundo;
    novo_fundo.src=imagem_fundo;

    novo_carro=new Image();
    novo_carro.onload=atualiza_carro;
    novo_carro.src=imagem_carro;

    function atualiza_fundo(){
        contexto.drawImage(novo_fundo, 0, 0, canvas.width, canvas.height);
    }
    function atualiza_carro(){
        contexto.drawImage(novo_carro, posicaoX, posicaoY, largura_carro, altura_carro);
    }
    
    window.addEventListener("keydown", tecla_pres);
    function tecla_pres(evento){
        var tecla=evento.keyCode;
        console.log(tecla);
        if(tecla==37){
            console.log("esquerda");
            esquerda();
        }
        if(tecla==38){
            console.log("cima");
            cima();
        }
        if(tecla==39){
            console.log("direita");
            direita();
        }
        if(tecla==40){
            console.log("baixo");
            baixo();
        }
    }
    function esquerda(){
        if(posicaoX>=0){
            posicaoX=posicaoX-10;
            console.log("tecla esquerda foi pressionada");
            atualiza_fundo();
            atualiza_carro();
        }
    }
    function cima(){
        if(posicaoY>=0){
            posicaoY=posicaoY-10;
            console.log("tecla cima foi pressionada");
            atualiza_fundo();
            atualiza_carro();
        }
    }
    function direita(){
        if(posicaoX<=640){
            posicaoX=posicaoX+10;
            console.log("tecla direita foi pressionada");
            atualiza_fundo();
            atualiza_carro();
        }
    }
    function baixo(){
        if(posicaoY<=380){
            posicaoY=posicaoY+10;
            console.log("tecla baixo foi pressionada");
            atualiza_fundo();
            atualiza_carro();
        }
    }
}
