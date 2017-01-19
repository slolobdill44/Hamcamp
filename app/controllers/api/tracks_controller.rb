class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)

    if @track.save
      render 'api/tracks/show'
    else
      render json: ["Invalid track parameters"], status: 401
    end
  end

  def destroy
    @track = Album.find(params[:id])

    if @track.destroy
      redirect_to link_url(link)
    else
      render json: ["Errors occurred. Did not destroy a track"], status: 401
    end
  end

  def track_params
    params.require(:track).permit(:name, :album_id, :album_track_number, :track_url)
  end
end
