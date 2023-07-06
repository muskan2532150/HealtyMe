class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles, id: :uuid do |t|
      t.integer :phone_no
      t.string :address
      t.string :profile_pic

      t.timestamps
    end
  end
end
