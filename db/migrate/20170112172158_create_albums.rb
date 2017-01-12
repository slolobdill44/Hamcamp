class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :image_url
      t.string :description

      t.timestamps null: false
    end

    add_index :albums, :title
    add_index :albums, :description
    add_index :albums, :artist_id

    add_index :users, :username
  end




end
