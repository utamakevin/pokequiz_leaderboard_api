const db = require("../db")

class WordWallLeaderboard {
  static findAll() {
    return db.query("select * from wordwallleaderboard order by score desc;").then(res => res.rows)
  }

  static create(username, score) {
    const sql = `insert into wordwallleaderboard (username, score) values ($1, $2) returning *;`

    return db.query(sql, [username, score]).then(res => res.rows[0])
  }

  static update(id, username, score) {
    const sql = `update wordwallleaderboard set username = $2, score = $3 where id = $1 returning *;`

    return db.query(sql, [id, username, score]).then(res => res.rows[0])
  }

  static destroy(id) {
    const sql = `delete from wordwallleaderboard where id = $1;`

    return db.query(sql, [id])
  }
}

module.exports = WordWallLeaderboard
