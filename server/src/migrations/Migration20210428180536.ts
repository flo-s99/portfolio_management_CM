import { Migration } from '@mikro-orm/migrations';

export class Migration20210428180536 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "stock" ("id" serial primary key, "ticker" text not null, "name" text not null, "date" timestamptz(0) not null, "price" int4 not null);');
  }

}
