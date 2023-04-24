CREATE DATABASE pokequiz;

DROP TABLE IF EXISTS wordWallLeaderboard;
DROP TABLE IF EXISTS triviaLeaderboard;


CREATE TABLE wordWallLeaderboard (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    score INTEGER NOT NULL
);

CREATE TABLE triviaLeaderboard (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    score INTEGER NOT NULL
);
