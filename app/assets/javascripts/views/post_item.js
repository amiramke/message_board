// app/assets/javascripts/views/post_item.js
MessageBoard.Views.PostView = Backbone.View.extend({
  tagName: "tr",

  render: function () {
    this.$el.html(JST['posts/item']({ post: this.model }));
    //this.renderFormContents();
    return this;
  },
  
  // renderFormContents: function() {
  //   this.$('label').attr("for", "task_completed_" + this.model.get('id'));
  //   this.$('label').html(this.model.escape('title'));

  //   this.$('input').attr("id", "task_completed_" + this.model.get('id'));
  //   this.$('input').prop("checked", this.model.isComplete());

  //   this.$('a').attr("href", this.postUrl());
  // },


});