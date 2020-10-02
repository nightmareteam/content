# Vapor Games

I built this web application to improve the backend performance of a code base I inherited. The initial benchmarks for the maximum through-out of traffic to this server reached its peak at about 200-300 requests per second before it shut-down.  
	
  
> The web application was designed using service-oriented architecture, with the web application hosted on a proxy server that pulls in other individual components hosted on other server instances. 
  ![Original](https://phonxaydocuments.blob.core.windows.net/phonxayblob/Architecture.png)
  
  
 This project really honed in on my abilites to understand the backend preformances of complicated systems. The ultimate goal for me was to learn how to horizontally scale a service to withstand massive spikes in throughput traffic. 

  
I used Ngninx load balancers to direct the incoming traffic to each of their respectives nodes. I made sure to use a least conection strategy that allowed for Nginx to select the node with the fewest conncections active.
> Before implementing keep_alive connections. Notice the huge spike.
![Spike](https://phonxaydocuments.blob.core.windows.net/phonxayblob/spike.png)
> Introducing keep-alive connections. This reduces the cpu and network overhead needed to open and close connections. Allowing the nodes to continue to run until their connection has been successful
![After](https://phonxaydocuments.blob.core.windows.net/phonxayblob/after.png)


   > Here is the architecture that I implemented to reach my 2500 request per second throughput.
   ![Original](https://phonxaydocuments.blob.core.windows.net/phonxayblob/scaled_architecture.jpg)



Requirements
node 6.13.0
postgres 12.2 community server
Getting Started
Install dependencies

npm install

Set up environment variables

Create a .env file

# Environment Variables ( [] indicates optional )

[NEWRELIC_LICENSE]        # License to activate new relic performance logging
[DB_HOST]                 # Host for Postgres database. Defaults to 'localhost'
DB_USER                   # Postgres username
DB_PASS                   # Postgres password
[PORT]                    # Port for server to listen for requests. Defaults to 3003

Seed database if necessary

Generate CSV file

npm run seed

import to Postgres with psql client

Scripts
npm run seed

Creates a csv file with updates for 10,000,000 games See sample csv file in database/data

npm run start

Starts node.js server

npm run start-dev

Starts node.js server with nodemon. nodemon is not included in dependencies

API Spec
Get Updates by gameId
GET /recent-news/:gameId/updates

Parameters
Params	Type	Description
:gameId	Number	The game's unique id
[page]	Number	Page number (0 indexed, page length is 5)
Response
GameUpdates[]

GameUpdates
Field	Type	Description
posted_by	String	
post_date	Date	
title	String	Title of the post
text	String	Text content of post
img	String	An image url
comment_count	Number	Number of comments on post
