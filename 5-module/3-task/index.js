function initCarousel() {

  let numberOfClides=4;
  let pointNow=0;

  let carousel = document.querySelector(".carousel__inner");
  let length = carousel.offsetWidth;

  let butt_left = document.querySelector(".carousel__arrow_left");
  let butt_right = document.querySelector(".carousel__arrow_right");

  seeTheButton(pointNow);
  butt_right.addEventListener("click",OnClickRight);
  function OnClickRight(){
    if(pointNow <= length*(numberOfClides - 1)){
      carousel.style.transform = `translateX(-${pointNow+length}px)`;
      pointNow = pointNow + length;
      console.log(pointNow);
      seeTheButton(pointNow);
    }
 
  }

  butt_left.addEventListener("click",OnClickLeft);
  function OnClickLeft(){
    if(pointNow >= 0){
      carousel.style.transform = `translateX(-${pointNow-length}px)`;
      pointNow = pointNow - length;
      console.log(pointNow);
      seeTheButton(pointNow);
    }
  }

  function seeTheButton(pointNow){
    if(pointNow != 0){
      butt_left.style.display = '';
    }
    else{
      butt_left.style.display = 'none';
    }

    if (pointNow==length*(numberOfClides - 1)){
      butt_right.style.display = 'none';
    }
    else{
      butt_right.style.display = '';
    }
  }

}
