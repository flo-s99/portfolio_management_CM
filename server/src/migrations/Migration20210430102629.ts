import { Migration } from '@mikro-orm/migrations';

export class Migration20210430102629 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "stock" ("stock_id" serial primary key, "ticker" text not null, "name" text not null, "date" timestamptz(0) not null, "price" int4 not null);');

    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
