import Redis from 'ioredis';
import { env } from "node:process";

export class RedisClass {
    private static _instance: RedisClass;
    private _connection!: Redis

    constructor() { /* TODO document why this constructor is empty */ }

    public static get instance(): RedisClass {
        return this._instance || (this._instance = new this());
    }

    public get conection(): Redis {
        return this._connection;
    }

    public connect(): void {
        this._connection = new Redis({
            port: parseInt(env.BROKER_PORT ?? '6379'),
            host: env.BROKER_HOST,
            // username: env.BROKER_USER,
            // password: env.BROKER_PASSWORD,
            db: parseInt(env.BROKER_DATABASE ?? '0')
        });
    }
}