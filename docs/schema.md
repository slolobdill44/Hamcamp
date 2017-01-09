# Schema Information

## users

column name     | data type | details
----------------|-----------|-----------------------
| id            | integer   | not null, primary key
| username      | string    | not null, indexed, unique
| password_digest | string  |
| session_token | string    | not null, indexed, unique

## artists

column name     | data type | details
----------------|-----------|-----------------------
| id            | integer   | not null, primary key
| name | string | not null, indexed

## albums

column name     | data type | details
----------------|-----------|-----------------------
| id            | integer   | not null, primary key
| title | string | not null, indexed
| artist_id | integer | not null, indexed, foreign key (references users/artists)
| image_url | string |
| description | string |

## tracks

column name     | data type | details
----------------|-----------|-----------------------
| id            | integer   | not null, primary key
| name | string | not null, indexed
| album_id | integer | not null, indexed, foreign key (references albums)
| length | integer |
| url | string | not null
