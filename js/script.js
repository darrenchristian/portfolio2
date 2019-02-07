$(document).ready(function(){
/*	let _CONTENT= [ '..', 'hello!', 'i\'m darren christian santos', 'full-stack web developer' ];
	let _PART = 0;
	let _PART_INDEX = 0;
	let _INTERVAL_VAL;
	let _ELEMENT = document.querySelector("#blinktext");
	let _CURSOR = document.querySelector("#cursor");
	function Type() { 
		var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
		_ELEMENT.innerHTML = text;
		_PART_INDEX++;
		if(text === _CONTENT[_PART]) {
			_CURSOR.style.display = 'none';
			clearInterval(_INTERVAL_VAL);
			setTimeout(function() {
				_INTERVAL_VAL = setInterval(Delete, 50);
			}, 1000);
		}
	}
	function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
	_INTERVAL_VAL = setInterval(Type, 100);*/
	let hamburger = $(".hamburger");
  hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
	$('.asidebtn').on('click', function(e){
		e.preventDefault();
		$('aside').toggleClass('aside-toggle');
		$('.mainContent').toggleClass('offset-lg-3');
		$('.mainContent').toggleClass('col-lg-12');
		$(this).toggleClass('asidebtn-tog');
		$('.card-img-top').toggleClass('cardimgtoptoggle');
		$('#blinktext').toggleClass('blinktexttog');
		$('.lgi-odd').toggleClass('lgi-oddtoggle');
		$('.lgi-even').toggleClass('lgi-eventoggle');
		$('.mypic').toggleClass('mypictog');
	});
	$(window).on('scroll', function(){
		let scrollDistance = $(window).scrollTop();
		$('section').each(function(i){
			if($(this).position().top <= scrollDistance){
				$('.list-group-item.active').removeClass('active');
				$('.list-group-item').eq(i).addClass('active');
				if($('.list-group-item').eq(i).length === i){
					$('.progress-bar').toggleClass('toggleAnimateBar');
				}
				$('.asideTitle').text($('.list-group-item.active').text());
			}
		});	
	}).scroll();
});