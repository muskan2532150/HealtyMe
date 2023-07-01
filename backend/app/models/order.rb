class Order < ApplicationRecord
    validates :total_amount, presence: true
    validates :order_date, presence: true
    validates :status, presence: true
    
    belongs_to :user
    has_many :order_items
end
