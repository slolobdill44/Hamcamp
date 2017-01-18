class AddAttachmentTrackUrlToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :track_url
    end
  end

  def self.down
    remove_attachment :tracks, :track_url
  end
end
