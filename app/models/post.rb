class Post < ActiveRecord::Base
  attr_accessible :message, :title, :created_at, :updated_at, :id
end
