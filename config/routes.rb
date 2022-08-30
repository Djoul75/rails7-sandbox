Rails.application.routes.draw do
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
      end
    end
  end

end
