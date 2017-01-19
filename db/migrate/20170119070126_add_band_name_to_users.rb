class AddBandNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :band_name, :string
  end
end
