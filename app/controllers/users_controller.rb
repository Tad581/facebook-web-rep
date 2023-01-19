class UsersController < ApplicationController
  def send_friend_request
    @user = User.find(params[:id])
    @user.followers << current_user
    redirect_back(fallback_location: root_path)
  end

  def remove_friend_request
    @request = Follow.find(params[:id])
  end
end
