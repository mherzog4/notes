# How to graphql notes

## Intro

At its core, GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API. Instead of multiple endpoints that return fixed data structures, a GraphQL server only exposes a single endpoint and responds with precisely the data a client asked for.

 GraphQL is a query language for APIs - not databases. In that sense it’s database agnostic and effectively can be used in any context where an API is used.

 the API landscape has radically changed over the last couple of years. In particular, there are three factors that have been challenging the way APIs are designed:

1. Increased mobile usage creates need for efficient data loading
Increased mobile usage, low-powered devices and sloppy networks were the initial reasons why Facebook developed GraphQL. GraphQL minimizes the amount of data that needs to be transferred over the network and thus majorly improves applications operating under these conditions.

2. Variety of different frontend frameworks and platforms
The heterogeneous landscape of frontend frameworks and platforms that run client applications makes it difficult to build and maintain one API that would fit the requirements of all. With GraphQL, each client can access precisely the data it needs.

3. Fast development & expectation for rapid feature development
Continuous deployment has become a standard for many companies, rapid iterations and frequent product updates are indispensable. With REST APIs, the way data is exposed by the server often needs to be modified to account for specific requirements and design changes on the client-side. This hinders fast development practices and product iterations.


## GraphQL is the better REST

REST APIs have shown to be too inflexible to keep up with the rapidly changing requirements of the clients that access them.

GraphQL was developed to cope with the need for more flexibility and efficiency! 

### No more Over- and Underfetching

One of the most common problems with REST is that of over- and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

#### Overfetching: Downloading superfluous data

Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.

#### Underfetching and the n+1 problem

Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.

As an example, consider the same app would also need to display the last three followers per user. The API provides the additional endpoint /users/<user-id>/followers. In order to be able to display the required information, the app will have to make one request to the /users endpoint and then hit the /users/<user-id>/followers endpoint for each user.

### Insightful Analytics on the Backend

GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more.

With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.

### Benefits of a Schema & Type System

GraphQL uses a strong type system to define the capabilities of an API. All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server to define how a client can access the data.

Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network.

Frontend teams can easily test their applications by mocking the required data structures. Once the server is ready, the switch can be flipped for the client apps to load the data from the actual API.



## Core Concepts

## Big Picture (Architecure)

## Clients

## Server

## More GraphQL Concepts

## Tooling and Ecosystem

## Security

## Common Questions

