NotePageController = function() {
	var page = NotesPage();
	
	// a fake model
	var model = {
		save: function(note) {
			this.events.create(note);
			return true;
		}
	};
	model.events = Eventr('create');
	
	page.noteInput.view().events.createRequested(function(newNote){
		model.save(newNote);
	});
	
	model.events.create(function(note){
		page.noteList.addItem(note);
	});
};