import Express from 'express';
import Cors from 'cors';
import Mongoose from 'mongoose';
import routes from './routers/index';
class App {
  public express: Express.Application;
  public constructor() {
    this.express = Express();
    this.middlewares();
    this.database();
    this.routes();
  }
  private middlewares(): void {
    this.express.use(Express.json());
    this.express.use(Cors());
    this.express.use(routes);
  }
  private  database():void {
    const db_uri: string = 'mongodb://catecnologia:ca#2020@ds213079.mlab.com:13079/pasife-db'; 
    Mongoose.connect(db_uri, {
      useNewUrlParser:true,
      useUnifiedTopology: true
    });
  }
  private routes():void {
    this.express.use(routes);
  }
}
export default new App().express;
