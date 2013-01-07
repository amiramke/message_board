MessageBoard.Views.PostsIndex = Support.CompositeView.extend({
  
  initialize: function(){
    _.bindAll(this, "render");
    this.collection.bind("destroy", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderPosts();
    return this;
  },

  renderTemplate: function() {
    this.$el.html(JST['posts/index']({ posts: this.collection }));
  },

  renderPosts: function () {
    var self = this;    
    self.$('tbody').empty();
		// this.$el.html(JST['posts/index']()); // Note that no collection is needed
  //                                        // to build the container markup.
    this.collection.each(function(post) {
    	var postView = new MessageBoard.Views.PostView({ model: post });
      self.renderChild(postView);
      self.$('tbody').append(postView.el);
    });
    return this;
  }
});