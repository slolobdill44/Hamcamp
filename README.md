# Hamcamp

![hamcamp-logo](app/assets/images/hamcamp_logo_200px_V2.png)

[Live App][live]

[live]: https://www.hamcamp.dev

Hamcamp is a full-stack web application that was inspired by the desire to bring a Facebook music-sharing group to a wider audience.

This app takes most of its inspiration from [Bandcamp][bandcamp]

[bandcamp]: https://bandcamp.com/

Backend: Ruby on Rails
Database: PostgreSQL
Frontend: React.js with a Redux architecture

# Features & Implementation

## Artist Page

Music is organized in the database by Artists, Albums, and Tracks.

Every user on Hamcamp is a musician, and albums can be created right from a user's profile page. After creating an album, tracks can be uploaded using a track upload form.

Each artist page lists out an artists' `albums`.

## Song Player

Each album page has a song player. Each individual track can be played by clicking on that track's play button.

## Search

The search bar in the header will use an autocomplete feature in order to search for both artists and albums.

## Uploading/Downloading Songs

**uploading:** When adding/editing an album, a button will allow the user to upload individual track files. Those files will be persisted to the database.

**downloading:** Each individual track on an album's page has a link that allows a user to download it.


## Future Directions for the Project

I plan to implement the following features in the future:

### Purchasing Songs

The foundation of Bandcamp lies in the artist being able to set the price for a song. I would like to use some sort of payments API in order to accept payments in exchange for allowing a download of songs and/or albums.

### Follows

I would like to set up a system wherein users are notified when an artist uploads a new track or album. I plan to set up follows through a separate `follows` table. When a followed artist uploads a track or album, all the following users are notified by e-mail.
