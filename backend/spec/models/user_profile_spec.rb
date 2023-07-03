require 'rails_helper'

RSpec.describe UserProfile, type: :model do
  before(:each) do
    @first_userprofile = UserProfile.new(address: 'address 1', profile_pic: 'profile_pic 1', phone_no: 123456789)
  end

  context 'UserProfile model validations' do
    it 'is valid with valid attributes' do
      expect(@first_userprofile).to be_valid
    end

    it 'is not valid for phoneno length greater than 9' do
      @first_userprofile.phone_no = 11234567890
      expect(@first_userprofile).to_not be_valid
    end

  end
end
