# @guests.map do |guest,idx|
#     json.array! guest.id do
#         json.name guest.name
#         json.age guest.age
#         json.favorite_color guest.favorite_color
#     end
# end
json.array! @guests, :name, :age, :favorite_color