class Track < ActiveRecord::Base
  validates :name, :album, presence: true

  belongs_to :album

  has_one :artist, through: :album, source: :artist
end
