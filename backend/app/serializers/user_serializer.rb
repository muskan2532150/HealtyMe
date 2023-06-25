class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_type :user
  attributes :name,:email,:password
  has_many :orders
  has_one :user_profile
end
