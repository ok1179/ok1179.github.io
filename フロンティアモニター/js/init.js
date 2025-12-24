/*

 */
$(function() {
	//rollover
	$('#GlobalNavi a img, .imgover').rollover();

	var images = $(".imgoverAll");
	for(var i=0; i < images.size(); i++) {
		if(images.eq(i).attr("src").match("_off.")) {
			$(".imgoverAll").eq(i).hover(function() {
				$(this).attr('src', $(this).attr("src").replace("_off.", "_on."));
			}, function() {
				$(this).attr('src', $(this).attr("src").replace("_on.", "_off."));
			});
		}else if(images.eq(i).attr("src").match("_on.")) {
			$(".imgoverAll").eq(i).hover(function() {
				$(this).attr('src', $(this).attr("src").replace("_on.", "_off."));
			}, function() {
				$(this).attr('src', $(this).attr("src").replace("_off.", "_on."));
			});
		}
	}

/*	$('.imgover').each(function(){
		this.osrc = $(this).attr('src');
		this.rollover = new Image();
		this.rollover.src = this.osrc.replace(/\.\w+$/, '_on' + '$&');
	}).hover(function(){
		$(this).attr('src',this.rollover.src);
	},function(){
		$(this).attr('src',this.osrc);
	});
*/

	//pagescroll
	$("a[href^=#]").click(function() {
		var $t = $(this.hash);
		if (this.hash.length > 1 && $t.size()) {
			$.scrollTo($t, 400);
			return false;
		}
	});

});
