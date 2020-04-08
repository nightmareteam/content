CREATE KEYSPACE IF NOT EXISTS "games"
WITH REPLICATION = {
    'class': 'SimpleStrategy', 'replication_factor': 1
};

USE games;

CREATE TABLE game (
gameid                  int PRIMARY KEY,
name                    varchar,
description             text,
head_url                list<text>,
release_year            int,
release_month           varchar,
developer               varchar,
publisher               varchar,
negative_review_count   int,
positive_review_count   int,
recent_negative_count   int,
recent_positive_count   int,
media_video             list<text>
);

