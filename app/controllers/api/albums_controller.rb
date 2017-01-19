class Api::AlbumsController < ApplicationController
  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render 'api/albums/show'
    else
      render json: ["Invalid album parameters"], status: 401
    end
  end

  def update
    @album = current_user.albums.find(params[:id])

    if @album.update_attributes(album_params)
      render 'api/albums/show'
    else
      render json: ["Invalid new album parameters"], status: 401
    end
  end

  def destroy
    @album = Album.find(params[:id])

    if @album.destroy
      redirect_to link_url(link)
    else
      render json: ["Errors occurred. Did not destroy album"], status: 401
    end
  end

  def album_params
    params.require(:album).permit(:title, :artist_id, :image_url)
  end
end
