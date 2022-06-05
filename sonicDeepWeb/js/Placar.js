// Classe para desenhar o placar

class Placar {
    constructor(ctx){
        this.ctx = ctx;
        this.direita = this.ctx.canvas.width;
        this.margem = 10;
        this.largura = 300;
    };  
    
    
    // Método para desenhar o placar
    desenhar(){

        this.ctx.font="30px Verdana, Geneva, Tahoma, sans-serif";
        this.ctx.fillStyle="#000"
        this.ctx.fillText("pontos", this.margem - 10, this.margem + 10, this.largura);

        this.ctx.font="30px Verdana, Geneva, Tahoma, sans-serif";
        this.ctx.fillStyle="#ffff00"
        this.ctx.fillText(pontos, this.margem + 30, this.margem + 40, this.largura);

    };
        
};

