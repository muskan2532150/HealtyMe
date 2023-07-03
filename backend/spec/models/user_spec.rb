require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @first_user = User.new(name: 'muskan', email: 'test@gmail.com', password: 'password')
  end

  context 'User model validations' do
    it 'is valid with valid attributes' do
      expect(@first_user).to be_valid
    end

    it 'is not valid without a name' do
      @first_user.name = nil
      expect(@first_user).to_not be_valid
    end

    it 'is not valid without an email address' do
      @first_user.email = nil
      expect(@first_user).to_not be_valid
    end

    it 'is not valid without an password ' do
      @first_user.password = nil
      expect(@first_user).to_not be_valid
    end
  end
end
