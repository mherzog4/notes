# Unit Testing Principles, Practices, and Patterns

## Chapter 1: The goal of unit testing

### 1.1. The current state of unit testing

Most programmers practice unit testing and understand its importance. 

There’s no longer any dispute as to whether you should do it. 

Unless you’re working on a throwaway project, the answer is, yes, you do.

When it comes to enterprise application development, almost every project includes at least some unit tests. A significant percentage of such projects go far beyond that: they achieve good code coverage with lots and lots of unit and integration tests. The ratio between the production code and the test code could be anywhere between 1:1 and 1:3 (for each line of production code, there are one to three lines of test code). Sometimes, this ratio goes much higher than that, to a whopping 1:10.

What is an enterprise application?

An enterprise application is an application that aims at automating or assisting an organization’s inner processes. It can take many forms, but usually the characteristics of an enterprise software are

High business logic complexity
Long project lifespan
Moderate amounts of data
Low or moderate performance requirements

### 1.2. The goal of unit testing

It’s often said that unit testing practices lead to a better design. And it’s true: the necessity to write unit tests for a code base normally leads to a better design. But that’s not the main goal of unit testing; it’s merely a pleasant side effect.

#### The relationship between unit testing and code design

If you find that code is hard to unit test, it’s a strong sign that the code needs improvement. The poor quality usually manifests itself in tight coupling, which means different pieces of production code are not decoupled from each other enough, and it’s hard to test them separately.

What is the goal of unit testing, then? The goal is to enable sustainable growth of the software project. The term sustainable is key. It’s quite easy to grow a project, especially when you start from scratch. It’s much harder to sustain this growth over time.



## Chapter 2: What is a unit test

## Chapter 3: The anatomy of a unit test

## Chapter 4: The 4 pillars of a good units test

## Chapter 5: Mocks and test fragility

## Chapter 6: styles of unit testing

## Chapter 7: refactoring toward valuable unit tests

## Chapter 8: Why integration testing

## Chapter 9:Mocking best practices

## Chapter 10: Testing the database

## Chapter 11: Unit testing anti-patterns

