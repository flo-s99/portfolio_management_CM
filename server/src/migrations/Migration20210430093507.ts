import { Migration } from '@mikro-orm/migrations';

export class Migration20210430093507 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "stock" cascade;');
  }

}
