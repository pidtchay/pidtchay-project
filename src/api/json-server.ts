/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Request, Response } from 'express';

interface IRequestMethaData {
    pattern: string;
    scriptPath: string;
}

const path = require('path');
const pause = require('connect-pause');
const jsonServer = require('json-server');

const routes = require(path.join(__dirname, 'routes.json'));
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middleWare = jsonServer.defaults({ bodyParser: true });
server.use(middleWare);

server.use(pause(1000));

routes.customRoutes.forEach(({ pattern, scriptPath }: IRequestMethaData) => {
    const script = require(path.join(__dirname, `/customRequests${scriptPath}`));

    if (script && script.response) {
        server.all(pattern, (req: Request, res: Response) => {
            script.response(req, res);
        });
    } else {
        console.error('Файл не существует');
    }
});

server.use(jsonServer.rewriter(routes.dbRoutes));

server.use(router);

server.listen(5000, () => {
    console.log('Json Server запущен на порту 5000');
});
