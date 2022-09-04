/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
import { MongoClass } from './database/mongo.class';
import { RedisClass } from './database/redis.class';
import { PostgreClass } from './database/postgre.class';

export class CoreController {
  private static _instance: CoreController;

  private constructor() {}

  public static get instance(): CoreController {
    return this._instance || (this._instance = new this());
  }

  public loadSystem(): void {
    this.initDataBases();
  }

  private initDataBases(): void {
    PostgreClass.instance.connect();
    RedisClass.instance.connect();
    MongoClass.instance.connect();
  }
}
