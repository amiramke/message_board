class PostsController < ApplicationController
	respond_to :json, :html

	# wrap_parameters :post

	def index
		respond_with(@posts = Post.all)
	end
	
	# def show
 #    @post = Post.find(params[:id])
 #  end
  
end
