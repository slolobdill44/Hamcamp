== Hamcamps

Hamcamps is a single-page clone of Bandcamp, a popular music sharing/purchasing platform.

[Heroku Link][heroku]

[Trello Link][trello]

[Bandcamp][bandcamp]

[heroku]: https://heroku.com/
[trello]: https://trello.com/b/0b04qV3h/quality-meat
[bandcamp]: https://bandcamp.com/

## Minimum Viable Product

### Checklist

1. New account creation, login, and guest/demo login
2. Production README
3. Hosting on Heroku
4. Artist Page
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

5. Song Player
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

6. Search
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

7. Upload/Download Songs
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Setup backend and user authorization (2 days)

**Objective 1:** Have a functioning Rails project with strong front-end authentication
**Objective 2:** Seed database properly

### Phase 2: Artist Page architecture (3 days)

**Objective 1:** Have a functioning artist page
**Objective 2:** Style the artist page
**Objective 3:** Set up routes to be able to render different artist pages

### Phase 3: Search (2 days)

**Objective 1:** Set up search bar in artist page
**Objective 2:** Have search bar autocomplete
**Objective 3:** Clicking desired search brings up proper artist page
**Objective 4:** Be able to navigate search using only arrow keys and <Enter> key

### Phase 4: Upload/Download songs (2 days)

**Objective 1:** Songs can be downloaded through <Download> link next to individual tracks
**Objective 2:** Songs can be uploaded through a button that goes to an <Album Edit/Upload> form

## Bonus Features

1. Purchase songs
2. Follows
