class Products{

    trocaImagem1(){
        document.getElementById("produto1").src ="./images/image-product-1.jpg";
        document.getElementById("1").style.transition = "all 0.5s"
        document.getElementById("1").style.opacity = "0.5";
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("4").style.opacity = "1";
    }
    trocaImagem2(){
        document.getElementById("produto1").src ="./images/image-product-2.jpg";
        document.getElementById("2").style.transition = "all 0.5s"
        document.getElementById("2").style.opacity = "0.5";
        document.getElementById("1").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("4").style.opacity = "1";
    }
    trocaImagem3(){
        document.getElementById("produto1").src ="./images/image-product-3.jpg";
        document.getElementById("3").style.opacity = "0.5";
        document.getElementById("3").style.transition = "all 0.5s"
        document.getElementById("2").style.opacity = "1";
        document.getElementById("1").style.opacity = "1";
        document.getElementById("4").style.opacity = "1";
    }
    trocaImagem4(){
        document.getElementById("produto1").src ="./images/image-product-4.jpg";
        document.getElementById("4").style.opacity = "0.5";
        document.getElementById("4").style.transition = "all 0.5s"
        document.getElementById("2").style.opacity = "1";
        document.getElementById("3").style.opacity = "1";
        document.getElementById("1").style.opacity = "1";
        
    }
}

let trocar = new Products;