// https://codepen.io/sinisag/pen/vPEajE CREDITS TO THIS PERSON'S CODE

$(document).ready(function(){

	var lightbox = document.getElementById('lightbox');
	var lightboxClose = document.getElementById('lightbox');
	lightboxClose.onclick = function() { 
	  lightbox.style.display = "none";
	};

	document.onclick = function (e) { 
	  if (e.target.className.indexOf('pix') !== -1) {
	      var img = e.target;
	      var lightboxImg = document.getElementById("boxcontent");
	      lightbox.style.display = "block";
	      lightboxImg.src = img.src;
	   }
	};
});


// window.onload = function() {
// 	var modal = document.getElementById("myModal");
// 	var img = document.getElementById("myImg");
// 	var modalImg = document.getElementById("img01");
// 	img.onclick = function(){
// 	  modal.style.display = "block";
// 	  modalImg.src = this.src;
// 	}
// 	var span = document.getElementsByClassName("close")[0];

// 	span.onclick = function() { 
// 	  modal.style.display = "none";
// 	}
// }
