MessageBoard.Models.Post = Backbone.Model.extend({	
	urlRoot: "/posts",  
  toJSON: function() {
    var json = _.clone(this.attributes);
    return { post: json };
  }	
});