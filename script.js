function ampliar() {
    const imagensGaleria = document.querySelectorAll(".gallery-items");
    imagensGaleria.forEach(imagem => {
        imagem.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)"; 
            this.style.transition = "transform 0.3s ease"; 
        });
        imagem.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)"; 
        });
    });
}
ampliar();

function abrirImagemGrande() {
    const imagensGaleria = document.querySelectorAll(".gallery-items");
    
    imagensGaleria.forEach(imagem => {
        imagem.addEventListener("click", function() {
            const fundo = document.createElement("div");
            fundo.style.position = "fixed";
            fundo.style.top = "0";
            fundo.style.left = "0";
            fundo.style.width = "100%";
            fundo.style.height = "100%";
            fundo.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
            fundo.style.display = "flex";
            fundo.style.justifyContent = "center";
            fundo.style.alignItems = "center";
            fundo.style.zIndex = "1000"; 

            const imagemGrande = document.createElement("img");
            imagemGrande.src = this.src; 
            imagemGrande.style.maxWidth = "80%"; 
            imagemGrande.style.maxHeight = "80%"; 
            imagemGrande.style.border = "5px solid white"; 
            imagemGrande.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)"; 
            imagemGrande.style.transition = "all 0.3s ease"; 

            fundo.appendChild(imagemGrande);

            document.body.appendChild(fundo);

            fundo.addEventListener("click", function() {
                document.body.removeChild(fundo); 
            });
        });
    });
}
abrirImagemGrande();