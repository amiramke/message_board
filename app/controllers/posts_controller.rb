class PostsController < ApplicationController
	respond_to :json, :html

	#wrap_parameters :post

	def index
		respond_with(@posts = Post.all)
	end
	
	def create
    respond_with(Post.create(params[:post]))
  end

  def update
  	@post = Post.find(params[:id])
  	@post.update_attributes(params[:post])
  	respond_with(@post)
  end

	def show
    respond_with(@post = Post.find(params[:id]))
  end
  
end
