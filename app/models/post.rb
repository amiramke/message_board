class Post < ActiveRecord::Base
  attr_accessible :message, :title, :created_at, :updated_at, :user_id
  belongs_to :user
end
