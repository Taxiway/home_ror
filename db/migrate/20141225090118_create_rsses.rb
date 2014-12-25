class CreateRsses < ActiveRecord::Migration
  def change
    create_table :rsses do |t|

      t.timestamps
    end
  end
end
