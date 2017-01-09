## Component Hierarchy

* header

  * accountInfo
  * searchBarContainer
    * searchResults

* songPlayerFooterContainer

  * songPlayer

* authContainer

  * **signUp**
  * **logIn**

* **homeContainer**

  * home
    * featuredArtistsContainer
      * featuredArtistsList
        * featuredArtistsListItem

* **artistPageContainer**

  * artistPage
  * artistInfoSidebar

* **albumPageContainer**

  * albumSongPlayer
  * albumInfoSidebar

* **editAlbum**

  * editTrack (includes uploading/downloading tracks)

* **editArtist**



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | authContainer  |
| "/sign-in"  | authContainer  |
| "/home"  | homeContainer  |
| "/artists/:id" | artistPageContainer |
| "/artists/:id/edit"| editArtist  |
| "/albums/:id" | albumPageContainer |
| "/albums/:id/edit"| editAlbum  |
