import { Migration } from '@mikro-orm/migrations';

export class Migration20210428181252 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "stock" rename column "id" to "stock_id";');
  }

}
