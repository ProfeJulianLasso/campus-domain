/* eslint-disable @typescript-eslint/no-unused-vars */
import { config } from 'dotenv';
import { env, cwd } from 'node:process';
import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { CoreController } from './core.controller';

config({
  path: `${cwd()}/environment/.env.${env.NODE_ENV}`,
});

const listener = (reques: IncomingMessage, response: ServerResponse): void => {
  /* TODO document why this arrow function is empty */
};

createServer(listener).listen(parseInt(env.PORT ?? '9090'), env.HOST, () => {
  CoreController.instance.loadSystem();
  console.log(`Server is running on http://${env.HOST}:${env.PORT}`);
});
