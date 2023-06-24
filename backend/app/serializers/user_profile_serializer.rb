class UserProfileSerializer
  include FastJsonapi::ObjectSerializer
  attributes :address, :phone_no, :profile_pic
end
