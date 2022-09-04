import { config } from 'dotenv';
import { env, cwd } from 'node:process';
import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { CoreController } from './core.controller';

config({
  path: `${cwd()}/environment/.env.${env.NODE_ENV}`
});

const listener = (_reques: IncomingMessage, _response: ServerResponse): void => {
  /* TODO document why this arrow function is empty */
};

createServer(listener)
.listen(env.PORT, () => {
  CoreController.instance.loadSystem();
  console.log(`Server is running on http://${env.HOST}:${env.PORT}`);
});
