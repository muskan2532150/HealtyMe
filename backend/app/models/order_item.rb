class OrderItem < ApplicationRecord
    validates :product_name, presence: true
    validates :quantity, presence: true
    validates :price, presence: true

    belongs_to :order
end
