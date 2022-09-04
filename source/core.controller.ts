/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-empty-function */
import { PostgreClass } from './database/postgre.class';
import { RedisClass } from './database/redis.class';

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
  }
}
