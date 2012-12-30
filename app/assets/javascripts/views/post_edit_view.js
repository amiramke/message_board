MessageBoard.Views.PostsEditView = Backbone.View.extend({
	tagName: 'form',
	id: "edit-post",

	events: {
    "submit": "update",
  },
	
  initialize: function(options) {
    _.bindAll(this, "render", "updated");
  },

	render: function () {
    //this.$el.attr("id", "post_" + this.model.id);
    this.$el.html(JST['posts/edit']({ post: this.model }));
    this.renderFormContents();
    return this;
  },
	
  renderFormContents: function() {
    this.$('label').attr("for", "post_updated_" + this.model.get('id'));
    this.$('input#edit-post-title').val(this.model.escape('title'));
    //alert(this.model.escape('title'));

    this.$('label').attr("for", "post_updated_" + this.model.get('id'));
    this.$('input#edit-post-message').val(this.model.escape('message'));
    //alert(this.model.escape('message'));
  },

	renderFlash: function(flashText) {
    this.$el.prepend(JST['posts/flash']({ flashText: flashText, type: 'success' }));
  },
         
  // postUrl: function() {
  //   alert(this.model.get('id'));
  //   return "#posts/";
  // },
	
  update: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.commitForm();
 
    this.model.save({}, { success: this.updated() });
    return false;
  },

  commitForm: function() { 	
    this.model.set({ title: this.$('input[name=title]').val(), message: this.$('input[name=message]').val()});
  },

  updated: function() {
    var flash = "Edited Post " + this.model.escape('title');

    //this.collection.add(this.model);
    //this.newPost();
    //this.render();
    this.renderFlash(flash);
  }

});