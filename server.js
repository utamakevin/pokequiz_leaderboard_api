const express = require("express")
const app = express()

const methodOverride = require("./middlewares/method_override")

const config = require("./config")
const WordWallLeaderboard = require("./models/wordWallLeaderboard")
const { db } = require("./config")

app.use(express.static("public"))
app.use(express.json())

app.get("/api/pokequiz/wordWallLeaderboard", (req, res, next) => {
  WordWallLeaderboard.findAll()
    .then(leaderboard => res.json(leaderboard))
    .catch(next)
})

app.post("/api/pokequiz/wordWallLeaderboard", (req, res, next) => {
  WordWallLeaderboard.create(req.body.username, req.body.score)
    .then(record => res.json(record))
    .then(res => console.log(req.body))
    .catch(next)
})

app.put("api/pokequiz/wordWallLeaderboard/:id", (req, res, next) => {
  WordWallLeaderboard.update(req.params.id, req.body.username, req.body.score)
    .then(record => res.json(record))
    .catch(next)
})

app.delete("/api/pokequiz/wordWallLeaderboard/:id", (req, res, next) => {
  const { id } = req.params.id

  WordWallLeaderboard.destroy(id).catch(next)
})

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})
