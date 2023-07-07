class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders, id: :uuid do |t|
      t.integer :total_amount
      t.date :order_date
      t.string :status

      t.timestamps
    end
  end
end
