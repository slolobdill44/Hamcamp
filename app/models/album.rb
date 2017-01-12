class Album < ActiveRecord::Base
  validates :title, :artist, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"


  has_many :tracks, dependent: :destroy
end
