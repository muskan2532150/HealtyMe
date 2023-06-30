require 'rails_helper'

RSpec.describe Product, type: :model do
  before(:each) do
    @first_product = Product.new(
      "id": "c7ee18c1-d14a-4473-9bc6-1d39ca2c7501",
      "company": "Nike",
      "name": "ON Protien",
      "description": "100% Whey Protein.",
      "category": "supplements",
      "price": 3049,
      "rating": 4.5,
      "totalCount":117,
      "img": "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
    )
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
