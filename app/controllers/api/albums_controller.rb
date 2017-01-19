class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def create

  end

  def update

  end

  def destroy

  end

  def album_params

  end 
end
