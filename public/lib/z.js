/*
> Big Z
> Little z
> id
> body
> <?x> (contents)
*/

function initializeZ (options) {
  options = $.extend({
    global_builder_object_name: 'z',
    global_builder_function_name: 'Z'
  }, options);
  
  var Z = function(element_name) {
  	element_name = element_name.toLowerCase();
    var e = jQuery("<"+element_name+" />");	
  	return e;
  } 
  window[options.global_builder_function_name] = Z;

  var z = {};
  (function(){
    jQuery(['body', 'div','span','a','h1','h2','h3','h4','h5','h6','ul','ol','li','p','table','tr','td','br', 'img', 'input', 'iframe', 'article', 'section']).each (function(i,tag_name){
      z[tag_name] = function(/*content*/) { 
        var tag = tag_name==='body' ? jQuery('body') : Z(tag_name);
        jQuery(arguments).each(function(i, elements){
					tag.append(elements);
				});
        return tag; 
      };
    });  
  })();
	window[options.global_builder_object_name] = z;

  $.prototype.id = function (id) {
		return this.attr('id', id);	
	}
}