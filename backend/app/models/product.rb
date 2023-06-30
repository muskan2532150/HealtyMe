class Product < ApplicationRecord
    validates :name, presence: true
    validates :img, presence: true
    validates :price, presence: true
    validates :category, presence: true
    validates :company, presence: true
    validates :description, presence: true
    validates :rating, presence: true
    validates :totalCount, presence: true
end
