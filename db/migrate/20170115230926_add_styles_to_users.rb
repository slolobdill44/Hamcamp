class AddStylesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :header_image, :string
    add_column :users, :primary_color, :string
    add_column :users, :secondary_color, :string
    add_column :users, :description, :string
  end
end
