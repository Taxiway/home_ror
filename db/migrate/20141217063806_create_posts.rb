class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content
      t.text :pre
      t.date :date

      t.timestamps
    end
  end
end
