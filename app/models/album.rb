class Album < ActiveRecord::Base
  validates :title, :artist, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: "User"

  has_many :tracks, dependent: :destroy

  has_attached_file :image, styles: {thumb: "50x50#", full: "200x200#"}, default_url: 'http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_200/v1484852368/get_itunes_album_art_qwalez.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


end
