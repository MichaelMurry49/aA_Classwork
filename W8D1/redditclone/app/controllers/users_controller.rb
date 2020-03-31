class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user) 
            redirect_to users_url
        else
            flash.now[:errors] = ["INVALID CREDENTIALS"] # @user.errors.full_messages
            render :new
        end

    end

    def index
        @users = User.all
        render :index
    end

    def show
        # we want to find the user with an id = to the id value in the params hash
        # we grab value out of params hash matched with the id key
        # id: params[:id]
        @user = User.find_by(id: params[:id])
        render :show

    end


    private

    def user_params
        params.require(:user).permit(:username, :password)
    end


end
