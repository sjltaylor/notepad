NoteInputController = function () {
	var self = ViewController();
	self.$view = NoteInputView();
	
	var updateDocumentTitle = function (note) {
		document.title = isBlank(note) ? "Notepad" : ("Notepad: " + note);
	};
	
	self.$view.events.noteChanged(function(note){
		updateDocumentTitle(note);
	});
		
	return self;
};

NoteInputView = function() {
	var self = z.div().id('note_input');	
	self.events = Eventr('noteChanged', 'createRequested');
	var $input = z.input().id('new_note');
	self.append($input);
	
	$input.keyup(function(keyEvent){
		if (keyEvent.keyCode === KeyCodes.Return) {
			self.events.createRequested($input.val());
			$input.val('');
		} 
		self.events.noteChanged($input.val());
	});
	
	return self;
}
