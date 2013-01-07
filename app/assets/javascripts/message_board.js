window.MessageBoard = {  
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {

    this.posts = new MessageBoard.Collections.Posts(data.posts);
    //this.users = new ExampleApp.Collections.Users(data.users);

    new MessageBoard.Routers.Posts({ collection: this.posts });
    Backbone.history.start();

  }
};