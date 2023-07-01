class UserProfile < ApplicationRecord
    validates :phone_no, length:{maximum:9}

    belongs_to :user 
end
