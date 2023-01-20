# Chapter 1: Reliable, scalable, and maintainable applications

The big ideas behind reliable, scalable, & maintable systems

reliability
 - Tolerating hardware & software faults
 - Human error

Scalability 
 - Measuring load & performance
 - latency percentiles, thoughputs

Maintainability
 - Operability
 - Simplicity & evolvability

Many applications today are data-intensive, as opposed to compute-intensive

raw CPU power is rarely a limiting factor for these applications-bigger porblems are usually the amount of data, the complexity of data and the speed at which it is changing

a data intesive application is typically built from standard building blocks that provide commonly needed functionality

for example, many applications need to:

- store data so that they or another application can find it again later (databases)

- remember the result of an expensive operation, to speed up reads

- allow users to search data by keyword or filter it in various ways (search indexes)

- periodically crunch a large amount of accumulated data (batch processing)

if that sounds obvious, thats because these data systems are such a successful abstaction: we use them all the time without thinking too much


There are many database systems with different characteristics, because different applications have different requirements

there are various approaches to caching, several ways of building search indexes and so on

when building an application we need to figure out which tools and which approaches are the most appropriate for the task at hand

## Thinking about data systems

We typically think of databases, queues, caches, etc as being very different categories of tools

although a database and a message queue have some superficial similarity-both store data for some time- they have very different access patterns, which means different performance characteristics which means very different implementations

so why should we lump them all together under an umbrella term like 'data systems'?

many tools for data storage and proessing have emerged in recent years and they no longer neatly fit into traditional categories

for example, there are datastores that are also used as message queues(redis) and there are message queues with database-like durability gurantees(Apache Kafka)

the boundaries between the categories are becoming blurred

Secondly, many applciations now have such demanding or wide-raning requirements that a single tool can no longer meet all of its data processing storage needs

instead the work is broken down into tasks that can be performed efficiently on a single too and those differet tools are stichted together using application code

If you are desinging a data system or service, a lot of trick questions arise

how do you ensure that the data remains correct and complete, even when things go wrong internally?

how do you provide consitently good performance to clients, even when parts of your system are degraded?

How do you scale to handle an increase in load?

What does a good API for the service look like?

we focus on three concerns that are important in most software systems

Reliability

The system should conitue to work correctly ( perfoming the correct function at the desied level of performance) even in the face of adversity(hardware or sofware faults and even human error)

Scalability

as the system grows(in data volume, traffic volume, complexity) there should be reasonable ways of dealing with that growth

maintainability

ove time many differnt people will work on the ststem (engineering, operations both maintaining current behavior and adapting the stem to new use cases) and they should all be able to work on it productively


## Reliability 

Typical expectations include:

- the application performs the function that the user expected

- it can tolerate the user making mistakes or using the software in unexpected ways

- its performance is good enough for the requried use case, under the expected load and data volume

- the system prevents any unauthroized access and abuse

the things that can go wrong are called faults and systems that anticipate faults and can cope with them are called fault-tolerant or resilient


Note that a fault is not the same as a failure

a fault is usually defined as one component of the system deviating from its spec, whereas a failure is when the system as a whole stops providing the required service to the user

it is impossilbe to reduce the probability of a fault to zero; therefore it is usually best to design dault-tolerance mechanisms that prevent faults from causing failures

counterintuitively, in such a fault-tolerant systems, it can make sense to increase the reate of daults by triggering them deliverately

for example by randomly killing individual processes without warning

many critical bugs are actually due to poort error handling

by deliberately inducing faults, you ensure that the fault-tolereance machinery is continually exercies and tested, which can increase your condifence that faults will be handled correctly when they occur naturualy 

Although we generally prefer tolerating faults over preventing faults, there are cases where prevention is better than cure - this is the case with security matters

### Hardware faults

When we think of causes of system failure, hardware faults quickly come to mind

hard disk crash, RAM become sfault, the powergrid has a blackout, someone unplugs the wrong netwrok cable

anyone who has worked with large datacenters can tell you that these things happen all the time when you have a lot of machines

Our first response is usually to add redundnacy to the indivdual hardware compoentns in order to reduce the failure rate of the system

when on component dies, the redundant component can take its place while the broken component is replaced

this approach cannot completely prevent hardware problems from causing failures but it siwell understand and can often keep a mchine running uninterrupted for years    

However as dat volumes and applications computing demands have increased more applications have begun using larger numbers of machines, which propotianlty increase the reate of hardware faults

moreover, in some cloud platfroms such as as AWS it is fairly common for virtual machine instances to become unabaiable without warning as the platforms are designed to prioritze flexibility and elasticity over single machine reliability

hence there is a move toward systems that can tolerate the loss of entire machines by using software fault-tolerance technqiues in preference or in addition to hardware redundnacy

such systems also have operational advantages: a single server system requires planned downtine if you need to reboot the machine ( to apply operating system security patches) whereas a system that can tolerate machine failure can be patched one node at a time wihtout downtime of the entire system

### Software errors

Another class of faultis a systematic error within the system

such faults are harder to anticipate, and because they are correlated across nodes, they tend to cause many more system faulures than uncorrelated hardware faults

examples include

- a software bug that causes every instance of an application server to crash when given a particualr bad in put

- a runaway process that uses some shared resource - CPU time, memeoyr, disk space, or network bandwidth

- a service that the system depends on that slows down, becomes unrespovsive or start returning corrupted respnses

- cascading failures, where a small fault in one component triggers a fault in another component, which in turn triggers further faults

there is is no quck solution to the problem of system faults in software

lots of small things cna help: carefully thinking about assumptions & iteractions in the system, thorough testing, process isolation, allowing porcesses to crash and restart, measuring, monorting, and analyzing system behavior in production

### Human Errors

How do we make our systems reliable, in spite of unreliable humans? the best systems combine several approaches

- Design systems in a way that minimizes opportunities for error. for example well-designed abstractions, APIs, and admin interfaces make it easy to do "the right thing" and discourage "the wrong thing" However, if the interfaces are too restrictve people will work around them, negating their benefitis, so this is a tricky balance to get right

- Decouple the pace where people make the most mistakes from the place where they can cause failures. in particular, provide fully featured non-production sandbox enviroments where poel can explore and expirement safely, using real data without affecting real usres

- test thoroughly at all levels, from unit tests to whole-system integratio tests and manual tests. automated testing is widely used, well understod and especially valuabe for covering corner cases that rarely arise in normal operation

- Allow quick and easy recovery from human erros to mini ize the impact int ehcase of a fualure. for exampl,e make it fast to roll back configuration changes, roll out new code gradually and provide tools to recompute data

- set up detailed and clear monitoring, such as performance metrics and error rates. in other engineering disciplines this is refered to as telemetry. momitoring can hsow us early warning signals and allow us to check whterht any assumptions or constrains are being violated. when a problem occurs metrics can be invaluable in diagnosing the issue

- implment good management pracitces and training

### How important is reliability

Reliability is not just for nuclear power stations and air traffic control software

more mundane applications are also expceted to work reliably

## Scalability

One common reason for degradation is increased load: perhaps the system has grwon from 10,000 concurrent users to 100,000 concurrent users or from 1 million to 10 million

perhaps it is processing much alrger volumes of data than it did before

scalability is the term we use to describe a system's ability to cope with increase load

when discussing scalability, it means cosidering the questions like "if the system grows in a partiuclar way, what are our options for coping with the growth?" and " how can we add computing resources to handle the addiotnal load"

### Describing load

First we need to describe the current load on the system;only then can we discuss growth questions 

load can be described with a few numbers which we call load parameters

the best choice of parameters depends on the architecutre of your system: it may be reqeusts per seond to a web server, the ratio of reads to writes in a database, the number of simultaneously acitve users in a chat room, the hit rate on a chace or something else

perhaps the average cases is what matters for you or perhaps your bottle nexxt is dominted by a small number of extreme cases

### Describing performance

Once you have described the load on you system, you can investigate what happens when the load increase - you can look at it in two ways

- when you increase a load parameter and keep the system resoources (CPU, memory, netowkr bandwidht, etc) unchanged, how is the performance of yur system affected

- when you increase a load parameter, how much do oyu need to increase the resource if you want to keep performance unchanged?

In a bathc processing system such as Hadoop, we usually care abouth throughput-the number of reacords we can proces sper second or the total time it tkaes to runa  job on a dataset of a certain size

in online systems, whats usually more important is the services respons etime - that is the time between a client sending a request and receiving a response

in practice, in a system handling a variety of requests, the response time can vary a lot - we therefore need to think of response time not as a single number, but as a distribution of values that you can measure with

The mean is not a very good metric if you want to know your "typical" response time, because it doesnt tell you how many users actually expereienced that delay

usually it is better to use percintiles.

if you take your list of response times and sort it from fastest to slowest, then the median is the halfway point

for exmample, if your median response time is 200 ms, that means half your requests return in less than 200 ms and half your requests take longer than that.

this makes the median a good metric if you want to know long users typically have to waitL half of user requests are served in less than the median response time, and the other half take longer than the median

in order to figure out how bad your outliers are, you can look at higher percentiles: the 95th, 99th, ad the 99.99 pertcintiles

they are the response time thresholds at which 95, 99, and 99.99 of requests are faster than that particualr threshold

high percintiles of response times also know as tail latencies, are important becuase they directly affect users' experience of the service

percintiles are often used in service level objects and service level agreements, contracts that define the expected performance anda availability of a service

an SLA may state that the service is considered to be up if it has a response time of less than 200 ms and a 99th percintile under 1 second, and the service may be requried to be up at least 99% of the time

these metrics set expectioans for lcients of the service and allow custoemrs to demand a refund if the SLA is not met

it only takes a small number of slow requests to hold up the process of subsequent requests-an effect sometimes know as head-of-line blocking

even if those subsequent requesr are fast to process on the server, the lcient will see a slow overall response time due to the time waiting for the prior request to complete

due to this effect it is importnt to measure response times on the client side

When gnerating load artifically in order to test the scalability of a system, the load generating client needs to keep sending requests independnlty of the reponse time

if the client waits for the previous requests to complee before sending the next one, that behavior has the ffect of artificiallt keeping the queues short in the test than they would be in reality, which skews the measurements

### Appraoches for coping with load

Now that we have discussed the parementers for describing load and metrics for measuring performance, we can start discussing scalability: how do we maintain good performance even when our load param increase by some amount   

an architecutre that is appropriate for one level of load is unlikely to cope with 10 times that load

if you are working on a fast gowing service, it is therefore likely that you will need to rethink your architecture on every order of magnitued load increase

people often talk about the dichtomy between scaling up ( vertical scaling, moving to a more poerful machine)

and scaling out(horizinally scaling, dstributing the load across multiple smaller machines)

distributing load across multiple machines is also known as a shared-nothing-architecture

a system that can run on a single machine is often simpler, but high-end mahcines can become very expensive, so very intesnive workloads often cant avoid scaling out

in reality, good architectures usually invovle a pragmtic mixture of approachs: for exmaple, usinging several fairly powerful machines can still be simpler and cheaper than alarge number of small virtual mcahines

some systems are elastic, menaing they can automatically add computer resources when they detect a load increase, whereas other systems are scaled manually ( a human anaylzes the capcacity adn decides to add more machines to the system)

an elastic system can be useful if load is high unpredictable, but manually scaled systems are simpler and may have few operational suprises    

Common wisdom was to keep your database on a single node (scale up) until scaling costs or high availability requirements forced you to make it distributed

An architecure that scales well for a particualr application is built aoround assumptiosn of which operations will be common and which will be rare

if those assumptions turn out to be wrong, the engineering effort for scaling is at best wasted and at worst counterproductive

in an early stage startup or unproven product features , its usually more important to iterate quickly than it is to scale so some hypothetical future load

even though they are specific to a partiuclar application, scalable architecutes are nevertheless usually built from general-purpose building blocks, arranged in familiar patterns

## Maintainability

We can and shoul design software in such a way that ti woll hopefully minimize pain during maintenance and thus avoud creating legacy software outselves

to do this end, we will pay attention to three design principlpes for software systems

operability
    - make it easy for operations teams to keep the system running smoothyl

simplicity
    - make it easy for new engineers to understand the system, by removing as much complexity as possible from the system ( this is note the same as simpocity of the user interface)

Evolvability
    - make it easy for engineers to make changes to the system in the future, adapting it for unanticipated uses cases as requirements change. also know as enttensibilty, modifiabilty, or plasticity

there are no easy solution for achieiving these goals

### Operability: Making life easy for operations

Good operability means making routine tasks easy, allowing the operations team to focus their efforts on high-value activies

data systems can do various things to make routine takes easy including

- providing visibility into runtime behavior and internals of the system with good monitoring

- providing good support for automation and integration with standa tools

- avoiding dependncy on individual machines (allowing machines to be taken down for maintenance while the system as a whole continues running uninterupted)

- providng good documentation and an easy-to-understand operational model (id i do x, Y will happen)

- providing good default behavior, but also giving adminstrators teh freedom to overreid defaults when needed

- self healing where appropritate but also giving administatos manual control over the system state when needed

- exhibitin predicitbale behavior, minimizing surpisees

### Simplicity: Managing complexity 

there are various possible sysmptoms of complexity: explosion fof the state space, tight coupling of modules, tangled depencneis, inconsistent naming and terminoly, hacks aimed at solving performance problems, special casing to work aroudn issues,and many more

making a system simpler does not mean reducing its functioanlity; it can also mean removing accidental complextiy

One of thebest tools for removing accidental complexity is abstraction

a good abstraction can hide a great deal of implemenation detail behind a clena, simple-to-understand facade

a good abstaction can also be used for a wide range of different appliations

not only is this resue more ffecient than reimplemeneting a similar thing mutliple times, but it also leads to a high-quality software as quality imporves in the abstracted componenet benefit all aplications that use it

### Evolvability: Making change easy

In terms of organizational processes, Agile working patterns provide a grameowkr for adapting to change

the agile community has also developed technical tools and patterns that are helpful when developer software in a frequently changing enviroment, such as test-drive-developement and refactoring

the ease with which you can modify a data system and adapt it to changing requirements is closely linked to its simplicty and its abstractsions: simple and easy to understand systems are usually easier to modify than complex ones

## Summary

Reliability means making systems work correctly, even when faults occur.

fualts can be in hardware (typicaly random and uncorrelated) software (bugs are typically systemic and hard to deal with), and humans( who make mistakes). fault tolerance techniques can hide certain types of faults form the end user

Scalability means having strategies for keeping performance good, even when load increases

in order to discuss scalability, we first need ways of describing load and performance quantitatively

in a scalable system you can add processing capacity in order to reamina reliable unde high load

Maintainability has many facets, but in essences its about mkaing lide btter for the engieering and operaitions teams that need to work with the system

good abstractiosn can help reduce complexity and make the systme easier to modify and adpt for new uses cases

good operability means having good visibility inot the systems health and having effective ways of manaing it

# Chapter 2: Data Models and Query Languages

Most applications are built by layering one data model on top of another

for each layer the key question is: GHow is it represented in terms of the next-lower layer?

for example:

1. as an application developer, you look at the real world and model it in terms of objects or data structures and APIs that manipulate those data structures. those structures are often specific to your application

2. when you want to store those data structures, you express them in terms of a general-purpose data model such as JSON or XML documents, tables in a relational database or a graph Model

3. the engineers who built your databse software decided on a way of representing that JSX/CML/relational/graph data  in tems of bytes in memory, on disk, or on a network

the representation may allow the data to be queried, searched, mainupilated and processed in various ways

4. on yet lower leverls, hardware engineers have figured out how to represent bytes in terms of electrical currents, pulses of light, magenetic fields and more

in a complex application there may be more intermediary levels, such as APIs built upon APIs but the basic idea is still the same: each layer hides in the complexity of the layers belwo it by providing a clean data model

## Relational Model vs Doucment Model

Thebest known data mdeol today is probably SQL, based on the therelational model

Data is organized into relations (called tables in SQL) where each relation is an unordered collection of tuples (rows in SQL)

The roots of relational databses lie in business data processessing

Much of what you see on the web today is still pwered by telational databses

### The birth of NoSQl

there are several driving forces behind the adoption of NoSQL databses, including:

- a need for greated scalability than relational datbases can easily achieve, including very large datasets or very high write throughput

- a widespread preference for free nad open source software over commercial databse products

- specialied query operations that are not well supported by the relational model

- frustrations with the restrictiveness of relational schema, abd a desrire for a more dynamic and expressi data model

### The object-relational mismatch

Object-relational mapping (ORM) frameworks like ActiveRecord reduce the amount of boilerplate code required for this translation layer, but they cant completely hide the differences between the two models

### Many to one and many to many relationships

The advnatage of using an ID is that because it has no meaning to humans, it never needs to change: The ID can remain the same ven if the information it iednetieis changes

anything that is meanigful to humans may need to change sometime in the future-and if that ifromation is duplicatied, all the redundant copesi need to be updated

that incurs write overheads and risk inconsistencies

removing such duplication is the key idea behind normalization in databses

In relational databses, its normal to refer to tows in other tables by ID because joins are easy

in document databses joins are not needed for one to many tree strcutuesa and support for joins is often weak

### Are document databases repeating history?