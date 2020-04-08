CREATE KEYSPACE IF NOT EXISTS "games"
WITH REPLICATION = {
    'class': 'SimpleStrategy', 'replication_factor': 1
};

USE games;

CREATE TABLE game (
gameid                  int PRIMARY KEY,
description             text,
developer               varchar,
head_url                list<text>,
media_video             list<text>,
name                    varchar,
negative_review_count   int,
positive_review_count   int,
publisher               varchar,
recent_negative_count   int,
recent_positive_count   int,
release_month           varchar,
release_year            int

);
