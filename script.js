var slider_img = document.querySelector('.slider-img');
var pics = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png'];
var i = 0;

function back() {
  if (i <= 0) i = pics.length; // Corrected logic for going back to the last image
  i--;
  return setImg();
}

function next() {
  if (i >= pics.length - 1) i = -1; // Corrected logic for going to the first image
  i++;
  return setImg();
}

function pick(){
    if (i == 0){
        window.location.assign("https://www.facebook.com/MuffinHavlop/");
    }
    if (i == 1){
        window.location.assign("https://www.facebook.com/profile.php?id=100028238286851");
    }
    if (i == 2){
        window.location.assign("https://www.facebook.com/joycebutjoycee");
    }
    if (i == 3){
        window.location.assign("https://www.facebook.com/Top1lorion");
    }
    if (i == 4){
        window.location.assign("https://www.facebook.com/baothiu.banh.39?comment_id=Y29tbWVudDozNjU2NDQ4MzI2NDEzNTRfMTQ0ODAwNDczMjc2MzY4Mw%3D%3D");
    }
    if (i == 5){
        window.location.assign("https://www.facebook.com/tabalice.lachandra");
    }
    if (i == 6){
        window.location.assign("https://www.facebook.com/grapily");
    }
    if (i == 7){
        window.location.assign("https://www.facebook.com/duyphuc.nguyen.140193");
    }
    if (i == 8){
        window.location.assign("https://www.facebook.com/profile.php?id=100085689455064");
    }
}

function setImg() {
  return slider_img.setAttribute('src', pics[i]); // Using pics variable
}
