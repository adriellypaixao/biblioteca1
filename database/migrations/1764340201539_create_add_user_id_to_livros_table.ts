import { BaseSchema } from '@adonisjs/lucid/schema'
import { table } from 'console';

export default class extends BaseSchema {
  protected tableName = 'livros'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('user_id');
    })
  }
}