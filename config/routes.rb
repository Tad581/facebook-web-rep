Rails.application.routes.draw do
  resources :follows
  get "/search", to: "posts#search"
  resources :posts

  devise_for :users
  root "posts#index"
end
