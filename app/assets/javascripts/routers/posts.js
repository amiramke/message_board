MessageBoard.Routers.Posts = Backbone.Router.extend({

	routes: {
    "": "index"
  },

	index: function() {
		alert('Hello world!');
    var view = new MessageBoard.Views.PostsIndex({ collection: MessageBoard.posts });
    $('body').html(view.render().$el);
	  },
});