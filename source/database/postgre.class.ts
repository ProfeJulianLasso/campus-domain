import { env } from "node:process";
import { DataSource } from "typeorm";

export class PostgreClass {
    private static _instance: PostgreClass;
    private readonly _dataSource: DataSource;

    private constructor() {
        this._dataSource = new DataSource({
            type: 'postgres',
            host: env.DB_HOST,
            port: parseInt(env.DB_PORT ?? '5432'),
            username: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_DATABASE,
            entities: []
        });
    }

    public static get instance(): PostgreClass {
        return this._instance || (this._instance = new this());
    }

    public get dataSource(): DataSource {
        return this._dataSource;
    }

    public async connect(): Promise<void> {
        await this.dataSource.initialize()
            .then(() => {
                console.log('Data Source (RDB) has been initialized!')
            })
            .catch((err) => {
                console.error("Error during Data Source (RDB) initialization", err)
            });
    }
}