# A resource for my graphql notes

## notes

A resource for my graphql understanding

Graphql provides a different way to query servers instead of Restful apis

Graphql is a query language for APIs

it allows you to focus on data and how the data relates with each other

you provide a schema with a type

from docs

```graphql
type Project {
  name: String
  tagline: String
  contributors: [User]
}
```

we can then use queries to ask for what piece of data we want:

```graphql
{
    project(name: "GraphQL") {
        tagline
    }
}

// selecting the tagline field from the target
```

get predictable results

```graphql
{
    "project": {
        "tagline": "A query language fro APIs
    }
}
```

graphql gets rid of different endpoints and replaces them with one single endpoint and is able to query any data on server

with graphql we only need one request

```graphql
{
  film(filmID: 1) {
    title
    producers
  }
}
```

## Over-fecting & under-fetching

Graphql simplifies things by allowing us to get data from backend with one request

2 main problems graphqlo solves:

- underfetching & overfetching

Ecommerce apps & online stores

underfetching means you have to do more work becuase you have to make multiple round trips to get full data

overfetcihing - sending unnecesary data over the network and the frontend needs to filter the data that matters

Graphql asks for all data we need in our query and the graphql uses resolvers to gather all data in query, the server sends back data

we get exactly the data we are looking for

we no longer have to make round trips back and forth

the flixibility of graphql adds compleixty which might not be the best use for small apps

but for big apps it is good to use

## Graphql vs rest

Advantages:

- no under-fetching
- no over-fetching
- schemas and types
- speeds up development in large scale projects

Disadvantages:

- fleixibility adds complexity
- difficult to cache - you would need to include ids within your schema (look at docs for caching)
- not RESTful - its different than fast number of apis that are out there

you can have a mix of rest and graphql in your projects

use graphql-tools.com to make graphql more organized

# every large scale projects with graphql has schemas and resolvers

## resolvers

Graphql determines if a query is valid by looking at our schemas and then executes the query and the function is executed called a resolver

provides a value for that field

what problem do resolvers solve?

when we need to do an api call, database query, instead of using hard coded values we use functions aka resolvers

## parameterized queries

you can add params to your quereis to get back filtered data

```graphql
type Query {
  products: [Product]
  productsByPrice(minPrice: Float!, maxPrice: Float!): [Product]
}
```

## Graphql queries

fetches data

but you can send data to server (CRUD))

Mutations send/update data

Mutations and queries are the main functions of graphql

instead of writing query in graphiql you write mutation
example:

```graphql
mutation {
  addNewProductReview(id: "redhat", rating: 5, comment: "Great!") {
    rating
  }
}
```

## Graphql with Apollo

it is a graphql implmentation with different libraries

it has a server componenet that replaces express

the main 2 components are apollo server and apollo client

appolo client iss a set of frontend librairies that help make graphwl queiries and save data on frontend

it lends you query fronted data similiar to graphiql.

appollo server allows you to create graphql server in node

it can work with express or any other popoular node frameowkr

can deploy to serverless enviroments

can add subscriptiosn to server - subscriptions allow you to push updates from updates to subscribing clients like push notifications

apollo-server-express is the most popular npm package
