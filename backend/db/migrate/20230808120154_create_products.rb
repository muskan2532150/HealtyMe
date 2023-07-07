class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name
      t.string :img
      t.integer :price

      t.timestamps
    end
  end
end
