# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

COLORS = [
  #lighter, darker
  ['#77141F', '#3F0F14'], #red
  [ '#7C784A', '#3A3710'], #green
  [ '#ADD7F6', '#87CDFF'], #light blue
  [ '#0C7C59', '#2B4162'], #green/blue
  [ '#F7E3AF', '#C08497'] #pastel kinda
]

User.destroy_all
User.create!(username: "Adrian", password: "adrian", primary_color: '#0C7489', secondary_color: '#499F68' );
User.create!(username: "Guest", password: "guestpassword", primary_color: '#77141F', secondary_color: '#3F0F14');
User.create!(username: "Pharcyde", password: "pharcyde", primary_color: '#7C784A', secondary_color: '#3A3710');
User.create!(username: "Black Lips", password: "blacklips", primary_color: '#ADD7F6', secondary_color: '#87CDFF');
User.create!(username: "Jacques Greene", password: "jacquesgreene", primary_color: '#465362', secondary_color: '#011936' )
User.create!(username: "Vanessa", password: "vanessa", primary_color: '#0C7489', secondary_color: '#499F68')

def new_faker_user
  pallete = rand(0..4)

  User.create(
    username: Faker::Space.moon + " " + Faker::Name.last_name,
    password: "password",
    primary_color: COLORS[pallete][0],
    secondary_color: COLORS[pallete][1]
  )
end

5.times { new_faker_user }

Album.destroy_all
Album.create!(
  title: "Bizzare Ride II the Pharcyde",
  artist_id: 3,
  image_url: "https://i.scdn.co/image/84bd913b1da2604f17e0c124dbbd9e44b5ab9528",
  description: "First album by The Pharcyde. Released in 1993"
)
Album.create!(
  title: "Labcabincalifornia",
  artist_id: 3,
  image_url: "https://i.scdn.co/image/a5446cbeaa5911d9850c72aeaa3bf81250ecc44a",
  description: "Second album by The Pharcyde. Released in 1995"
)
Album.create!(
  title: "Concealer",
  artist_id: 5,
  image_url: "https://i.scdn.co/image/be3fb64f667e7f0f21d2de17922d6bb1ea48641b",
  description: "EP released in 2012"
)
Album.create!(
  title: "Ready EP",
  artist_id: 5,
  image_url: "https://i.scdn.co/image/cf303c940b3180401c94af71c768ac7775a9eb16",
  description: "EP released by 3021 in 2012"
)
Album.create!(
  title: "On Your Side",
  artist_id: 5,
  image_url: "https://i.scdn.co/image/d8f3875061750ac9aec21c492ca3116f2a6ef5e0",
  description: "EP released in 2013"
)
Album.create!(
  title: "After Life After Party",
  artist_id: 5,
  image_url: "https://i.scdn.co/image/f763bd5e411be05a44e0f7fc93168bf4dfb283da",
  description: "EP released in 2014"
)

Track.destroy_all
Track.create!(
  name: "4 Better or 4 Worse (interlude)",
  album_id: 1,
  album_track_number: 1
)
Track.create!(
  name: "Oh Shit",
  album_id: 1,
  album_track_number: 2
)
Track.create!(
  name: "It's Jigaboo Time (skit)",
  album_id: 1,
  album_track_number: 3
)
Track.create!(
  name: "4 Better or 4 Worse",
  album_id: 1,
  album_track_number: 4
)
Track.create!(
  name: "I'm That Type of Nigga",
  album_id: 1,
  album_track_number: 5
)
Track.create!(
  name: "If I Were President (skit)",
  album_id: 1,
  album_track_number: 6
)
Track.create!(
  name: "Soul Flower (remix)",
  album_id: 1,
  album_track_number: 7
)
Track.create!(
  name: "On the DL",
  album_id: 1,
  album_track_number: 8
)
Track.create!(
  name: "Pack the Pipe (interlude)",
  album_id: 1,
  album_track_number: 9
)
Track.create!(
  name: "Officer",
  album_id: 1,
  album_track_number: 10
)
Track.create!(
  name: "Ya Mama",
  album_id: 1,
  album_track_number: 11
)
Track.create!(
  name: "Passing Me By",
  album_id: 1,
  album_track_number: 12
)
Track.create!(
  name: "Otha Fish",
  album_id: 1,
  album_track_number: 13
)
Track.create!(
  name: "Quinton's on the Way(skit)",
  album_id: 1,
  album_track_number: 14
)
Track.create!(
  name: "Pack the Pipe",
  album_id: 1,
  album_track_number: 15
)
Track.create!(
  name: "Return of the B-boy",
  album_id: 1,
  album_track_number: 16
)
