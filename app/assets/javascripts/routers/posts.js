MessageBoard.Routers.Posts = Support.SwappingRouter.extend({
	
	initialize: function(options) {
    this.el = $('#posts');
    this.collection = options.collection;
  },

	routes: {
    "": 				  		 "index",
    "new": 		 				 "newPost",
    "posts/:id":  		 "editPost",
  },

	index: function() {
    var view = new MessageBoard.Views.PostsIndex({ collection: MessageBoard.posts });
    this.swap(view);
    // $('tbody').html(view.render().$el);
	  },

	newPost: function() {
		var view = new MessageBoard.Views.PostsNew({ collection: MessageBoard.posts });
		this.swap(view);
		// $('tbody').html(view.render().$el);
	},

	editPost: function(id) {
		var post = this.collection.get(id);
    var view = new MessageBoard.Views.PostsEditView({ model: post });
    this.swap(view);
    // $('tbody').html(view.render().$el);
	},

});