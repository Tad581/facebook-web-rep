Rails.application.routes.draw do
  resources :follows
  get "/search", to: "posts#search"
  get "/request_list", to: "follows#request"
  get "/send_friend_request", to: "users#send_friend_request"
  get "/accept_friend_request", to: "users#send_friend_request"
  get "/delete_friend_request", to: "users#delete_friend_request"
  get "/cancel_friend_request", to: "users#cancel_friend_request"
  resources :posts

  devise_for :users
  root "posts#index"
end
