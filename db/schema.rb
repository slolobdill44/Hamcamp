# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119181503) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "artist_id",          null: false
    t.string   "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "albums", ["artist_id"], name: "index_albums_on_artist_id", using: :btree
  add_index "albums", ["description"], name: "index_albums_on_description", using: :btree
  add_index "albums", ["title"], name: "index_albums_on_title", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "name",                   null: false
    t.integer  "album_id",               null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "length"
    t.integer  "album_track_number"
    t.string   "track_url_file_name"
    t.string   "track_url_content_type"
    t.integer  "track_url_file_size"
    t.datetime "track_url_updated_at"
  end

  add_index "tracks", ["album_id"], name: "index_tracks_on_album_id", using: :btree
  add_index "tracks", ["name"], name: "index_tracks_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                  null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "primary_color"
    t.string   "secondary_color"
    t.string   "description"
    t.string   "band_name"
    t.string   "header_image_file_name"
    t.string   "header_image_content_type"
    t.integer  "header_image_file_size"
    t.datetime "header_image_updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
