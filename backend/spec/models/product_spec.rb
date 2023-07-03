require 'rails_helper'

RSpec.describe Product, type: :model do
  before(:each) do
    @first_product = Product.new(name: 'Product1', img: "first_project", price:444)
  end

  context 'Product model validations' do
    it 'is valid with valid attributes' do
      expect(@first_product).to be_valid
    end

    it 'is not valid without a name' do
      @first_product.name = nil
      expect(@first_product).to_not be_valid
    end

    it 'is not valid without a price' do
      @first_product.price = nil
      expect(@first_product).to_not be_valid
    end

    it 'is not valid without a img' do
      @first_product.img = nil
      expect(@first_product).to_not be_valid
    end
  end
end
