# Schema Information

## users

column name     | data type | details
----------------|-----------|-----------------------
| id            | integer   | not null, primary key
| username | string | not null, indexed, unique
| password_digest | string |
| session_token | string | not null, indexed, unique

## artists

column name     | data type | details
----------------|-----------|-----------------------

- id
- name

## albums

column name     | data type | details
----------------|-----------|-----------------------

- id
- title
- artist_id
- image_url
- description

## tracks

column name     | data type | details
----------------|-----------|-----------------------

- id
- name
- album_id
- length
- url
