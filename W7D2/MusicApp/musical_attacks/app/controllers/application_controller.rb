class ApplicationController < ActionController::Base
    def current_user
        @current_user
        # User.find_by(session_token: session[:session_token])
    end

    def log_in_user!(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
        redirect_to bands_url
    end

    def logged_in?
        !!@current_user
    end
end
