MessageBoard.Routers.Posts = Backbone.Router.extend({
	
	initialize: function(options) {
    this.el = $('#posts-list');
    this.collection = options.collections;
  },

	routes: {
    "": 				  		 "index",
    "new": 		 				 "newPost",
    "posts/:id":  		 "editPost",
  },

	index: function() {
    var view = new MessageBoard.Views.PostsIndex({ collection: MessageBoard.posts });
    $('body').html(view.render().$el);
	  },

	newPost: function() {
		var view = new MessageBoard.Views.PostsNew({ collection: MessageBoard.posts });
		$('body').html(view.render().$el);
	},

	editPost: function(id) {
		var post = this.collection.get(id);
    var view = new MessageBoard.Views.PostsEditView({ model: post });
    $('body').html(view.render().$el);
	},

});