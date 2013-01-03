MessageBoard.Views.PostView = Backbone.View.extend({
  tagName: "tr",

  events: {
    "click a.destroy": "destroy",
  },

  render: function () {
    this.$el.html(JST['posts/item']({ post: this.model }));
    return this;
  },
  
  destroy: function (e) {
    e.preventDefault();
    
    this.model.destroy(
      { 
        error: function(model, xhr, options) {
        }
      });
  },

});