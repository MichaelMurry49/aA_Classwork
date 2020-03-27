class SessionsController < ApplicationController
    
    before_action :redirect_if_logged_in, only: [:new,:create]
    def new
        render :new
    end

    def create
        user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        # debugger
        if user
            login!(user)
            redirect_to user_url(user)
        else
            render :new
        end
    end

    def destroy
        logout!
        redirect_to users_url
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
