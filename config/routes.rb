Rails.application.routes.draw do
  resources :follows
  get "/search", to: "posts#search"
  get "/request_list", to: "follows#request"
  get "/send_friend_request", to: "users#send_friend_request"
  resources :posts

  devise_for :users
  root "posts#index"
end
