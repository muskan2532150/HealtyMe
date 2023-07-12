class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name,:img,:price,:company,:rating,:description,:category,:totalCount
end
