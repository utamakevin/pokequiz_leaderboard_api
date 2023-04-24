require("dotenv").config()

// let missing = ["PORT", "DATABASE_URL"].filter(
//   key => process.env[key] === undefined
// )

// if (missing.length > 0) {
//   throw Error(`missing environment variables for ${missing.join(", ")}`)
// }

const deployment = {
  prod: {
    connectionString:
      "postgres://pokequiz_user:hq0k9ErHGq2gL1fbbRi1sWBiWQTSwbmX@dpg-ch2uevt269v61ffhh5dg-a.singapore-postgres.render.com/pokequiz",
  },
  dev: {
    connectionString: process.env.DATABASE_URL,
  },
}
let link
if (!process.env.DATABASE_URL) {
  link = deployment.prod
} else {
  link = deployment.dev
}

module.exports = {
  port: process.env.PORT,
  db: link,
}
