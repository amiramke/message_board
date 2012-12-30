MessageBoard.Routers.Posts = Backbone.Router.extend({
	
	initialize: function(options) {
    this.el = $('#posts-list');
    this.collection = options.collections;
    //alert(options)
    //debugger
  },

	routes: {
    "": 				  		 "index",
    "new": 		 				 "newPost",
    "delete/:id": 		 "destroyPost",
    "posts/:id":  "editPost",
    //"posts/:id":  		 "showPost",
  },

	index: function() {
    var view = new MessageBoard.Views.PostsIndex({ collection: MessageBoard.posts });
    $('body').html(view.render().$el);
	  },

	newPost: function() {
		var view = new MessageBoard.Views.PostsNew({ collection: MessageBoard.posts });
		$('body').html(view.render().$el);
	},
	
	deletePost: function() {

	},
	
	editPost: function(id) {
		//debugger
		//alert(this.collection);
		var post = this.collection.get(id);
    var view = new MessageBoard.Views.PostsEditView({ model: post });
    $('body').html(view.render().$el);
	},

});