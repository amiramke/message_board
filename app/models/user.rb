class User < ActiveRecord::Base
  include Clearance::User
  attr_accessible :email 
  has_many :posts
end
