import express, { Express, json, Router, urlencoded } from "express";

export class Server {
  private readonly app: Express;

  constructor(
    private readonly port: number,
    private readonly routes: Router,
    private readonly publicPath: string = "public",
  ) {
    this.app = express();
    this.configurate();
  }

  public setRoutes(router: Router) {
    this.app.use(router);
  }

  private configurate() {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));

    this.app.use(express.static(this.publicPath));

    this.app.use(this.routes);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
