Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resource :users
  get '/users', to: 'users#index' #, as: 'user'
  get '/users/:id', to: 'users#show' #, as: 'user'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'


end
