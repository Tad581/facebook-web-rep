class AddParentToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :parent_id, :integer, null: true
  end
end
