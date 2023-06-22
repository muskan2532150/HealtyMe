class AddUserToUserProfile < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_profiles, :user, foreign_key: true, null: false, type: :uuid
  end
end
