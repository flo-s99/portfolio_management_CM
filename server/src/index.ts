import "reflect-metadata";
import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";


const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();

    const RedisStore = connectRedis(session)
    const redisClient = redis.createClient()
    app.use(
        cors({
        origin: "http://localhost:3000",
        credentials: true,
    }))
    
    app.use(
      session({
          name: "qid",
        store: new RedisStore({ 
            client: redisClient,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true,
            sameSite: "lax", // csrf
            secure: __prod__,// cookies only works in https
        },
        saveUninitialized: false,
        secret: 'dshfbdfbdkhewqqr',
        resave: false,
      })
    );
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ PostResolver, UserResolver ],
            validate: false,
        }),
        // context: ({req, res}) : MyContext => ({ em: orm.em, req, res }),
    });

    apolloServer.applyMiddleware({ 
        app, 
        cors: {origin: "http://localhost:3000"},  
    });

    app.listen(4000,() => {
        console.log('Server ist starting now');
    });
};

main().catch((err) => {
    console.error(err);
});