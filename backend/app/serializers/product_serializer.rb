class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name,:img,:price
end
