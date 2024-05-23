import { app } from './app'
import 'dotenv/config'

const port = process.env.PORT || 3000

export const serverConnection = () => {
  const connect = app.listen(port, () => {
    console.log(`server running on port: ${port}`)
  })

  return connect
}

serverConnection()
