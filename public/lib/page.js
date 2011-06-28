(function($){
	Page = function () {
		
		var self = z.div().id('page').css({
			margin: '0 auto',
			padding: 0
		});
		
		var $body = z.body(self).css({
			padding: 0,
			margin: 0,
			width: percent(100),
			height: percent(100)
		});
		
		return self;
	}
})(jQuery);
