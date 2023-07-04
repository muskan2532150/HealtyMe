require 'rails_helper'

RSpec.describe Order, type: :model do
  before(:each) do
    @first_order = Order.new(total_amount:1234 , order_date: 24-09-2023, status:"pending")
  end

  context 'Order model validations' do
    it 'is valid with valid attributes' do
      expect(@first_order).to be_valid
    end

    it 'is not valid without a total_amount' do
      @first_order.total_amount = nil
      expect(@first_order).to_not be_valid
    end

    it 'is not valid without a status' do
      @first_order.status = nil
      expect(@first_order).to_not be_valid
    end

    it 'is not valid without a order_date' do
      @first_order.order_date = nil
      expect(@first_order).to_not be_valid
    end
  end
end
