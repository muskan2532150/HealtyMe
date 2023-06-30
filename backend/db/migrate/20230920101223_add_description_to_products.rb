class AddDescriptionToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :description, :string
  end
end
