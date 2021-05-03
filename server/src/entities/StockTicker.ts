import {
    Entity,
    PrimaryKey,
    Property
  } from "@mikro-orm/core"
  import { Field, Int, ObjectType } from "type-graphql";

  @ObjectType()
  @Entity()
  export class Stock {
    @Field(() => Int)
    @PrimaryKey()
    stock_id!: number;
  
    @Field()
    @Property({type: 'text'})
    ticker!: string;
  
    @Field()
    @Property({type: 'text'})
    name!: string;
  
    @Field(() => String)
    @Property({type: 'date'})
    date!: string;
  
    @Field(() => Number)
    @Property({ type: 'number'})
    price!: number;
  }