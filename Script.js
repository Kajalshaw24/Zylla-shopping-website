const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}


        var mainImg = document.getElementById("m-img");
        var smallImg = document.getElementsByClassName("single-img");

        smallImg[0].onclick = function(){
            mainImg.src = smallImg[0].src
        }
        smallImg[1].onclick = function(){
            mainImg.src = smallImg[1].src
        }
        smallImg[2].onclick = function(){
            mainImg.src = smallImg[2].src
        }
        smallImg[3].onclick = function(){
            mainImg.src = smallImg[3].src
        }
        
    