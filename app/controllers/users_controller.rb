class UsersController < ApplicationController
  def send_friend_request
    @user = User.find(params[:id])
    @user.followers << current_user
    puts "send friends request #{params[:id]}"
    redirect_back(fallback_location: root_path)
  end
end
