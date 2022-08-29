Rails.application.routes.draw do
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index]
    end
  end

end
