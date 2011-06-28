/* 
responsible for the layout and content of the page
*/
NotesPage = function(){
	// I am a page...
	var self = Page();
	
	// with the following extensions...
	$.extend(self, {
		header: HeaderController(),
		noteInput: NoteInputController(),
		noteList: NoteListController()
	});
	
	self.css({
		width: 600
	});
	
	self
	.append(self.header.view())
	.append(self.noteInput.view())
	.append(self.noteList.view());
	
	return self;
};