class Post < ApplicationRecord
    validates :title, :sub_id, presence: true

    belongs_to :sub,
        foreign_key: :sub_id,
        class_name: :Sub
end
