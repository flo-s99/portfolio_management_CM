"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const data_1 = require("./entities/data");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
const StockTicker_1 = require("./entities/StockTicker");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [data_1.Post, User_1.User, StockTicker_1.Stock],
    dbName: 'database',
    user: 'postgres',
    password: 'Stanglmeier99',
    type: 'postgresql',
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map