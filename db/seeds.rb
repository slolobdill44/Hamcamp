# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

COLORS = [
  #lighter, darker
  [ '#7C784A', '#3A3710'], #green
  [ '#ADD7F6', '#87CDFF'], #light blue
  [ '#0C7C59', '#2B4162'], #green/blue
  [ '#F7E3AF', '#C08497'] #pastel kinda
]

User.destroy_all
User.create!(username: "Adrian", password: "adrian", primary_color: '#0C7489', secondary_color: '#499F68' );
User.create!(username: "Guest", password: "guestpassword", primary_color: '#F7E3AF', secondary_color: '#C08497');
User.create!(username: "Pharcyde", password: "pharcyde", primary_color: '#7C784A', secondary_color: '#3A3710');
User.create!(username: "Black Lips", password: "blacklips", primary_color: '#ADD7F6', secondary_color: '#87CDFF');
User.create!(username: "Jacques Greene", password: "jacquesgreene", primary_color: '#465362', secondary_color: '#011936' );
User.create!(username: "Vanessa", password: "vanessa", primary_color: '#0C7489', secondary_color: '#499F68');
User.create!(username: "Kayin", password: "kayin1", primary_color: '#F7E3AF', secondary_color: '#C08497');

# def new_faker_user
#   pallete = rand(0..3)
#
#   User.create(
#     username: Faker::Space.moon + " " + Faker::Name.last_name,
#     password: "password",
#     primary_color: COLORS[pallete][0],
#     secondary_color: COLORS[pallete][1]
#   )
# end

# 5.times { new_faker_user }

Album.destroy_all
Album.create!(
  title: "Bizzare Ride II the Pharcyde",
  artist_id: User.find_by_username('Pharcyde').id,
  image: "https://i.scdn.co/image/84bd913b1da2604f17e0c124dbbd9e44b5ab9528",
  description: "First album by The Pharcyde. Released in 1993."
)
Album.create!(
  title: "Labcabincalifornia",
  artist_id: User.find_by_username('Pharcyde').id,
  image: "https://i.scdn.co/image/a5446cbeaa5911d9850c72aeaa3bf81250ecc44a",
  description: "Second album by The Pharcyde. Released in 1995."
)
Album.create!(
  title: "Concealer",
  artist_id: User.find_by_username('Jacques Greene').id,
  image: "https://i.scdn.co/image/be3fb64f667e7f0f21d2de17922d6bb1ea48641b",
  description: "EP released in 2012."
)
Album.create!(
  title: "Ready EP",
  artist_id: User.find_by_username('Jacques Greene').id,
  image: "https://i.scdn.co/image/cf303c940b3180401c94af71c768ac7775a9eb16",
  description: "EP released by 3021 in 2012."
)
Album.create!(
  title: "On Your Side",
  artist_id: User.find_by_username('Jacques Greene').id,
  image: "https://i.scdn.co/image/d8f3875061750ac9aec21c492ca3116f2a6ef5e0",
  description: "EP released in 2013."
)
Album.create!(
  title: "After Life After Party",
  artist_id: User.find_by_username('Jacques Greene').id,
  image: "https://i.scdn.co/image/f763bd5e411be05a44e0f7fc93168bf4dfb283da",
  description: "EP released in 2014."
)
Album.create!(
  title: "Underneath the Rainbow",
  artist_id: User.find_by_username('Black Lips').id,
  image: "https://i.scdn.co/image/efe62f5490706f1f3c1c80fc1e25009eb6b927a9",
  description: "Seventh studio album released by the Black Lips in 2014."
)
Album.create!(
  title: "Catastrophe",
  artist_id: User.find_by_username('Guest').id,
  image: File.new("http://s3-us-west-1.amazonaws.com/hamcamp/albums/images/000/000/008/full/Catastrophe.jpg?1484956624"),
  description: "First EP by Kayin."
)
Album.create!(
  title: "Crevices of the Mind",
  artist_id: User.find_by_username('Kayin').id,
  image: File.new("http://s3-us-west-1.amazonaws.com/hamcamp/albums/images/000/000/009/full/Crevices.jpg?1484956629"),
  description: "First EP by Kayin."
)
Album.create!(
  title: "Moon Safari",
  artist_id: User.find_by_username('Guest').id,
  image: File.new("http://s3-us-west-1.amazonaws.com/hamcamp/albums/images/000/000/010/full/02.jpg?1484956632"),
  description: "First album by the world famous Guest."
)
Album.create!(
  title: "Bricolage",
  artist_id: User.find_by_username('Kayin').id,
  image: File.new("http://s3-us-west-1.amazonaws.com/hamcamp/albums/images/000/000/011/full/03.jpg?1484956633"),
  description: "The second album by Guest."
)
Album.create!(
  title: "Good Things",
  artist_id: User.find_by_username('Adrian').id,
  image: File.new("http://s3-us-west-1.amazonaws.com/hamcamp/albums/images/000/000/012/full/01.png?1484956634"),
  description: "The second album by Guest."
)

# #################################################
# #################################################

Track.destroy_all
Track.create!(
  name: "4 Better or 4 Worse (interlude)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/014Betteror4Worse(Interlude)(1).mp3")
)
Track.create!(
  name: "Oh Shit",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/02.mp3")
)
Track.create!(
  name: "It's Jigaboo Time (skit)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/03It'sJiggabooTime(1).mp3")
)
Track.create!(
  name: "4 Better or 4 Worse",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 4,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/044BetterOr4Worse(1).mp3")
)
Track.create!(
  name: "I'm That Type of Nigga",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 5,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/05I'mThatTypeOfNigga(1).mp3")
)
Track.create!(
  name: "If I Were President (skit)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 6,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/06IfIWerePresident(1).mp3")
)
Track.create!(
  name: "Soul Flower (remix)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 7,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/07SoulFlower(Remix)(1).mp3")
)
Track.create!(
  name: "On the DL",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 8,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/08OnTheDL(1).mp3")
)
Track.create!(
  name: "Pack the Pipe (interlude)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 9,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/09PackThePipe(interlude)(1).mp3")
)
Track.create!(
  name: "Officer",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 10,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/10Officer(1).mp3")
)
Track.create!(
  name: "Ya Mama",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 11,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/11YaMama(1).mp3")
)
Track.create!(
  name: "Passing Me By",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 12,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/12PassingMeBy(1).mp3")
)
Track.create!(
  name: "Otha Fish",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 13,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/13OthaFish(1).mp3")
)
Track.create!(
  name: "Quinton's on the Way(skit)",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 14,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/14Quinton'sOntheWay(1).mp3")
)
Track.create!(
  name: "Pack the Pipe",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 15,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/15PackThePipe(1).mp3")
)
Track.create!(
  name: "Return of the B-boy",
  album_id: Album.find_by_title('Bizzare Ride II the Pharcyde').id,
  album_track_number: 16,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/bizarre_ride/16ReturnOfTheB-Boy(1).mp3")
)

# #################################################
# #################################################

Track.create!(
  name: "Bullshit",
  album_id: Album.find_by_title('Labcabincalifornia').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/labcabin/01Bullshit(1).mp3")
)
Track.create!(
  name: "Pharcyde",
  album_id: Album.find_by_title('Labcabincalifornia').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/labcabin/02Pharcyde(1).mp3")
)
Track.create!(
  name: "Groupie Therapy",
  album_id: Album.find_by_title('Labcabincalifornia').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/labcabin/03GroupieTherapy(1).mp3")
)
Track.create!(
  name: "Runnin",
  album_id: Album.find_by_title('Labcabincalifornia').id,
  album_track_number: 4,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/labcabin/04Runnin(1).mp3")
)

# #################################################
# #################################################

Track.create!(
  name: "Ready",
  album_id: Album.find_by_title('Ready EP').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/ready/01Ready(1).mp3")
)
Track.create!(
  name: "Prism",
  album_id: Album.find_by_title('Ready EP').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/ready/02Prism(1).mp3")
)
Track.create!(
  name: "Dakou",
  album_id: Album.find_by_title('Ready EP').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/ready/03Dakou(DigitalExclusive)(1).mp3")
)


# #################################################
# #################################################

Track.create!(
  name: "Losing A Whole Year",
  album_id: Album.find_by_title('On Your Side').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/onyourside/01LosingAWholeYear(1).mp3")
)
Track.create!(
  name: "Narcolepsy",
  album_id: Album.find_by_title('On Your Side').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/onyourside/02Narcolepsy(1).mp3")
)
Track.create!(
  name: "Semi-Charmed Life",
  album_id: Album.find_by_title('On Your Side').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/onyourside/03Semi-CharmedLife(1).mp3")
)

# #################################################
# #################################################


Track.create!(
  name: "Flatline",
  album_id: Album.find_by_title('Concealer').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/concealer/1-01Flatline(1).mp3")
)
Track.create!(
  name: "These Days",
  album_id: Album.find_by_title('Concealer').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/concealer/1-02TheseDays(1).mp3")
)
Track.create!(
  name: "Clark",
  album_id: Album.find_by_title('Concealer').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/concealer/1-03Clark(1).mp3")
)
Track.create!(
  name: "Arrow",
  album_id: Album.find_by_title('Concealer').id,
  album_track_number: 4,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/concealer/1-04Arrow(1).mp3")
)

# #################################################
# #################################################

Track.create!(
  name: "No Excuse",
  album_id: Album.find_by_title('After Life After Party').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/afterlifeafterparty/01NoExcuse(1).mp3")
)
Track.create!(
  name: "Feel What",
  album_id: Album.find_by_title('After Life After Party').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/afterlifeafterparty/02FeelWhat(1).mp3")
)
Track.create!(
  name: "Night Tracking",
  album_id: Album.find_by_title('After Life After Party').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/afterlifeafterparty/03NightTracking(1).mp3")
)

# #################################################
# #################################################

Track.create!(
  name: "Drive By Buddy",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/01DriveByBuddy(1).mp3")
)
Track.create!(
  name: "Smiling",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/02Smiling(1).mp3")
)
Track.create!(
  name: "Make You Mine",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/03MakeYouMine(1).mp3")
)
Track.create!(
  name: "Funny",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 4,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/04Funny(1).mp3")
)
Track.create!(
  name: "Dorner Party",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 5,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/05DornerParty(1).mp3")
)
Track.create!(
  name: "Justice After All",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 6,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/06JusticeAfterAll(1).mp3")
)
Track.create!(
  name: "Boys in the Wood",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 7,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/07BoysintheWood(1).mp3")
)
Track.create!(
  name: "Waiting",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 8,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/08Waiting(1).mp3")
)
Track.create!(
  name: "Do the Vibrate",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 9,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/09DotheVibrate(1).mp3")
)
Track.create!(
  name: "I Don't Wanna Go Home",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 10,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/10IDon'tWannaGoHome(1).mp3")
)
Track.create!(
  name: "Dandelion Dust",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 11,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/11DandelionDust(1).mp3")
)
Track.create!(
  name: "Dog Years",
  album_id: Album.find_by_title('Underneath the Rainbow').id,
  album_track_number: 12,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/underneaththerainbow/12DogYears(1).mp3")
)

# #################################################
# #################################################

Track.create!(
  name: "180",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 1,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/180(1).mp3")
)
Track.create!(
  name: "Brick",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 2,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/Brick(1).mp3")
)
Track.create!(
  name: "Down To Ride",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 3,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/DowntoRide(1).mp3")
)
Track.create!(
  name: "Elimination",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 4,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/Elimination(1).mp3")
)
Track.create!(
  name: "Haunted",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 5,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/Haunted(1).mp3")
)
Track.create!(
  name: "Nay",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 6,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/nay(1).mp3")
)
Track.create!(
  name: "Out There",
  album_id: Album.find_by_title('Catastrophe').id,
  album_track_number: 7,
  track_url: File.new("/Users/adrianlobdill/Desktop/fullstackproj/HamcampApp/app/assets/tracks/catastrophe/Oldladiesbefragile(1).mp3")
)

# #################################################
# #################################################
