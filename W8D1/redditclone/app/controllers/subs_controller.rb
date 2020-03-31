class SubsController < ApplicationController
   
    def show
        @sub = params.find_by(id: params[:id])
        render :show
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = params[:moderator_id]
        if !@sub.save
            flash[:errors] = ["Invalid Credentials For Sub"]
        end
        redirect_to sub_url(@sub)
    end

    def update
        @sub = Sub.find_by(id: params[:id])
        if !@sub.save
            flash[:errors] = ["sub does not exist"]
            render :edit
        else
            redirect_to sub_url(@sub)
        end
    end

    def edit
        @sub = Sub.find_by(id: params[:id])
        if @sub && @sub.moderator_id == current_user.id
        render :edit
    end

    private

    def sub_params
        params.require(:sub).permit(:title,:url,:content)
    end

end
