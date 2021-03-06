class UsersController < ApplicationController
    def index

        # render plain: "I am in the index action"
        user = User.all
        render json: user

    end

    def create
        user = User.new(user_params)
        if user.save
            redirect_to "/users/#{user.id}" 
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end


end
