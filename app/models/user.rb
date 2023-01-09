class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :posts
  has_many :followed_users, foreign_key: :follower_id, class_name: "Follow"
  has_many :followees, through: :followed_users

  has_many :following_users, foreign_key: :followee_id, class_name: "Follow"
  has_many :followers, through: :following_users

  def not_following
    @following = self.followees
    @users = User.all
    @not_following = @users - @following
  end

  def friend_status(friend_id)
    begin
      self.followees.find(friend_id)
      check_is_friend(friend_id)
    rescue
      return "not followed"
    end
  end

  private

  def check_is_friend(friend_id)
    begin
      User.find(friend_id).followees.find(self.id)
      return "friend"
    rescue
      return "not friend"
    end
  end
end
