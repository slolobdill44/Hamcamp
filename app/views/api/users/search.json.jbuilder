json.array!(@users) do |user|
  json.(user, *User.column_names)
end
