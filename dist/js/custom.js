

		$(document).ready(function(){
			//$('.bxslider').bxSlider();
			$('.slidtest').bxSlider({
				auto:true
			});

			$(".navbar span").click(function(){
				$(".main-ul").stop(true,false).slideToggle();
			});
		});
