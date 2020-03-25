class BandsController < ApplicationController

    def index
        @bands = Band.all
        render :index
    end
    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to "/bands/#{@band.id}"
        else
            render :new
        end 
    end

    def edit
    end

    def update

    end

    def delete
        
    end

    def show
        @band = Band.find_by(id: params[:id])
        render :show
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
