import compression from 'compression'
import express, { Express, json, Router, urlencoded } from 'express'
import { resolve } from 'path'

export class Server {
  private readonly app: Express

  constructor(
    private readonly port: number,
    private readonly routes: Router,
    private readonly publicPath: string = 'public',
  ) {
    this.app = express()
    this.configurate()
  }

  public setRoutes(router: Router) {
    this.app.use(router)
  }

  private configurate() {
    this.app.use(json())
    this.app.use(urlencoded({ extended: true }))

    this.app.use(compression())

    this.app.use(express.static(resolve(__dirname, '../', this.publicPath)))

    this.app.use(this.routes)
  }

  public start() {
    if (this.routes.stack.length < 1) {
      console.log('Router is not started')
      return
    }

    this.app.listen(this.port, () => console.log(`http://localhost:${this.port}/api/`))
  }
}
