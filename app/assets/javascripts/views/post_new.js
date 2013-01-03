MessageBoard.Views.PostsNew = Backbone.View.extend({
	tagName: 'form',
	id: "new-task",

	events: {
    "submit": "save",
  },
	
	newPost: function() {
    this.model = new MessageBoard.Models.Post();
  },
  
  initialize: function(options) {
    _.bindAll(this, "render", "saved");
    this.newPost();
  },
	
	render: function () {
    this.$el.html(JST['posts/new']());
    this.$('input[name=title]').focus();
    return this;
  },
	
	renderFlash: function(flashText) {
    this.$el.prepend(JST['posts/flash']({ flashText: flashText, type: 'success' }));
  },

	save: function(e) {
    e.preventDefault();

    this.commitForm();
    this.model.save({}, { success: this.saved });
    return false;
  },

  commitForm: function() { 	
    this.model.set({ title: this.$('input[name=title]').val(), message: this.$('input[name=message]').val()});
  },

  saved: function() {
    var flash = "Created Post: " + this.model.escape('title');

    this.collection.add(this.model);
    this.newPost();
    this.render();
    this.renderFlash(flash);
  }

});