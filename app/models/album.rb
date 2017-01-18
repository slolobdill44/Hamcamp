class Album < ActiveRecord::Base
  validates :title, :artist, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: "User"

  has_many :tracks, dependent: :destroy
end
