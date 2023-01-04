class Post < ApplicationRecord
  belongs_to :user
  belongs_to :parent, class_name: "Post", optional: true
  has_many :posts, foreign_key: :parent_id
end
