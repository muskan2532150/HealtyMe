class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true    
    validates :password, presence: true

    has_one :user_profile, dependent: :destroy
    accepts_nested_attributes_for :user_profile
    has_many :orders, dependent: :destroy
end
