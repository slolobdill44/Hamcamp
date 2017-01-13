class AddLengthToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :length, :integer
    add_column :tracks, :album_track_number, :integer
  end
end
