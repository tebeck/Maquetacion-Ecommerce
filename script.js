// Swiper
 var swiper = new Swiper('.swiper-container', {
     paginationClickable: true,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     spaceBetween: 0
 });



$(document).ready(function() {

  var getColor;
  if (localStorage.getItem('background') !== null) {
    getColor = localStorage.background;
    $('#fav').css('color', getColor);
  }

  $('#fav').on('click', function() {
    $('#fav').css('color', 'red');
    localStorage.setItem('background', 'red');
    if (getColor == 'rgba(0,0,0,0.5)') {
      getColor = 'red';
      $('#fav').css('color', 'red');
      localStorage.setItem('background', 'red');
    } else {
      getColor = 'rgba(0,0,0,0.5)';
      $('#fav').css('color', 'rgba(0,0,0,0.5)');
      localStorage.setItem('background', 'rgba(0,0,0,0.5)');
    }
  });
});



/* LocalStorage njs */
var getMoney;
if (localStorage.getItem("amount") !== null){
getMoney = localStorage.amount;
document.getElementById("editor").innerHTML = getMoney;
}

  var monto = document.getElementById("editor").innerHTML;
  var monto = monto.replace(/\./g,'');
  var monto = Math.round(monto);
  var monto = monto.toLocaleString(undefined,{ minimumFractionDigits: 0 });
  document.getElementById("editor").innerHTML = monto;

	var amount = document.getElementById("editor").innerHTML;
	var res = amount.replace(/\./g,'')
  var metro = 380;
  var result = res/metro;
  var result = Math.round(result);
  var result = result.toLocaleString(undefined,{ minimumFractionDigits: 0 });
	document.getElementById("metros").innerHTML = result;


document.getElementById("editor").addEventListener("input", function() {
	var amount = document.getElementById("editor").innerHTML;

	localStorage.setItem("amount", amount)
	var res = amount.replace(/\./g,'')
    var metro = 380;
    var result = res/metro;
    var result = Math.round(result);
      var resultl = result.toLocaleString(undefined,{ minimumFractionDigits: 0 });
	document.getElementById("metros").innerHTML = resultl;
}, false);



function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 45 || charCode > 57)) {  /* Acepta el punto (46) */
        return false;
    }
    return true;
}


// Modal para email
document.querySelector('.contact').onclick = function(){
	swal({
		title: "Please leave your email to let us know your interest.",
		text: 'Email:',
		type: 'input',
		showCancelButton: true,
		closeOnConfirm: false,
		animation: "slide-from-top",
		inputPlaceholder: "contact@tebeck.com",
	},
	function(inputValue){
var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
		if (inputValue === false) return false;

		if (inputValue === "") {
			swal.showInputError("Must write something");
			return false;
		}
if (!mailFormat.test(inputValue)) {
            swal.showInputError("ESent!");
            return false;
}
		swal("Sent! ", 'Your email: ' + inputValue, "success");

	});
};
