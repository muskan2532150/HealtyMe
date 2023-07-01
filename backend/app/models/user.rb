class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true    
    validates :password, presence: true

    has_one :user_profile, dependent: :destroy
end
