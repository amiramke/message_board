MessageBoard.Views.PostsIndex = Backbone.View.extend({
  
  initialize: function(){
    _.bindAll(this, "render");
    this.collection.bind("destroy", this.render);
  },

  render: function () {
    var self = this;    
		this.$el.html(JST['posts/index']()); // Note that no collection is needed
                                         // to build the container markup.
    this.collection.each(function(post) {
    	var postView = new MessageBoard.Views.PostView({ model: post });
      self.$('table').append(postView.render().el);
    });
    return this;
  }
});