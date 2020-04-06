CREATE KEYSPACE "games"
WITH REPLICATION = {
    'class': 'Simple Strategy', 'replication_factor': 1
};

CREATE TABLE games.game (
gameid                  int PRIMARY KEY,
name                    varchar,
description             text,
head_url                list<varchar>
release_date            varchar,
developer               varchar,
publisher               varchar,
negative_review_count   int,
positive_review_count   int,
recent_negative_count   int,
recent_positive_count   int,
media_video             list<frozen <set<varchar>>
);

