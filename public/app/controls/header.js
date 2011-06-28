HeaderController = function() {
	var self = ViewController();
	self.$view = HeaderView();
	return self;	
};

HeaderView = function () {
	var self = z.div().id('header').append(z.h1().text('Notepad'));	
	return self;
};
