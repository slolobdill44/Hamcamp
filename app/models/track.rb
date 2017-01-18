class Track < ActiveRecord::Base
  validates :name, :album, presence: true

  has_attached_file :track_url, default_url: "http://res.cloudinary.com/adrianlobdill/video/upload/q_36/v1484618676/01._The_Pharcyde_-_4_Better_or_4_Worse_Interlude_btksow.mp3"
  validates_attachment_content_type :track_url, content_type: [
    'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/m4a',
    'audio/mpeg4',
    'audio/x-mpeg4',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  belongs_to :album

  has_one :artist, through: :album, source: :artist
end
