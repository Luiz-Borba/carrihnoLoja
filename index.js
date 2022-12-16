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
    trocaImagemItem1(){
        document.getElementById("produto01").src ="./images/image-product-1.jpg";
        document.getElementById("item1").style.transition = "all 0.5s"
        document.getElementById("item1").style.opacity = "0.5";
        document.getElementById("item2").style.opacity = "1";
        document.getElementById("item3").style.opacity = "1";
        document.getElementById("item4").style.opacity = "1";
    }
    trocaImagemItem2(){
        document.getElementById("produto01").src ="./images/image-product-2.jpg";
        document.getElementById("item2").style.transition = "all 0.5s"
        document.getElementById("item2").style.opacity = "0.5";
        document.getElementById("item1").style.opacity = "1";
        document.getElementById("item3").style.opacity = "1";
        document.getElementById("item4").style.opacity = "1";
    }
    trocaImagemItem3(){
        document.getElementById("produto01").src ="./images/image-product-3.jpg";
        document.getElementById("item3").style.opacity = "0.5";
        document.getElementById("item3").style.transition = "all 0.5s"
        document.getElementById("item2").style.opacity = "1";
        document.getElementById("item1").style.opacity = "1";
        document.getElementById("item4").style.opacity = "1";
    }
    trocaImagemItem4(){
        document.getElementById("produto01").src ="./images/image-product-4.jpg";
        document.getElementById("item4").style.opacity = "0.5";
        document.getElementById("item4").style.transition = "all 0.5s"
        document.getElementById("item2").style.opacity = "1";
        document.getElementById("item3").style.opacity = "1";
        document.getElementById("item1").style.opacity = "1";
        
    }
    abriCarrossel(){
    document.getElementById("carrosel").style.visibility ="visible"
    document.getElementById("carrosel").style.zIndex ="99"
    document.getElementById("headerContent").style.opacity ="0.3"
    document.getElementById("container").style.opacity ="0.3"
}
fecharCarroseel(){
    document.getElementById("carrosel").style.visibility ="hidden"
    document.getElementById("carrosel").style.zIndex ="-99"
    document.getElementById("headerContent").style.opacity ="1"
    document.getElementById("container").style.opacity ="1"
}
}
class Carrinho{
    adicao(){
        let soma = document.querySelector("contador").Value
        soma = soma+1
        return document.getElementById("contador").innerText =`${soma}`
    }
}
let trocar = new Products;
let cart = new Carrinho