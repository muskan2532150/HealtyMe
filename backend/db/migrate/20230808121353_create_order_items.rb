class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items,id: :uuid do |t|
      t.string :product_name
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
