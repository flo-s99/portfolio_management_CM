import { __prod__ } from "./constants";
import { Post } from "./entities/data";
import {MikroORM} from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";
import { Stock } from "./entities/StockTicker";

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post, User, Stock],
    dbName: 'database',
    user: 'postgres',
    password: 'Stanglmeier99',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
