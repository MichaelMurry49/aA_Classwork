class SessionsController < ApplicationController
    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if user
            log_in!(user)
            redirect_to '/users/#{user.id}'
        else
            flash.now[:errors] = ["Invalid login credentials"]
            render :new
        end
    end
end
