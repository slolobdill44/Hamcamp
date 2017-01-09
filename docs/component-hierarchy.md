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
| Path  | Component  |
| "/sign-up" | authContainer  |
| "/sign-in"  | authContainer  |
| "/home"  | homeContainer  |
| "/artist/:id" | artistPageContainer |
| "/artist/:id/edit"| editArtist  |
| "/album/:id" | albumPageContainer |
| "/album/:id/edit"| editAlbum  |
