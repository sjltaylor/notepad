NoteListController = function(){
	var self = ViewController();
	self.$view = NoteListView();
	
	self.addItem = function(note) {
		self.$view.addItem(note);
	};
		
	return self;
}

NoteListView = function() {
	var self = z.ol().id('node_list');
	
	self.addItem = function(newNote) {
		self.append(z.li().text(newNote));
	};
	
	return self;	
}