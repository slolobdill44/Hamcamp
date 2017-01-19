class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)

    if @track.save

    else
      flash.now[:errors] = @track.errors.full_messages

    end
  end

  def destroy

  end 

  def track_params

  end
end
