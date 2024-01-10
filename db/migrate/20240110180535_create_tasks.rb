class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
