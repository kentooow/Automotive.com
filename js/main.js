var slider_img = document.querySelector('.slider-img');
var images = ['basic-img-1.jpg', 'basic-img-2.jpg', 'basic-img-3.jpg', 'basic-img-4.jpg', 'basic-img-5.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "assets/"+images[i]);
	
}