class AddTotalCountToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :totalCount, :integer, default:0
  end
end
