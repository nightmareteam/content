
CREATE TABLE games (
gameid                      int,
name                    varchar(50),
description             varchar(140),
url                     varchar(1100),
developer               varchar(25),
publisher               varchar(25),
negative_review_count   int,
positive_review_count   int,
recent_negative_count   int,
recent_positive_count   int,
media_video             text[],
)