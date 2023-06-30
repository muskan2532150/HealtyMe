class AddRatingToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :rating, :decimal,precision: 2, default: 0
  end
end
