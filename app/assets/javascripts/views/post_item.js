// app/assets/javascripts/views/post_view.js
MessageBoard.Views.PostView = Backbone.View.extend({
  tagName: "tr",

  initialize: function(){

  },

  render: function () {
    this.$el.html(JST['posts/item']({ post: this.model }));
    return this;
  }
});