class UsersController < ApplicationController
    before_action :redirect_if_logged_in, only: [:new,:create]

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to user_url(@user)
        else
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

     def require_user
        redirect_to users_url unless current_user
    end
end
