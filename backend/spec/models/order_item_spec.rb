require 'rails_helper'

RSpec.describe OrderItem, type: :model do
  before(:each) do
    @first_orderitem = OrderItem.new(product_name: 'sdd', quantity: 3, price: 32)
  end

  context 'Model validations' do
    it 'is valid with valid attributes' do
      expect(@first_orderitem).to be_valid
    end

    it 'is not valid without a product' do
      @first_orderitem.product_name = nil
      expect(@first_orderitem).to_not be_valid
    end

    it 'is not valid without a price' do
      @first_orderitem.price = nil
      expect(@first_orderitem).to_not be_valid
    end

    it 'is not valid without a quantity' do
      @first_orderitem.quantity = nil
      expect(@first_orderitem).to_not be_valid
    end
  end
end
