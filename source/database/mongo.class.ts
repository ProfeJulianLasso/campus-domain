/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
import { env } from 'node:process';

export class MongoClass {
  private static _instance: MongoClass;
  private _mongoose: typeof mongoose;

  private constructor() {
    this._mongoose = mongoose;
  }

  public static get instance(): MongoClass {
    return this._instance || (this._instance = new this());
  }

  public get mongoose(): typeof mongoose {
    return this._mongoose;
  }

  public connect(): void {
    this._mongoose
      .connect(
        `mongodb://${env.NOSQL_HOST}:${env.NOSQL_PORT}/${env.NOSQL_DATABASE}`,
      )
      .then(
        () => {
          console.log('MongoDB Connected');
        },
        (err) => {
          console.log(err);
        },
      );
  }
}
