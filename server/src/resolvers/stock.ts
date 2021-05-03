import { Stock } from "../entities/Data";
import { MyContext } from "src/types";
import {Resolver, Query, Ctx} from "type-graphql"

@Resolver()
export class StockResolver{
    @Query(() => [Stock])
    posts(@Ctx() {em}: MyContext): Promise<Stock[]>
        {
        return em.find(Stock, {});
    }
}