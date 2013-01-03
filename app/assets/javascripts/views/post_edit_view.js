MessageBoard.Views.PostsEditView = Backbone.View.extend({
	tagName: 'form',
	id: "edit-post",

	events: {
    "click button#submit-post": "update",
    "click button#delete-post": "destroy",
  },
	
  initialize: function(options) {
  },

	render: function () {
    this.$el.html(JST['posts/edit']({ post: this.model }));
    this.renderFormContents();
    return this;
  },
	
  destroy: function (e) {
    e.preventDefault();
    this.model.destroy(
      { success: this.destroyed(),
        // success: function(model, response, options) {
        //   this.destroyed();
        // },
        error: function(model, xhr, options) {
        }
      });
  },

  renderFormContents: function() {
    this.$('label').attr("for", "post_updated_" + this.model.get('id'));
    this.$('input#edit-post-title').val(this.model.escape('title'));

    this.$('label').attr("for", "post_updated_" + this.model.get('id'));
    this.$('input#edit-post-message').val(this.model.escape('message'));
  },

	renderFlash: function(flashText) {
    this.$el.prepend(JST['posts/flash']({ flashText: flashText, type: 'success' }));
  },
	
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

  destroyed: function() {
    var flash = "Deleted Post " + this.model.escape('title');

    this.render();
    this.renderFlash(flash);
  },

  updated: function() {
    var flash = "Edited Post " + this.model.escape('title');

    this.render();
    this.renderFlash(flash);
  }

});