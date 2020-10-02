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



