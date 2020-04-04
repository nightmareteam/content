DROP TABLE IF EXISTS games ;

CREATE TABLE games (
gameid                  int,
name                    varchar(50),
description             text, 
head_url                jsonb,
release_date            varchar(70),
developer               varchar(70),
publisher               varchar(70),
negative_review_count   int,
positive_review_count   int,
recent_negative_count   int,
recent_positive_count   int,
media_video             jsonb
);