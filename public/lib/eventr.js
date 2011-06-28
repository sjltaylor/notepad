/*
parameters: an arbitrary number of arguments, each of which is a valid function name.

an object with the listen events install is returned.

Example:

var obj = new Object();

// install three events emitters on object
obj.events = Eventr('clicked', 'updated', 'hidden');

// register some listeners..
obj.events.clicked(event_handler_function);
obj.events.updated(event_handler_function);
obj.events.hidden(event_handler_function);

// emit the events..
obj.events.clicked();
obj.events.hidden();

obj.events.updated(new_value_arg); 
// n.b.: new_value_arg MUST NOT be a function otherwise it will be treated as an event handler

// unbind the events...
obj.events.unbind_clicked(event_handler_function)
obj.events.unbind_updated(event_handler_function)
obj.events.unbind_hidden(event_handler_function)
(obj.events.unbind_<eventName>(<handler>))
*/

Eventr = function() {
   var eventSource = {};

   // register a new event for the source
   var installEvent = function(name) {
      var listeners = [];
      
      // assign the event function to the specified name
      eventSource[name] = function() {
        // if there is one argument and that argument is a function, assume it is an event handler 
        if (arguments.length == 1 && (typeof arguments[0]) == 'function') {
           listeners.push(arguments[0]);
           return eventSource;
        }
        
        var event_arguments = arguments;
        var _continue = true;
        jQuery(listeners).each(function(i,handler) {
            // returning false will halt the iteration
           _continue = _continue && handler.apply(eventSource, event_arguments);
           return _continue;
        });
        return _continue;
      };

      eventSource['unbind_' + name] = function(listener) {
        var old_listeners = listeners;
        listeners = [];
        jQuery(old_listeners).each(function(i,e){
           if (e != listener) listeners.push(e);
        });
      };
   } 
   
   for (var i = 0; i < arguments.length; i++) {
     installEvent(arguments[i]);
   }
   
   return eventSource;
}

