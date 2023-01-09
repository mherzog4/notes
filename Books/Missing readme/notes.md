# Chapter 1: The Journey ahead

This book consolidates key information that you need to be successful

but what does a successful software engineer look like and how do you get there?

## Your destination

Everyone begins as a entry-level engineer - to advance youll need to be compotent in several core areas

### Technical Knowledge

You know computer science fundamentals

you know how to use integrated development envuroments, build systems, debuggers, and test frameworks

you proactively create and improve test code

you consider operations when making architectural decisions

### Execution

You create value by solving problems with code, and you understand the connection between your work and the busienss

you've build and deployed small and medium size features

you write, test, and review code

you are proactive and dependable - you particicpate in technical talks, reading groups, interviews and presentations

### Communication

You communicate clearly both in written and verbal form

you are able to give and receive feedback effectively

You proactively ask for help and get clarification in ambigious situations

you raise sissues and identify probelsm in a constructive manner

you provide help when possible and are starting to influence peers

you document you work

you write clear design documents and invite feedback

you are patient and empathetic when dealing with others

### Leadership

You work independtly on well-scoped work

you learn from mistakes quickly

you handle change and ambiguity well

you actively participate in project and quartely planning

you help new team members onboard

you give meaningful feedback to you manager

## A map for your journey

Get familiar with the company, the team and how things get done

attend onboarding meetins, set up your development environment and system access and figure out regular team processes and meetings

read documentation and have discussions with teammates

contribute by filling in documentation gaps you find in the onboarding processes

if you company doesnt have a new hire program, ask your manager to explain the org chart, the different deparments and how they relate & take notes

Some companies have additional new software engineer onboarding processes ot help you get access to systems and set up your development environment and check otu and build code - if no such process exists, you have an opportunity to create one

You should get assigned a small taks to learn the basics of makign a code change and shepherding it inot production

if not, look or ask for some useful-but-minor change to make

it can be as small as updating a comment; the goal is to understand the steps, not to impress

set up your code editor or IDE - use the IDE that your team uses & configure your IDE to apply team code formatting conventions

Make sure your manager adds you yo team and company meetings-standups, sprint planning, retrospectives, all-hand and so on

remind your manger to scheudle a one-on-one metting if they conduct them

### Cunningham's law and bike-shedding

we advise you yo document conventions, onboarding procures, and other oral traditions on your team

you will get alot of comments and corrections

the point is not to write a perfect doc but rather to write enough to trigger a discussion that fleshes out the details

this is cunningham's law which states that "the best way to get the right answer on the internet is not to ask a questions; its to post the wrong answer

Be prepared for trivial discussions to become drawn out, a phenomeno called bike shedding

bike-shedding describes a committee assigned to review designs for a power plant - the committee approves the plans within minutes as they are too complex to actually discuss

they then spend 45 minutes discussing the materials for the bike shed next to the plant - bike-shedding comes up a lot in technical work

## Ramp up river

Once you've completed newbie tasks, you'll take on your first real work for the team - you will probably work on an existing codebase

ask questions and have your team review your work frequently

Learning is critical as your ramp up - investigate how code is build, tested, and deployed

read pull requests and code reviews

dont be afriad to ask for more information

sign up for tech talks, brown bags, reading groups, mentorship programs and the like

now is the time to build a relationship with your manager

get to know their working style, understand their expectations and talk to thme about your goals

if your manager does one-on-ones expect to have your first few sessions

managers usually want to track progress so ask your manager how to communicate status

you'll probably also attend your first planning session, usually a sprint planning meeting

you might also join retrospective or allhands meetings

ask for an overview of the roadmap and development planning process

## Cape Contributor

youll enter cape contributor once you begin working on larger tasks and feautures

the team trusts you to work more independnelty

learn how to write production-grade code thats operator friendly, properly manages dependencies and has clean tests

you should be helping teammates now too

get invovled in code reviews, and expect teammates to ask for ideas and feedback

your team might forget that you've recently joined so ask questiosn when you're confused

Most companies have quartely planning and goal setting cycles

participate in team planning and work with your manager to set goals and OKRs

## Operations ocean

Youll learn more about how code is delivered to useres as you work on larger tasks

a lot happens during delivery: testing, build, release, deploying, and rollout - finessing this process takes skill

operations work is hgih stress and takes grit; customers will be impacted by instabilitry

youll debug live software using metrics, logs, and reace tools

you might also entern an on call rotation at this point

exposure to operational work will shjow you hwo code behaves in users hands and yoou will learn to pretect your software

## Competence cove

your team will count on you to drive a small project now

youll need to write a technical design doucment and help with project pplanning

desiging software will expose you to a new level complexitiy

dont settle for your first design; explore trade-offs and plan for your ststem to evolve over time

you see flaws in the architecture, the build and deploy system, and the testing environmnet

you are learning to balance regular work with necessary maintenance and refacting - dont try to rewrite everything

you also have thoughts about team processes

write down your observations-whats working and what isnt and disucss your ideas in a one on one with your manager

now is also the time to work on longer-term goal setting and preformance reviews

work with your manager to understand the process and get feedback from peerts

discuss career apsirations, future work, projects and ideas with your manager

# Chapter 2: Getting to conscious competence

Martin Broadwell defines 4 stages of competence in teaching for learning: unconscious incompetence, conscious incompetence, conscious competence, and unconscious competence

specifically, unconscious incomp means that you are unable to perform a task correctly and are unaware of the gap

conscious incomp means you are unable to perform a task correctly but are aware of the gap

conscious comp menas that you are capable of performing the taks with effort 

unconscios comp menas that you are capable of performing a task effortlessly


Your goal is to get to conscious competence as quickly as possible

## Learning to learn

If you're not leaning you're falling behind

guard your personal time-continued growth is important, but spending every waking moment on work is unhealthy

choose from the list based on your circumstances and natural inclinations

### Front-loading your learning

spend your first few months on the job learning how everything works

this well help your pariticpate in design discussions, on call rotations, operational issues, and code reviews

front-loaded laerning is in investment, one that is so valuable that many companies explicitly design a learning curriculum for new hires

### Learn by doing

Front loaded learning does not mean sitting around reading doucmentation all day - we learn a little by reading and a lot by doing

do your best to understand the impact of your work and act with an appropritate level of caution you can be less cautious and thus faster, writing a unit test than you can be altering indexes on a high-traffic database

### Experiment with code

run expiriements to learn how code truly works

for example, you might know that amethod is invoked but unable to determine how its reached

experiment by throwing an exception, printing a stack trace or attaching a debugger to see the call path

debuggers are your best friend when experimenting

you can use them to pause running code and see running threads, stack traces and variable values

attach a debugger, trigger an evenet and step through the code to see how th code processes the event


one silly but suprisingly useful technique is to add a distinctive print statement at the beginning of the programs execution so you can easily tell if you are running modified program instead of the original

### Read

Spend a portion of each week reading

there are many different sources: team documentation, deseign docs, code, ticket backlogs, books

start with team documentation and design documents, these will give a broad overview of how things fit together

pay special attention to discussions on trade-offs and context - you can take a deep dive into subsystems that are relevant to your first few tasks

read high-quality open source doe, particularly libraires you use

dont read code front to back like a novel: use your IDE to naigate through the codebase

diagram control flow and states for key operations

dig into the codes datastructors and alogrithms

pay attention to edge cases handling

keep and eye out for idioms and style - learn the "local dialect"

Pending work is tracked in tickets or issues - read through team tickets to see what everyone is working on and what is coming up 

the backlog is a good place to find newbie tickets too

old tickets fall into 3 broad catagories: no longer relevant, useful but minor, and important but too larget to tacklet at the moment

### Watch presentations

you can learn a lot from a good presentaiton

start with recorded video presentations from the past - both internal company talks and external youtube videos

watch tutorials, tech talks, and conferences - ask around to find good content

take notes to help with retenetion and follw up on any unfamiliar concepts or terms

### attend meetups and conferences (sparingly)

conferences and meetups are good for networking and discovering new ideas

they are worth attending occasionally but dont overdo it

### Shadow and pair with experienced engineers

Shadowing is following another person as they perform a task

the shadower is an active participant: they take notes and ask questions

shadowing a enior engineer is a great way to learn a new skill

to get the most out of it, set up a time before and afer the shadowing session for planning and retrospection

pair programming is also a great way to learn

two engineers write code together taking turns doing the typing

it takes some getting used to but its one of the fastes ways to learn from each other

### Experiement with side projects

working on side projects will expose you to new technologies and ideas

you can skip the "software engineering stuff" (testing, operations, code reviews, and so on) when you're working on your own - ignore these aspects so you can learn new technolgoies quicjly; just dont forget about the "real" stuff at work

you can also pariticpate in open sourc proejcts

most projects welcopme contribtuoins - this is a great way to learn and build progessional connections

you might even find future jobs through open source communitiies

Find problems you are interested and solved those problems using the tolls you want to learn

a goal that intrisinically motiveates you will keep you engaged longer and youll learn more

### Asking questions

all egniners should ask questions- its a critical part of learning

Asking questions effectily will help you learn quickly without irritating others

use these three steps: do research, ask clear questions, and time your questions approparitealye.

### Do your research

Try to find the answer yourself

dont just search the interent. information lives in docuementation wikis, readmens, source code, adn bug trackjers

if your question is about code, try turning it into a unit test that deomstrates the problem

if you cant find any leads, try to work it out yourself by expirmenenting - keep track where you looked, ehat you did, why you did it, what happened and what you learned

### timebox

limit how long you research a questions. set the limit before you start your research to encurgage disciplen and prevent dimininishing returns

consider when you need to know the answer and leave enough time to ask a question, get an answer and act on what you learn

### Show your work

Describe what you know when asking a question

outline what you've tried and discovered - this signlas that you have spent time trying to figure out the problem yourse;f - it also gives others a starting point for their answers

### Dont interupt

when they're in the zone, dont interupt them

even if the question is easy

even if you lnow they know the answer

even if you're blocked - unless there is a critical issue really dont interupt them

### Prefer multicast, async communcation

Post questions so that multiple peiple can respond (multicast) at their own pace (async) 

do this in a way thats visible to everyone so its apparant when you;ve been helped

the answer will also be discoveredable so thers can find that discussion later

### Batch synchronous requests

chat and email are great for simple questions but complex questions dont work asynchronously

in person coversations are high bandwith and low latency 0 you can cover a lot quickly

this is costsly thought 0 interuptting your coworkes affect their productivitiy

avoid this by setting up dedicated time with your teach lead or manager for nonurgent questions

schedule a meeting or use "office house" if they exists

## Overcoming growth obstacles

Two common impediments, imposter syndrome and the dunning-kruger effect, affect many engineers

you will grow faster if you understand what these phenomena are and how to overcome them

### Imposter syndrome

theres a lot to learn and everyone seems far ahead.

you might worry that you dont belong or lanfing your job was luck

Imposter sydrome is self-reinforcing

every error is seen as proof of incompetence while every success is evidence of a good "faker"

once an indivudal enters this cycle it is difficult to get out of

awareness helps, if you hatch for this patternm you can consciously break it

when you accomplish something its because you actually did it - you ren just getting lucky

dont dismiss compliments and accomplishments 

write them down even the small stuff - practicing reframing negative thoughts

### The dunning-kruger effect

Opposite tom imposter synrome is the dunning-kruger effect, a cognitive bias where people belive that they're more capable than they actually are

unconsciously incompetent engineers dont know what they dont know so they cant accurately evaluate their performance

start by consciously developing curoisity, be open to being wrong

find a respected engineerrr, ask how you are doing and truly listen

talk over desing decisions, especially with those you dont agree with

ask why the decusions were made - cultivate a midset of trade-offs and not right and wrong

# Chapter 3: Working with code

Codebases are like the amphitheater in Arles

Layers are written in one generation and modified later

many people have touched the code

tests are missing or enforce assumptions of a bygone era

changing requirements have twusted the codes usafes - working with code is hard & its also one of the first things youll have to do

## Software entropy

Messy code is a natural side effect of change; dont blame developers for the untidiness 

this drift toward disarray is known as software entropy

many things cause software entropy

Developets missunderstand each oterhs code or differ in style

evolding technical stacks and product requirements cause chaos

## Technical debt

Technical debt is a major cause of software entropy 

technical debt is future work thats owed to fix shortcomings in existing code

like financial debt, technical debt has principal and interest

the rinciple is the original shortiming that needs to be fixed

interest is paid as code evolves without addressing the underlying shortcoming-increasingly complex workarounds are impemeneted

interest compounds as the workarounds are repleicated and entrenched

complexity spreads, causing defects - inpaid tehnicla debt is common and legacy code has a lot of it

Prudent deliberate debt is the classic form of tech debt: a pragmatic trade off between a know shortmicning in the code and speed of delivery

this is agood debt as long as the team is disciplined about adressing it later

recklessm deliberate debt is created when teams are under pressure to deliver

"just" is a hint that reckless debt is being discussed: "We can just add structured logging later"

reckless inadventent debt comes from unknown unknowns 

you can mitiagate the danger of recklessly inadvertent debt by preemptively writing down and getting feedback on 
implenetation plans and during code reviews

prudent, inadvertent debt is a natural outcome of growing expereince

some lessons are only learning in hindsight: "We should have created user accounts even for people who didnt complete the sign in flow"

unlike prudent and deliverate debt the team will not know its taking debt

Healthy teams use practices such as project retrospectives to discuss inadvertent debt and discuss when and whether to pay it down

### adressing technical debt

Clean things up and do minor refactoring as your go - make changes in small indepenent commits and pull requests

the right balance is hgihly context-dependent - if you have suggestions for large refactoring or rewriting make the case to your team first

the following is a good framework for discussing tehcnical debt

1. state the situtation factually
2. describe the riks and cost of the debt
3. propse a solution
4. discuss alternatives (including not taking action)
5. weight the trade-offs

make your propsosal in writing do not base your appeal on value jhudgement ("this code is old and ugly") 

focus on the cost of the debt and benefit of fixing it

## Changing code

Refactoring - improving internal code structure without changing functionality- happens while adding a feature because it makes the feature easier to add - code is deleted during a bug fix

changing large existing codebases is a skill refined over years-decades even.

the following tips will get you started:

### Use the legact code change algorithm

In his book working effectively with legact copde - michael feathers propses rhe following steps to safely modify exisiting codebases

1. identify change points
2. find test points
3. break dependencies
4. write tests
5. make changes

think of the first 4 steps as cleaing space and vuilding a fence around a field before planting seeds in step 5

find the code you need to change and fiture out how to test it

Refactoring the code to make testing possible if needed

add tests that valifate existing behavior

once the fence is up and the area around your change points is well protected, you can make changes on the inside

first locate the code that needs to be changed

once you located the code find its tests points - test points are entry points into the code that you want to modify0 the eareas that tests invoke and inject into

breaking dependnices means changing code strucuture so that its easier to test

you will need to change th code to hook your tessts up and supply synthetic inputs - these changes must not change behaviour

take small steps and dont introduce any new functionaliy while in this phase

make sure you can run tests quickly so you can run tests frequently

a wide variety of technciques exisst to break dependencies incluidning the follwoing

1. pulling apart a large, complex method into multiple smaller methods so separate pieces of functionality can be tested indepenednetly
2. introducing an interface (or other indirection) to give tests a way to supply a simple implementation of a complex object-incomplete but sifficient fo testing
3.injecting exomplicit control points that permit you to simulate aspects of execution that are hard to control such as passage of time

as you refactor and break dependences add new tests to verify behavior

run the test suite frequently as you iterate including new and old tests

consider using automated tests

once dependncies are broken and good tests exists, its time to make the "real" changes

add tests that validate the changes and then refactor code to further improvie its design

### leave code cleaner than you found it

leav code cleaner than you found it - this will help your code get better over time

no stop of the world refactoring project is needed

the cost of refacroring will be amortized across many changes

as you fix bugs or add features, clean adjacant code & dont go out of your way to find dirty code - be opportuniistic

try to keep the code clean up commites separate from your behavior changing comits

sepearing commits makes it easier to revert code changes wihtout losing code cleanup commits

target smelly code as you go - code smell is a tem for code that isnt necessarily buggy but uses patterns know to cause problems

### Make incremental changes

Keep refactoring changes small

make separate pull requests for eahc of the steps in the code change algorithm

use smaller commits if the changes are hard to follow

finally get buy in from your team beofre you go on a refactoring spree

### Be pragmatic about refactoring

your team might decide to ignore refactoring opportunities to ship new features

such decisions add to the technical debt, which might be the right call

the cost of the refactor might also exceed its value

### Use an IDE

IDEs a particualy helpful when refacotring

they have tools for renaming and moving code, extracting methods and fields, updaiting method signattures and doing other common operations

in large codebases simple code operations are both tedius and error prone

IDEs will automatically go throug the code and update it to reflect the new changes

### Use version control system best practices

changes should be commited to a version control system such as git

Commit yoour changes earl and often in development 

frequent commits show how code changes over time, let you undo changes, and act as remote backup.

theres nothing wrong with shorthand commit messages when you're cranking out code,but htey're worhtless to everyone else

rebase your branch, squash your commits, and wirte a clear commit message before submitting a change for review

here are best practices for commit messages

1. seperate subject from body with a blank line
2. limit the subject line to 50 characters
3. capatilize the subject line
4. do not end the subject line with a periond
5. use the imperative mood in the subject line
6. wrap the body at 72 characters
7. use the body to explain what and why versus how

if you want to rewrite code or diverge from standards your improvement must be an order of maginitude better

small gains arent enough-the cost is too high

most engineers understimate the value of convention and overestimate the value of ignoring it

be careful abour reqires, breaking with convetion, or adding new technology to the stack

save rewrites for high-value sitatuons - use boroing technology when possible

### Use boring technology

successful companies have durable code with older libraires and older patterns for a reason: success takes time, and churning through technologies is distracting

all techology is going to break, but old stuff breaks in predictable ways

new things break in suprising ways

lack of maturity means smaller communities, less stability, less doccumentation, and less compatability

each decision to use new technology costs an "innovation token" a concept to show that effort spent on new technologies could also be spent on innovation new features

companies have a limited number of uchs toeksn

to balance the cost and benefit, spend your tokens on technolgies that server a high value areas (core competencies) of your company, solve a wide range of ues cases and can be adopted by multiple teams

new tehcnology has a greater beneeift if it makes your company more competeitive

if it can be adopted widely, more teams will benefit and your company will have less software to maintain overall

billion dollar companies have been built on boring languages

### Don't go rogue

Try to understand the reasoning for the standard approach

its possible that it is solving a nonobvious problem

if you cant figure out a good reason ask around

### Dont fork without commit upstream

Forks are used before submitting pull request to the upstream repository

forking lets people who dont have write access to the main repo contribute to the project-a ormal and healthy pracice

### Resits the tempatation to rewrite

some rewrites are worth doing but many are not

rewrites should only be undertaken if the benefit exceeds the cost; they are risky and their cost is high

engineers always understimate how long a rewrite will take

migrations in particular are awful

data neeeds to be moved - upstream and downstream systems need to be updated

this can take years or een decades


in the famouse book the mythical man-month fred brooks coined the phrase second system syndrome which describes how simple systems get replaced by complex systems

The first system is limited in scope since its creators dont understand the problem domain

the system does its job but its awkward and limited

the developers who now have expereince see clearly where they went wrong

they set out to develop a second system with all the clever ideas they have

the new system is designed for flexibility-everything is configurable and injectable

sadly second systems are usally a bloated mess

if you set out to rewtie a system be very cautsious about overextending

# Chapter 4: Writing operable code

Writing operable code helps you deal with the unforseen

operable code has built-in protection,diagnostics and controls

## Defensive Programming

Defensive code fails less often and when it does it is more likely to recover

make you code safe and resilient 

safe code takes advtange of compile-time validation to avoid runtime failures

use immutable variables, access modifiers to restrict scope and static type-checker to prevent bugs

at runtime, validate input to avoid suprises

reslient code uses exception-handling best practices and handles failures gracefully

### Avoid null values

perfrom null checks at the beginning of methods

use NotNull annotations and similar language feautes when available

validating up fron that variables arent null means that later code can safely assume that its dealing with real values; this will keep your code cleaner and more legible

### Make Variables immutable

immutable varaibles cant be changed once they're set

immutabe variables prevent unexpected modifications - many more variables cna be made immutable thatn you might expect

### Use type hinting and static type checking

constrain the values that variables can take - for example variables with only a few string values should be Enum rather a string

Dynamic languages such as pythong, Ruby via Sorbet, and Javascript via Typescript all now have increasingly robust support for type hinting and static type checkers

### validate inputs

never trust hte input your code receives

protect your code by validating that its input is well formed

use preconditions, checksum, and validate data, use securtity best practices and use tools to find common errors

Validate methon input variables using preconditions nad post conditions

Use mature libraries and frameworks to prevent cross-site scripting attacks

always escpae inputs to prevent SQL injection attacks

explicitly set size parameters when manipulating memory with commands like strcpy to prevent buffer overflows

use widely adopted security and cryptography libraries or protocols instead of writing your own

familiarize yourself with the Open Web Application Security Project top 10 security report to quickly bootstrap your security knowledge

### Use Exceptions

Don't use special return values (null, 0, -1, and so on) to signal an error

all modern languages support exceptions or have a standard exception handling pattern

### Be precise with exceptions

Precise exceptions make code easier to use - use built in exceptions when possible and avoid creating generic exceptions

use exceptions fo failures not to control application logic

Dont create custom exceptions if a built-in type can describe the problem

when creating your own exceptions dont make them too generic

generic exceptions are difficult to handle becuase developers dont know what kind of problem they're dealing with

### Throw exceptions early, catch exceptions late

follow the "throw early, catch late" principle

throwing early means rasiing exceptions as close to the error as possible so developers can quickly find the relevant code

when an error occurs but other code is executed before the exception is throw, you risk the possibility of a second error being triggered

if an exception is thorw for the second error, you dont know that the first error happened

catching exceptions late means propagating exceptions up the call stack until you reach the level of the program that is capable of handling the exception

### Retry Intelligently

The appropriate reaction to an error is often to simply try again

plan on occasionally having to try mutliple times when calling remote systems

retying an operation sounds easy: catch the exception and rety the operation - in practice when and how often to retry requires some know-how

its prudent to use a strategy called backoff

backoff increase sleep time nonlinearly (usually an expontnetial backoff such as (retry number)^2)

if you use this approach make sure to cap the backoff at some maximum so it doesnt get too larger

however if a network has a blip and all clients expereince that blip simultaneously then bakc off using the same algorithm; they will all reissue their requests at the same time

this is called thundering herd; many clients isssuing retry requests simultaneaously can bring a recovering service back down

to handle this, add jitter to the backoff strategy

with jitter, clients add a random, bounded amount of time to the backoff

introducign randomness spreads out the requests, reducing the likelihood of a stampede

make sure to fail not only fast but also loudly - relevant information should be visible so that debugging is easy

### Write idempotent systems

The best way to deal with retries is to build idempotent systems

an idempotent operation is one that can be applied multiple times and still yield the same outcome

### Clean up resources

be sure to clean all resources when a failure occurs

## Logging

For complex applications, languages have sophisticated logging libraries to give operators more control over whats loggen and when

use a logging frameowkr to make your code easier to operate and debug - set log levels so your operators cna control your applications log volume - keep logs atomic, fast and secure

### use log levels

Logging frameworks have log levels which let operators filter messages based on importance

while log levels are not completely standard, the following levels are common:

- trace
    - this is an extermly fine level of detail that only gets turned on for specific packages or classes

- Debug
    - This is used when the message will be useful during a production issue but not during normal operations

- Info 
    - This nice-to-have information about the state of the application but not indicative of any problems

- WARN 
    - These are messages about potentially problematic situations
    - whenever you log a warning, there should be a concrete action you want th eperson seeing the message to take

- ERROR
    - Theses messages idicate that an error that needs attention is occruing

- FATAl
    - these are the "last gasp" log messages
    - if the program encounters a condition so sever that it must exit immeditately, a message about the cause of the problem can be logged at the FATAL level

### Keep logs atomic

If information is useful when couple with other data, log it all automatically in one message

atomic logs which have all relevant information in one line work better with log aggregators

### Keep logs fast

Execisve logging will hurt performance.

### Dont log sensitve data

Be careful when dealing with sensitive data

log messages shouldnt include private data like paswords, security tokens, credit card numbers, or emails

most frameworks support rule-based string replacement and redaction; configure them but do not rely on them as your only defense

be paranoid; logging sensitive data can create security risks and violate privacy regulations

## Metrics

Metrics are the numerical equivalent of lgs; they measure application behavior

how long did a query take?

how many elements are in a queue?

how much data was written to disk?

etc

there are 3 common metrics types: Counters, gauges, and histograms

Counters measure the number of times an even happens

using a cache hit counter and request counter, you can calculate cache hit rates

Counters only increase in vlaue or reset to 0 when a process restarts

guages are point-in-time measurements that can go up or down; think of a speedometer

Gauges expose statistics such a the size of queue, stack, or map

histograms break event sinto ranges based on their magnigtued

each range has a counter that is incremeneted whenever an event value falls into its range

histogram commonly measure the amount of time requests take of data payload sizes

appliction metrics are aggregated into centralized observability ystems like Datadog

observability is a concept from control theory that defines how easy it is to determine the state of system by looking at its outputs

Metrics are also used to automatically scale a system up or down

autoscaling is common in evnironments that provide dynamic resource allocation

To track SLOs use observability systems and take advatnage of autoscaling features you must measure everything

## Use standard metrics libraries

Standard libraires will integrate with evrything out of the box

your company probably has a metrics library that they prefer - if they do, use it, if they dont start a discussion to adopt one

### Measure everything

Measurements are cheap; you should use them extensively. measure all of the following data sructrues, operations, and behaviors

- resource pools
- caches
- data structures
- CPU intensive operations
- I/O intensive operations
- data size
- exceptions and erros
- remote requests and response

## Traces

Developrs all know about stack traces, but there's a less familiar kind of trace: A distributed call trace

a single call to a frontend API might result in hundres of downstream RPC calls to different services

Distributed call traces stitch all of these downstream calls together in one graph

distributed traces are usrlf for debugging erros, measuring performance, understanding dependencies, and analyzing system costs

## Configuration

Applications abd services should expose setting thats allow developers or site reliability engineers to configure runtime behavior

appling configuration best practices will make your code easier to rune

configuration can be expressed in many ways:

- files in plain, human readbale formats sucha as JSON & YAML
- enviroment variables
- command line flags
- A customer domain specific language
- the language the application is written in

Human-readbale config files, enviromnment vaiarbales and command flags are the most common approach

files are used when ether are many values to set or theres desire to version control the configurations

environment variables are easy to set in scripts and envionments can be easily examined and logged

command line flags are east to set and are visibile in pricesses lists like ps

### Dont get creative with configuration

Configuration systems should be boring

Do not get creative with configuration-use the simplest possible approach that iwll work

a static configuration file in asingle standard format is ideal

### Log and validate all configuration

Log all (nonsecret) configuration immeditaely upon startup to show what teh application is seeing

### Provide defaults

set good defaults so your application will work well for most users out of the box

default to network ports greater than 1024 if no portconfigured

use the systems termporary directory or the users home directory if no directory paths are specified

### Group related configuration

use a standard format like YAML that allows for nesting grouping related properties makes configuration easier to roganize and maintain

### Treat configuration as code

The configuration as code philosopht says that configuration should be subjected to the same rigor as code

configuration mistakes cna be disastrious

to keep configratuon changes sage, configuration should be version controlled, reviewed, tested, build, and published

### Keep configuration files clean

clean configuration is easier for others to understand and change

deleted unused configuration, use standard formattting and spacing and dont blindly copy configruation from other files

### Dont edit deployed configuration

Avoid hand-editing configuration a specific machine

one-off config changes are overwritten on subsequent deployments, its unclear who made the changes and machines with similar configurations end up diverging

## Tools

organizations with strong SRE teams might also write tools for your systems

regardless work with you operations team to understand what they need

Your company might already have an existing toolset; its common to have a standard internal web tools framework

integrate your tiools with the standard frameworks available to you

# Chapter 5: Managing Dependencies

But dependencies bring risk: incompatible changes, circular dependencies, version conflicts, and lack of control

you must consider these risks and how to mitigate them

## Dependency Management Basics

A dependency is code that you code relies on

the time at which a dependency is needed-during complilation, testing or runtime-is called its scope

Versioned packages are used to control when dependnecies change and to reoslve conflicts when different versions of the same package appear 

a good versioning scheme has versions that are

unique - versions should never be reused

comparable - versions should help humans and tools reason about version precedence

informative - versions diffentiate between prereleased and set stability and compatibility expectations

### Semantic Versioning

The packages in the previous example use a versioning scheme called semantic versioning, one of the most commonly used versioning schemes

Version numbers are combined into a single Major.Minor.Patch version number

the httpclient version 4.3.6 has a major, minor, and patch of 4,3, and 6

Major version 0, considered "prerelease", is intended for fast iteration; no compatibility guarantees are made

developers can change APIs in ways that break older code, like adding a new required parameter or feleting a public method

starting with major version 1, a project is expected to guarantee the following:

- Patch versions are incremented for backward-compatibility bug fixes
- Minor versions are incremented for backward-compatible features
- Major versions are incremented for backward-incomptabile changes

Many projects use release candidate(rc) builds

early adopters can find bugs in RCs before the official relases

RC prerealeases versions have incremenetal idenftifiers, such as 3.0.0-rc.1

the final RC is then promoted to the release version by re-releasing it without an RC suffix

all prereleased cersions are superseded by the final (3.0.0 in our examples)

## transitive dependencies

Package management or build files show a projects direct depenedecies, but direct depenedncies are only a subset of what build or packaging systems actually use

dependencies usally depend on other libraries, which become transitive dependnecneis

a dependency report shows the fully resolved dependency tree (or dependnecy graph)

Understanding transitive dependnecies is a critical part of dependnency management

adding a single dependnecy sems like a small change, but if that library depends on 100 others, your code now depends on 101 librariries - any change in any deependency can affect your program

## Dependncy Hell

conflicting versions of the same library, or an incompatible library upgrade, can break builds and cause runtime failures

the most common dependncy hell culprits are circular dependnencies, diamond dependencies and version conflicts

Projects often set version numbers without compatability checks and even automation cant fullt gurantee compatibility

incompatible changes slip into minor or patch releases wreaking havoc on your codebase

even nastier are circular dependncies, where a library transitively depends on itself ( A depennds on B, which depends on C, which depends on A)

Circular dependencies create a chicken and egg problem: Upgrading one library breaks the other 

utility or helper projects commonly apprear in circular dependncies

## Avoiding Dependncy Hell

Dependcies are unavoidable, but every new dependncy comes with a cost - ask yourself if a dpency value outweighs its cost

- do you really need the functionality
- how well mainted is the dependncy
- how easy would it be for you to fix the dependency if something went wrong
- how mature is the dependncy
- how frequently does the dependncy introudcues backward incomptablie changes
- how well do you, your teamand your org understand the dependncy
- how easy is it to write the code your self

### Isolate dependencies

You dont have to leave dependency mangement to build and package systems

dependnet code can also be copied, vendored, or shaeded

copying code into your porject trades dependnecy management automation for more isolation (stability)

many developers are raised on the DRY philosophy, whcih discourages code duplication

be pragmatic; dont be afraid to copy code if it helps you avoid a big or unstable dependency

copying code works best on small and stable code fragements

manually copying entire libararies has drawbacks: version history can be lost, and you must recopy code every time you update it

Dependency shading can also isolate dependencies

shading automatically relocates a dependncy into a different namespace to avoid coflicits: some.package.space becomes shaded.some.package.space

this is a friendly way to keep libraries from forcing their dependncies on applications

shading is an advnaced techniqiue and should be used sparingly

never expose shaded dpendencny's objects in public APIs

doing so means developers will have to create objects in the shaded package spaced (shaded.some.package.space.Class)

### Deliberately add Dependncies

Expliciltlly declare as dependncies all libraries you use

dont rely solely on the IDE for depenndcy mangagement

declare you dependncies explicitliy in build files

IDES often store dependncies in their own project  configuration, which builds machinery doesnt like at 

inconsistency between your IDE and build files will make code work in the IDE but now when actually building your code

### Pin versions

Expleciitly set every dependncy's version number, a practice called version pining

unpinned verision will be decided by the build or package management system for you - leaving your fate to the build system is a bad idea

```markdown
require{
    github.com v0.1.0
}
```

### Scope Dependncies Narrowly

Dependcy scope, defines when in the build lifecycle a dpendncy is used

scoping has a hierarchy: compile-time dependcies are used during runtime, but runtime dependncies are not used to compile code, only to run it

test dependncies are only pulled in for test execution and are not necessary for normal use of the published code

use the narrowest possbile scope for each dependency

### Protect yourself from circular dependncies

Never intorudce cricular dependnceies

circular dependcies lead to strang build system behavior and deployment ordering problems

builds will appear to work and then suddenly fail and applucations will have elusive and sporadic bugs

# Chapter 6: Testing

Its easy for tests be busywork - bad teests add developer overhead without providiing value and can increase test suite instability

## The many uses of Tests

They protect the code from future changes that unintentionally alter its behavior, encourage clean code, force developers to use their own APIs, document how componenets are to be interacted with, and server as a playground for experimenetion

above all, tests veryfiy that software behaves as expected

Test writing also froce developers to think about the interface and implementation of ther program

new code will have rough edges; testing exposes clumsy interface design early so it can be corrected

tests also expose messy implmentation - spaghetti code, or code that has too many dependencies is difficult to test

writing tests force developers to keep their code well factored by improving separation of concersn and reducing tight coupling

code cleanliness side effects in tests are so strong that test-driven development has become commonplpace

TDD is the practice of writing tests before code

the tests fail when written, adn then code is written to make them pass, TDD forces developers to think about behavior, interface design and integration before cranking about a bunhc of code

## Types of tests

Unit tests verify "units" of code-a single method or behavior

unit tests should be fast, small and focused

speed is important because these tests run frequently-often on developer laptops

integration tests verify that multiple components work together

if you find yourself instantiating multiple objects that intereact with each other in a test, you're probably writing an integration test

integration tests are often slower to execute and require a more elaborate setup than unit tests

System tests verify the whole system

End-to-end workflows are run to simulate real user interaction in preproduction environments

approaches to system test automation vary

some organizations require that system tests pass before a release, which means all componenents are tested and released in lockstep

synthetic monitoring scripts run in production to simulate user registrration, browse for and purchase an item and so on

syntehtic monitoring requires instriumation that allows billing, accounting and other systems to distinguis these production tests from real activitiy

performance tests scuh as load and stress tests, measure system performance under different conditions

load tests measure performance under various levels of load: for exmaple how a system performs when 10, 100, or 1,000 users access it concurrently

stress tests push system load to the point of failure

Stress testing exposes how far a system is capable of going and what happens under excessive load

accpetance tests are performed by a customer or their proxy to validate that the delivered software meets acceptance criterai

these tests are faily common in enterprise software where formal acceptance tests and critiera are laid out as part of an expensive contract

the international stnadards organziation requires acceptance tests that validate explicit business requirements as part of their security standard; certification auditors will ask for evidence of documentation fo rboth the requiements and the corresponding tests

## Test Tools

Test tools fall into several categories: test-writing tools, test execution frameowkrs and code quality tools

test-writing tools like mocking libraries help you write clean and efficient tests

test frameworks help run tests by modeling a tests lifecycle from setup to teardown

code quality tools are used to analyze code coverage and code complexity, find bugs through static analysis and check for style erros

analysis tools are usually set up to run as part of a build or compile step

everyone must understand the tool, along with all of its idiosyncrasies

the tool might depend on other librarires which will further increase the complexity of the system

### Mocking Libaries

Mocking Libaries are commonly used in unit tests, particularlly in Object-oriented code

code often depends on external systems, librairies or objects

Mocks replace external dependncies with stubs that mimic the interface provided by the real system

while mocking is useful - dont over do it

Mocks with complex internal logic make your tests brittle and hard to understand

starti with basic inline mocks inside a unit test and dont write a share mock class until you begin repeating mocking logic

### Test frameworks

test frameowkrs help you write and execute tests

you'll find frameowkrs that help coordinate and execute unit tests, integration tests, performance tests, and even UI tests

frameowkrs do the following:

- manage test setup and teardown
- manage test execution and orchestration
- generate test result reports
- provide tooling such as extra assertion methods
- integrate with code coverage tools

Many test frameworks give multiple options for setup and teardown execution-before each test, before all tests in a file, or befoer all tests in a build

Running one test at time is safe because tests habe less change of impacting one another

parallel execution is faster but more error prone due to shared state, resource or other contamination

frameworks can be configured to start a new process between each test

this further isolates tests, since each test will start fresh

beware that starting new processes for each test is an expensive operation

test reports help developers debug failed builds - eports give a detail readout of which tests passes, failed or were skipped

### Code quality tools

tools that enforce code quality rules are called linters

linters run static analysis and perform style checks

code quality monitoring tools report metrics such as complexity and test coverage

static code analyzers look for common mistakes like leaving file handles open or using unset variables


code style chekcers ensure all source code is fomratted the same way

max characters per line, camelCasing vs snake_casing, proper indentation, that sort of thing

code complexity tools guard against over complex logic by calculating cyclomatic complexity or roughly the number of paths through the code

the higher your codes complexity, the more difficutl it is to test, and the more defects it is likely to contain

code coverage tools measure how many lines of code were exercises by the test suite

if your change lowers code coverage, you should write more tests

make sure that tests are exercising any new changes taht you've maid

aim for reasonable coverage (the rule of thumb is between 65 and 85 percent)

Be pragmatic with code bases that fail quality checks

dont let code get worse, but avoid disruptive stop-the-world cleanup projects

## Writing your own tests

you are responsible for making sure your team's code works as expected

write you own tests; dotn expect others to clean up after you

many companies have formal quality assuance (QA) teams with varying responsiblilties including the following:

- Writing black box or white box tests
- wiritng performance tests
- performaning integration, user acceptance, or system tests
- providing and maintaing test tools
- maintianing test environments and infrastructure
- defining formal test certification and release processes

if you are in the company with a formal QA team, find out what they are responsible for and how to engage with them

### Write clean tests

write test witht he same care that you write other code

tests introduce dependncneis, require maintance and need to be refactoed over time

use good programming practices on tests

documenta how test work, how they can be run, and why they were written

focus on testing fundamental functionality rather than implementation details - this helps when the code base gers refactored, since tests will still run after the refactoring

keep test dependencies separate from your regular code dependncies

if a test requires a libary to run, dont force the entire codebase to depend on the libary

### dont overdo testing

Write tests that fail meanigfully - avoid chasing higher code coverage just to boost coverage metrics.

use code coverage as a guide, not a rule

High code coverage does not guarantee correctness

focus effort on the highest value tests

test take time to write and maitnain 

focusing on high-vaulue tests tields the most benefit for the cost

use a risk matrix to find areas to focus on

a risk matrix defines risk as the likelihood and impact of a failure

## Determinism in tests

Deterministic code always produces the same output for the same input

but contrast, nondeterministic code can return dufferent results for the same inputs

Nondeterminisitc tests are a problem that plague many projects

its important to understand why nondeterministic tests are bad, how to fix them and how to avoid writigng them

nondeterministi tests degrade test value

intermittent test failutes (known as flapping tests) are hard to reproduce and debug becauase they dont happen every run or even every tenth run - you dont know whterh the problem is with the test or with you code

intermittently failing tests should be disable or fixed immediately - run a flapping test repeated in a loop to repodcude the failure

once you've reproduced the failure you can fix it by eliminating the non determinism or fixing the bug

escape non determinism by making time and randomness deterministic, cleaning up after tests and avoiding network calls

### Seed random number generators

Random number generators (RNGs) must be seeded with a value that dictates the random numbers you get from it

by default, random number generators will use the system clock as a seed 

system clocks change over time so two runs of a test with a random number generator will tield different results -nondeterminism

### dont call remote systems in unit tests

Remote system calls require network hops which are unstable

network calls can time out which introduces nondeterminism into unit tests

avoiding remote calls (which are slow) also keeps unit tests fast and protable

speed and portability are critical fo unit tests since developers run them frequently and localy on development machines

You can eliminate remote system calls in unit tests by using mocks or by refactoring code so remote systems are only required for integration tests

### inject clocks

code that dpends on specific intervals of time cna cause nondeterminism if not handled correctly

Code that waits 500 ms for someething to happen is brittle

a test will pass if the code runs in 499 ms but fail when it runs in 501 ms

static system clock methods like now or sleep signal that your codie is time dependnent

use injectable clocks rather than static time methods so you can control the timing that you code sees in a test

### Avoid sleeps and timeouts

developers often use sleep() calls or timeouts when a test requires work in a separate thread, process, or machine to complete before the test can validate its result

the problem with this techniq is that it assumes that the other thread of executiong will finish in a specific amount of time, which is not something you can rely on.

Sleeping in tests, or setting long timeouts also slows down your test execution and therefore your development and debugging process

if you have a test that sleeps for 30 minutes, the fastes your tests will ever execute is 30 minutes 0 if you have a high (or no) timeout, you test can get stuck

### close network sockets and file handles

Leaked resoources cause nondetermisinism

operationg systems have a cap on the number of sockets and file handles and will begin rejecting new requests when too many resources are leaked

a test that is unable to open new sockets or file handles will fail

leaked network sockets also break tests that use the same port

even if tests are run serially, the second will fial to bind to the port since it was opened byt not closed previously

### Bind to port zero

tests should not bind to a specific network port

static port binding casuses nondeterminism: a test that runs fine on one machine will fail on another if the port is already taken

### Generate unique file and databse paths

tests should not write to statically defined locations

data persistence has the same probelm as netowkr port binding

constant filepaths and database locations cause tests to interfere with each other

dynamically generate unqiue filenames, directory paths, and database or table names

### Isolate and clean up leftover test state

tests that dont clean up state cause nondeterminism

You must reset state whether your tests pass or not; dont let failed tests leave debris behind

use setup and teardown methods to delete test files, clean databses, and rest in-menory test state between each execution

rebuild environments between test suite runs to rid test machines of leftover state

#### Dont depend on test order

tests should not depend on a specific order of execution

ordering dependncies usally happen when a test writes data and a subsequent test assumes the data is written

this pattern is bad for many reasons:

- if the first test breaks, the second will break too
- its harder to parallelize the tests, since you cant run the second test until the first is done
- changes to the first test might accidently break the second
- changes to the test runner might cause your tests to run in a different order

use setup and teardown methods to share logic between tests

provision data for each test in the setup method and clean up data in the teardown

resetting state between each run will keep test from breaking each other when they mutate state

# Chapter 7: Code reviews

A culture of high-quality code reviews helps engineers of all expereince levels grow and promotes a shared understanding of the codebase

a poor code review culture inhibits innovation, slows down development and builds resentment

## Why Review Code

Revies can catch bugs and keep code clean - but review's value goes beyond having humans stand in for automated tests and linterns

Good reviews act as a teaching tool, spread awareness, document implmenetation decisions, and provide changes records for security and compliance

code reviews act as a teaching and learning tool for your team

you can learn from the feedback that you cdoe reviews get

reviewers will point out useful libraries and coding practices that you might not be aware of

you can also read code review equests from more senior teammates

reviewing changes to the codebase ensures that more than one person is familiar with every line of production code

a shared understanding of the codebase helps the team evolve code more cohesivley

records of review comments also serve aas documentation, explaining why things were done as they were

its not always obvious why code is written in a certain way

code reviews act as an archive for implementation decisions

having older cover reviews to consult provides developers with a written history

All these benefits of code reviews apply only when all the participants are able to work in a "high trust" environmennt, in whcih reviewrs are intentional about providing useful feedback and reviewees are open to input

poorly executed reviews become toxic

thoughtless feedback provides no value and slows developers down

## Getting your code reviewd

code changes are prepared, submitted, reviewd and finally approved and merged

developers start by preparing their code fo rsubmission

once code is ready, they submit the changes, creating a "review request", and reviewrs are notified

if there's feedback, back and forth discussion occurs and changes are made - the review is then approved and merged into the code base

### prepare your review

keep individual code changes small, separate feature, and refactoring work into different reciews and write descriptive commit messages

include comments and tests

dont get attached to the code you submit for review; expect it to change, sometimes significantly, as it goes thrugh the process

include a title and description, add reviewers and link to the issue that your review request is resolving

the title and description are not the same as a commit message

the requests title and description should include added context about how the changes were tested, links to other resources, and callouts on open questions or implementation deatils

here is an example:

``` markdown
Reviewers: johnsmtih, ui-ux, jdoe
Title: [UI-1234] Fix missing link in menu header
Description:

# Summary
The main menu header is missing a link for the About Us menu option.
Clicking the menu button doesn nothing right now. Fixed by adding a proper href.

Added a Selenium test to verify the change

# Checklist
This PR:

- [x] Adds new tests
- [] Modifies public-facing APIs
- [] includes a design document
```

### De-risk with Draft reviews

Draft changes are a grat way to think through and propse a change without investing as much time in writing tests, polishing code, and adding documentation

you can sanity check what you're doing by submitting a draft review, an informal review request intended to get quick and cheap feedback from teammates, which significantly reduces the risk that you go too far down the wrong path

to avoid vconfusion, be clear when a code review is a draft or a working in progress (WIP)

Once your draft feels like its on the right track, you can transition it out of the fraft state by finishing the implementation, tests, documentation, and adding polish

again, be clear when your code is ready for a nondraft review and then prepare the review request as described in the previous section

### Don't submit reviews to trigger tests

submitting a code review as a way to trigger test execution is wasteful 

your review will fill the test queue, which will block reviews that actually need their tests to be run before merge

invest the time to learn how to run your tests locally

debugging a failed test is easier locally than in CI environmenets; you wont be able to attach debuggers or get debug information easily on remote machines

make your coding and testing cycle fast so you know immeditaely if your changes break anything - its an up front costs, but it will save you time in the long run.

### Walk through large code changes

conduct code walk throughs when making large changes

walk throughs are in oerson meetings where a developer shares their screen and walks teammates through the changes that are being made

walk-throughs are a great way to trigger ideas and get oyur team comfrotable with changes

circulate relevant design documents and code in advance and ask your teammates to take a look before the walk-through meeting, give them adecuate time - dont schedule the walk-through for an hour later

statr a walk-through by giving background about the change

a quick review of the deisgn document might be warrarented - then shaare your screen and navigate the code in your IDE as you narrat

attendees should save their comments for the review itself 

walktrhoughs are meant to help your team undersnad why a change is being propsoed and ti give them a good mental model for working through the code review in detail by themselves

### Don't get attached

keep some emotional distance-the review is of the code, not of you and its not even really your code; the whole team will own the code in the future

### Have empathy but dont tolerate rudness

give reviewers the benefit of the doubt but let them know if their comments seem off base or rude

### Be proactive

dont be shy about asking others to review your code

reviewers are often bombarded with code review and ticket notifications, so review can get lost on high velocity projects

if you dont get any feedback, check in with the team

when you do receive comments, be responsive

you dont want your code review to drag on for weeks

everyone's memory fades; the faster you respond, the faster youll get responses

Merge your changes proptly after you receive approval

leaving code review dangling is inconsiderate - others might be waiting for your changes ot want to change code once you merge.

## Reviewing code

Good reviewrs break a review equest into several stages

Triage the request to determine its urgency and complexity, and set aside time to review the change

begin your review by reading code and asking questions to understand the context of the change

then give feedback and drive the review to a conclusion

combining this recipe will take a few best praictces will substantially improve the reviews

### Triage Review Requests

Your work as a reviewer begins when you get a review notification

start by triaging the review request

some changes are critical and need to be reviewed right away

most changes, however, are less pressing

if the urgency is unclear, ask the sbmitter

You dont need to review every change

focus on the changes that you can learn from adn those that touch code you are familiar with

### Block off time for reviews

Dont drop everything you're doing every time a review requests arrives

Left unchecked, review interuptions can torpedo your proudctivitiy

block off code review time in your calendar - scheduled review time makes it easy for your to continue on your other tasks, knowing youll have focused review time later

### Understand the change

Dont begina review by leaving comments

first read and ask questiosn

code reviews are most valuable if the review really takes the time to understand the propsped changes

aim to understand why a change is being made, how code used to behave and how code behaves after the change

consider long-term implications of the API design, data strcutrues and other key decisions

### Give comprehensive feedback

Give feedback o a change's correctness, implenetation, maintability, legibility, and security implications

point out code that violates style guides, is heard to read, or is confusing, read tests and look for bugs to verify code correctness

Comments should be polite and include both a "what" and a "why"

example:

" check that `port` is >= zero and raise an InvalidArgumentException if not. Ports cant be negative"

### Acknoledge the good stuff

if you learn something new from reading the code, mention that to the author

if a refactoring cleans up problematic areas of code or new test feel lik ehtey make future changes less risky, recognize these things with a positive encourgaing comment

Example:
"this is an interesting change. I totally get wanting to migrate the queing code to a third party library, but im pretty averse to adding a new dependncy; the existing code is simple and does what it needs to do. definitely speak up if im misunderstanding the motivation; happy to talk more"

### Distinguish between issues, suggestions, and Nitpicks

Major issues need more attention than neutral suggestions and superfical nitpicks

dont shy away from stylistic feedback, but make it clear that you're nitpicking

a "nit" prefix prepended to the comment is customary

example:
"
Nit: Double space.
Nit: Here and throught, use snake_case for methods and PascalCase for classes
Nit: Method name is weird to me. what about maybeRetry( int threshold)?
"

if you find yourself nitpicking ostyle often, ask wheterh the project has adequate linting tools set up

ideally tooling should do this work for you

call out suggestions that seem better to you but arent require for approvale by prefixing feddback with "optional"

distinguish suggestions from changes you really want to see made; otherwise it wont necessarily be clear to the submitter

### Dont rubber stamp reviews

rubber stamping a review is hearmful - teammates will think you know what the change is and why its appliead: you might be held respoonsible later

the tempation to rubber-stamp a request might be a single that code change is too big for one request

dont be afriad to ask your teammates to split up larger code reviews into small sequential chunks

### Dont Limit yourself to Web based review tools

Dont forget that code reviews are just code

you can check out or download the propsed changes and play with them locally

a local code checkout will let you examine the propsed changes in your IDE

large changes are hard to naviagate in a web interface

IDEs and desktop-based review tools let you more easily browse the changes

local code is also runnable - you can create you own tests to verifiy things work as expected

### Dont forget to reveiw tests

Tests should be reviewed just like the rest of the code

it is often useful to start a review by reading the tests; they illustrate how the code is used and whats expected

### Drive to a conclusion

help review submitteers get their code approved quickly

dont insist on perfection, dont expand the scope of the change, clearly describe which comments are critical and dont let disagreements fester

In general reviewers should favor approviing a CL once it is in a state where it definitely imprpoves the overall code health of the system being worked on, even if the CL isnt perfect

# Chapter 8: Deliivering Software

Understanding the delivery process will help you troubleshoot problems and control when changes are made

you might not participate in the process directly - it might be automated or performed by release engineers-but the steps between git commit and live traffic should not be a mystery

delivery consists of steps such ass release, deployment and rolloout

## Software delivery phases

We refer to four software delivery phases, namely build, release, deployment and rollout

software must first be built in ot packages

packages should be immutable and versioned

packages must then be released

release notes and changelogs are updated and packages are published to a centralized repository

published release artificats must be deployed to preproduction and production environments

deployed software is not yet accessible to users-its just been installed

once deployed, software is rolled out by shifting users to the new software

once rollout is complete software is delivered

build -> release -> deploy -> rollout

The delivery process is part of a larger product developmenet cycle

after rollout, feedback is gathered, bugs are detected and new product requirements are collected

feature development begins anew and eventually the next build is kicked off

branching strategies detemine where code changes are commited and how release code is maineted

the right branching strategy will make software delivery esy and predictable, while the wrong strategy will turn delivery inot a fight against the process itself

## Branching Strategies

release packages are built from code in version control systems

trunk sometimes main or mainline- contains the main version of a codebase with a history of changes

branches are 'cut' from trunk to alter the code; multiple branches allow developers to work in parallel and merge their changes into trunk when ready

The two main families of brnaching strategies are trunk-based and feature branch-based development

in trunk-based development, all developers work off of trunk

Branches are used for a single small feature, bug fix, or update

a trunk-based development strategy can be a feature branch is created in feature-1 and merged back to trunk

The bug-1 btanch is created to fix a bug - a release has also been cut and developers have decided to cherry-pick the bug fix into the 1.0 release

Trunk based development works best when brnaches are merged back to trunk quickly, in a matter of days if not hours and not shared between developers

frequently merging is known as continious integration(CI)

CI reduces risk because changes quickly propagate to all developers making them less likely to diverge from each other significantly

To prevent breakages, fast automated tests are run to validate that tests pass before a branch is merged into trunk

Teams often have explixit processes for reacting to a break trunk; the general expectation is that trunk should always be okay to release and releases tend to faily frequent

In feature branch-based developement, many developers simultaneously work on long-lived feature branches, each associated with a feature in the product.

because feature branches are long lived, developers need to rebase-to pull in changes from trunk-so the feature branch doenst diverge too far

branches are kept stable by controlling when the rebasing occurs

when a release is being prepared, feature branches are pulled into the release branch

rlease branches are tested, while feature branches may continue to evolve

feature branch-based development is common when trunk is too unstable to release to users and developers want to avoid entering  feature freeze where feature commmits are abnned while trunk is stabilized

feature branch-based development is common in shrink-wrapped software where different custoemers run different versions; service oriented systems usually use trunk-based development strategies

the most popular feature branch approach is called Gitflow (by Vincent Driesen)

Gitflow uses a develop branch, hotfix branch, and release branch

the development branch is used as the main brnach and that feature branches merge and rebase with

release branches are cut from the develop branch when a release is prepared

development continues on feature branches during release stabilization

releases are stabilized and merged into trunk

trunk is always considered to be production-ready, since it only ever contains stabilized releases

if trunk is unstable because it contains critical bugs, the bugs are addressed immediately with hotfixes instead of waiting for the normal release cadence

Hotfixes are applied to the hotfix branch and merged into both trunk and the develop branch

Branching strategies define when changes go out, set testing expectations, define your bugfix options and determine the number of versions your changes must be ported to

Stick with a trunk-based brnaching strategy unless you truly need long-lived feature branches - managing features branches gets complicated.

## Build Phase

Building softeare takes many steps: resolving and linking dependencies, running linters, compiling, testing, and fianlly, packing the software

in this section, we'll focus on a builds output packages

Packages are built for each release, so software doesnt have to be built on each machine it runs on

Builds produce multiple pakcages if the software targets more than one platform or environment

Builds often produce packages for different operating systems, CPU architectures, or language runtimes

You've probably come across Linux pakcage names like this 

- mysql-server-8.0_8.0.21-1-amd64.deb
- mysql-server-8.0_8.0.21-1-amd64.deb
- mysql-server-8.0_8.0.21-1_1386.deb

packages can contain binary or source code dependnceis, configurations, release notes, documentation, media, licenses, checksums, and even virtual machine images.

Packaging determines what software gets released

bad packaging makes software difficult to deply and debug - to avoid headaches, always version packages and split packages by resource type.

### Version Packages

Packages should be versioned and assigned a unique identifier

unique identifiers help operators and developers tie a running app,ication to specific source code, feature sets, and documentations

without a version, you dont know how a pakcage will behave

### Package Different Resource Separaetely

Configuration, schemas, images, and language packs(translastions) are all part of sfotware

different resouces have different release cadnces, different build times and different testing and verification needs

different resources should be packaged separately so they can be modified without having to rebuild the entire software package

## Release Phase

Release publication makes software available to users and enables deployment, the next phase of delivery

Release processes vary based on the type and size of sofrware and user sophistication

Release managerment is the art of publishing stable, well documeneted software at a predictable cadence

proper release management makes for satisfied customers 

complex software with multiple teams commiting to it will often have a release manager role

release managers coordinate the process-tests,feature validation, security procedures, documentation and so on

take wownership of your softwares publication by releasing immutable packages frequently

be clear about release schedules and publish changelogs and release notes along with new release

### Dont throw releases over the fence

Even if your organization has a release engineering or operations team, you should know how and when your software ends up in front of users

release and operations teams can be of great help in settin gup tools, advising on best practices, and automating drudgery and bookkeeping, but they do not know your code as well as you do

ultimately, its your responsibility to ensure the software is appropriately deployed and well-functioning

make sure your code works in tests environments, keep track of relase scheudles, understand available options and choose the right approach for your application

### Publish packages to a release repository

Release packages are usually published to a package repository or simply tagged and hosed in a VCS like Git

though either practice can work, we encourage you publish release packages to a purpose-built-package repository

Many companies also stage releases and publish internal softare in private repositiroes

package repositories make relase artifacts (another word for a deployable package) avaiable for deployment

repositioes also act as archives-previous release artifcacts are accessible for debugging, rollback, and phase deployments

Version control systems like Git can be used as a relase repository

Version control systems work as release repositories but they aren built for this purpose - VCS dont have as many useful search and deployment features

### Keep releases immutable

Once published, never change or overwrite a release package

immutable release guarantee that all application instances running a specific version will be identical

### Release Frequently

realses as frequently as possible

slow release cycles give a false sense of security: long periods between release feel like ample time to test changes - in practice rapid release cycles produce more stable software that is easier to repait when bugs are found

### Be transparent about release scheudles

Release scheudles define how frquently software is relased

some projects have a predictable time-based shceudle, releaseing every quater or year

other projects release when specific features are completed or simply when they feel like it

internal systems often publish release on every commit

regardless of relase style, be clea about release schedules

publish schedules and notify users when new releases are published

### Publish changelogs and release notes

changelogs and relase notes help your users and your support team understadn what is included in a relase

changelogs list every tikcket that was fixed or commit that was made in a release

to automate changelog creation, track changes in acommit messages or issue trakcer labels

release notes are a summary of the new feauteres and bug fixed contained in a relase

changelog are primarily read by the support and developement team - while relase notes are for the users

## Deployment phase

deploying software is the act of getting software packages where they need to be to run

### Automate Deployments

Deploy software using scripts rather than manual steps

automated deployments are more predictable because script behavior is reproducible and version controlled

operators will be able to reason about deployment behavior when things go wrong

Highly evoled automation leads to continious delivery

with continuous delivery, humans are completely removed from deployment

packaging, testing, realse, deployment and even rollout are all automated

deployments run as frequently as desired - hourly, daily or continuous

with continious delivery, teams can deliver features to their users quickly and get feedback from them

successful continious delivery requires a commitement to automated testings, automated tooling, and a customer base that is able to absorb rapid changes

off-the-shelf solutions like Puppet, Salt, Ansible, and Terraform integrate with exsiting tooling and are purpose built for deployment automation

### Make deployments Atomic

A partially deployed application can cause future deployments to fail if sctips assume installation locations are empty

to avoid failed partial deployments, make deployments all or nothing (atomic)

a partially deployed install should never partially replace the previous successful install and it should be possible to install the same packkahe to the same machine multiple times

the easiest way to make deployments atomic is by installing software in a differnt location than the old versionl dont overwrite anything


### Deploy Applications Indepently

Deployment ordering, when one application's deployment requires the upfrade of another application first, is a common problem in software with many applications or service thaat communiacate with each other

build applications that deploy independently.

When a dpenendency is unavaidable, user the roll out techniqe to safely deploy out of order

deploying with you changes turned off and turning them on in a specific order later is faster and simpler than enforcing deployment ordering

## Rollout Phase

Once the new code is deployed, you can turn it on (roll it out)

switiching everything to the new code at once is risky

no amount of testing will eliminate the potential for bugs and rolling out code to all users at once can break things for everyone simultaneously

instead its best to roll changes out gradually and monitor health metrcis

there are many roullout strategies: feature flags, circuit breaksers, dark launches, canary deployemtns, and blue-green deployments

feature-flags allow you to control what percentage of users receive on code path versus another

Circuit breakers automatically switch doe paths when theres trouble

dark launches, canary deployments and blue-green deployments let you run multiple deployed versions of your software simultaneously

Operators and developers must support multiple code versions simultaneously and keep track of whcih features are toggled on or off - keep fancy rollout strategies in your toolbox for bigger changes

### Monitor Rollouts

Monitor health metrics such as error rates, response times and resource consumption as new code is activiated

Detemine ahead of time what the general health metrics are

think about what you expect to see in metrics or logs that would tell you that your change is functioning correctly

verify that what you expected to happen is actually happening

remeber your job is not done when code is commited, and its not done when the code is rolled out - hold the champgane until metrics and logs and showing your changes running successfully

### Ramp up with feature flags

Feature flags (sometimes called featured toggles or code splits) allow developers to control when new code is released to useres

code is wrapped in an 'if' statement' that checks a falg (set by static configuration or from a dynamic service) to determine which branch code should be run

feature falgs can be on-off booleans, allow lists, percentage based ramps, or even small functions

a boolean will toggel the feature for all users

allow lists turn on features for specific users

percent-based ramps allow developers to slwoly turn on the feature for larger swatchs of users

it is common to start with company owned test accounts and then ramp to a single customer before doing an incremental percent-based release

you code must be forward and backward compatible - state doesnt go way when a feature is toggled off

Make sure to clean up old feature flags that are fully ramped or no longer in user

code littered with feature flags is difficult to reason about and can ven cause bugs

create tickets to remove old flags in the future

like refactoring, do cleanup incrementally and opportunistically

featurue flafs are sometime sused for A/B testing 

### Protect code with circuit breakers

Circuit breakers are a special kind of featre flag that are controlled by operational events like a psike in latency or exceptions

circuit breaksers have several unique charactistcs: they 're binary, they're permanent, and they'er automated

circuit breaksers are used to protect against performance degration

circuit breakers also protect against permanent damage

applications that take irreversible action such as sending an email or transfering money out of a bank account, use circuit breakers when its unclear whether to proceed

### Ramp servuce versions in parallel

it is possible to deploy new versions of web services alongside old versions

packages can be co-located on the same machine or deployed on entirely new hardware

parallel deployments let you ramp up slowly to mitigate risk and roll back fast if things go wrong

canary deployments are used for services that process a lot of traffic and are deployed to a large number of instances

 a new application version is first deployed to a limted set of machines

 a small user subset is routed to the canary version

 blue-green deployments run two different versions of the application: one active and one passive

 the new version is deployed to the passive environment; when it is ready, traffic is flipped to the new version and it becomes active while the previos version becomes passive

 blue-green deployments are useful when traffic cannot be easily subset or when running different versions in paralellel is not feasinle

 unlike canaries, each environemnt must be able to handle 100 percent of user traffic

 ## Launch in dark mode

 Feature flags, canary deployments, and blue-green release roll out code to a subset of users and provide mititgation mechanism whenp problems arisise

 dark launches, sometimes called traffic shadowing, expose new code to real-life traffic wihtout making it visible to end users at all even if the dark code is bad, no user is impacted

 dark launches help developers and operators learn about their softwatre in production with minimal user impact

 take advantage of dark alunches whenever you are relasing complex changes - this pattern is especailly useful for validating ststem migrations

 Trafic to the dark system shuld be excluded from user analytics, and side effects like double billing have to be avoided

 requests can be marked for exclusion and by modifying headers to highlight shadowed traffic
 
 # Chapter 9: Going on call

 On-call engineers are the first line of defense for any unplanned work, be it production issues or ad hoc support requests

 effective on call engeineers are prized by their teammates and managers, and they grow quickly from the relationship-building and learning opportunties that on-call routations provide

 ## How on call works

 On call developers rotate based on a scheudle

 the lenght of a rotaition can be as short as a day, thought more often its a week or two

 Most of an on-calls time is spent fielding ad hoc support requests such as bug reports, questions about their team's software behaves, and usage questions

 on-calls triage these requests and repsond to the most urgent

 An incident is reported to on-call by an alert from an automated monitoring system or by a support engineer who manually observes a problem

 on-call develoeprs must traige, mititgate and resolve incidents

 all on-call rotations should begine and end with a handoff

 the previous on-call developer summarizes any current operation incidents and provides context for any open tasks to the next on call developer

 ## Important on call skills

 ### Make yourself available

 an oncalls job is to respond to requests and alerts

 dont ignore request or try to hide - expect to be interrupted and accept that you cant do as much deep work while on call

 figure out what on-call expectations are and dont get caught in a situation where you cant respond

 for many requests its perfectably acceptable toacknowledge that you've receieved the query and respond with an approximate time when you should be able to look at the probelm

 "I am currently assisting someone else; can i get back to you in 15 minutes?"

 ### Pay attention

 infroamtion relevant to on-call works comes in through many channles, chat, email phone calls, text messages, tickets, log metrics and even meetings

 pay attention to these channels so you'll have context when debugging and troubleshooting

 create a list of resources that you can rely on in an emergency; direct links to critical dashboards and runbooks for your services, instructions for accessing logs, important chat rooms and troubleshooting guides

 a separate "on-call" bookmark folder that you keep-up-to-daete will come in handy

 ### Prioritize work

 Work on the highest-priority tasks first

 as tasks are finished or become blocked, work you way down the list from highest to lowest priority

 quickly triage the interruption: either set is aside or begin working on it if its an emergency

 if the new request is higher priority than your current task but isnt critical, try to finish your current task or at least get it to a good stopping point before context switching

 if you cant tell how urgen a request is, ask what the impact of the reqeust is

 the impact will determine the priorty

 if you disagree with the requestor about an issues prioritaation, discuss it with your manager

 On-call work is categorized by priority: P0, P1, P2, P3 and so on

 P1 - critical impact

 P2 - High impact

 P3 - Medium Impact

 P4 - Low impact

 Service level indicators (SLIs) such as error rate, request latency and requests per second are the easiers ways to see if an application is healthy

 Service level objectives (SLOs) define SLI targets for healthy application behavior

 if error rate is an SLI for an application an SLO Might be a request error less than 0.001 percent

 Servie Level Agreements (SLAs) are agreements about what happens when an SLO is missed

 Learn the SLIs, SLOs, and SLAs for your applications - 
 
 SLIs will point you to the most imprtant metrics - SLOs and SLAs will helop you prioritize Incidents

 ### Communicate clearly

 Things happen quickly, and miscommunication can cause major problems

 To communicate clearly, be polite, driect, resposnsives and thorough

 Responds to requests quicky - repsonses dont have to be solutions

 tell the requesto that you've seen their request and make sure you understand the problem

 Post status updates periodically - updates should include what you've found since your last update and what you'fe planning on doing next

 ### Track your work

 Write down what you're doing as you work

 each item that you work on while on-call should be in an issue tracker ot he teams on call log

 tracking progress reminds you where you left off when you come back to a ticker after an interruption

 the next on call will be able to see the state of ongoing work by reading your issues and anyone you ask for help can read the log to catch up

 Logged questions and incidents also create a searchable knowledge base that future on-calls can refer to

 Always include timestamps in your notes - timestamps help operations coorelate events across the system when debugging issues

 ## Handling Incidents
 Resolving the problem is important, but in a critical incident, the top objective is to mitigate the impact of the problem and restove services

 incident reponse is broken into these 5 steps:

 - Triage: engineers must find the problem, decide its severitiy, and determine who can fix it

 - Coordination: Teams must be notified of the issue - if the on call cant fix the problems themselves, they must alert those who can

 - Mitigation: Engineers must get things stables as quickly as possible - mitagiont is not a long term fix; you are just trying to "stop the bleeding"

 problems can be mititgated by rolling back a release, fialing over to another enviroment, turning off misbehaving features or adding hardware resources
 
 - resolution: After the problem is mirigated, enginers have some time to breather, think and work toward a resoluton

 enginerrs continue to investigate the problem to determine and address underlying issues

 the incident is resolved once the immediate problem has been fixed

 - Follow-up: An investigation is conducted into the root cause - why it happened in the first place

 if the incident was sever, a formal postmortem or retrosepctve is condcuted

 follow-up taks are created to prevent the roout cause from happening again

 ### Triage

 Determine a problems priority by looking at its impact: How many people is it affecting and how detrimental is it

 use your companies prioritization categories and SLO/SLA deefintions to priotize the issue with the help of SLIs and the metric that triggered the alert

 Triage is not the time to prove you can figure things out on your own; time is of the essence

 ### Coordination

 Coordination starts by figuring out who's in charge - fow lower priotity incidents, the on-call is inchage & for larger icniddnets an incident commander will take charge

 once someone takes shart, all relevant parties must be notified of the incident 

 contact everyone needed to mititage or resolve the problem

 track communication written form in a central location: a ticketing ststem or chat

 communication helps everyone track progress, saves you from constantly answering status questiosn, prevents duplicative work, and enables others to provide helpful suggestions

 share both your obecervations and your actions and state what you are about to do before you do it

 communicate you work even if you are working alone

 ### Mitigation

 Your goal in the mitigation phase is to reduce the problem's impact

 mitigation isnt about fixing the problem; its about reducing its sevirty

 incidents are commonly mititgaed by rolling backa  software relases to a "last known good" version or by shifting traffic away from the problem

 Ideally, the  software you're working with will have a runbook for the problem

 runbooks are predefined step-by-step instructions to mitigate common problems and perform actions such as restarts and rollbacks

 ### Reoslution

 Once mitagiont is complete, the incident is no longer an emergency

 you can take time to troubleshoot and resolve the underlying issues

 during the resolutoin phase,s focus on the immeditate technical problems

 Focus on what is needed to recover without temporary measures put in place during  mitigation

 set asie larger technical and process problems for the follow-up phase

 Examine the problem, make a diagnosis, and then test and treat

 if the treatmenet is successful, the problem is curedl if not, you reexamine and start again

 You goal during resolution is to understand the symptopns and the problem and try to make it repoducicble

 use all the operational data at your dispable, metrics, logs, stakc traces, heap dumps, change notitiations, etc

 once you have a clear view of the symptoms, diagnoes the problem by looking for the causes

 diagnossis is a searhc and like any search you can use search algorithms to troubleshoot

 Next, test you theory

 testing inst treamtnet- you're fixing the problem yet

 instead you see if you can control the bad behavior

 can you reproduce it

 can you change a configuration to make the rpoblem go away?

 if so you've located the casues

 if not you've eleminated one potential casues- go back, reexamine and formaulate a new diagnosis to test

 after a succseful test, you can decide on the best course of treatment

 perhaps a configuration change is all thats needed

 often a bug fix will need to be written, tested and applied

 the goal is to learn in the incident and prevent it from happening again

 A postmortem document is written and recived, and tasks are opene to prevent recurrence

 One good example is Atlassians postmortem template

 A critical section of any postmortem docuement is the root-cause analysis section

 root-cause analysis is performed using the 5 whys

 this technique is pretty simple: keeping asky Why - take a problem ans ask why it happened

 Good postmortem meetings also keep "solutioning" separate the review meeting

 Solution-figuring out how to solve a problem takes a long time and distracts from the purpose of the meeting

 ## Providing Support

 When on call engineers arent dealing with incidents, they spend time handling support requests
 these request come both from within the organziation and from external customers and they run the gamut from simple "how does this work" to difficult troubleshooting questions

 most requests are bug reports, questions about business logic or technical questions about to use your software

 ## Dont be a hero

 there is an extereme we want to warn you about: doing too much

 Trying to be the hero can lead to burn out

 # Chapter 10: Technical Design Process

 The technical design process helps everyone agree on a design for a large change

 Design wrok is broken into two activities: Solitary deep thought work and collaboritve group discussion

 In the beginning err on the side of caution and ask you tech lead or manager for guidance and share your design widely 

 done correclty, participating in and leading technical design work is reawrding and valuable

## The Technical Design process cone

 With every iteration, the design document becomes clear and more detailed

 the authors confidence in the solution grows, as does the body of work behidn the design-experiements, proofs of concets and beanch marks

 as you reseearch, you bounce back and forth between indepenent work and discussion witha  small group of teammates or experts in the domain you're researching

 you brainstorm and experiement

 the goal is to learn - to increase certainity and clarity

 eventually your research, experimentaion and brainstorming leads you to a preferred design

 after sanity checking it with those you've been working with, you write a design document

 as you write, you discover more unkowns

 you create a few small protoypes to validate your designs, answer questions and help choose between viable alternative approachs

 you conduct more research and ask experts for their input

 you flesh out a draft of the design document

 After your design is approved, implementation begins but design isnt over - implementation will surface more suprises

 you must update your design doucmenet if any large deviations are made as you and your team code

 ## Thinking about Design

 the base of the desgin funnel begins with exploration

 you need to understand the problem space and requirements before you can develop a design

 exploration requires thing, research, experimentation, and discussion

 ### Define the problem

 your frist task is to define and understand the problem (or problems) that you're trying to solve

 you need to understand the boundaries of the problem to know how to solve it and to avoid building the wrong thing

 start by asking stakeholders what they perceive the problem to be

 these stakeholders may be your manager, teammates, product managers or tech leads

 not everyone will peceive the problem the sam way

 restate the problem in your own words back to the stakeholders - ask if your understanding matches theirs 

 if there is more than one problem ask which problems are the highest priority

 "What happens if we dont solve this problem?" is a powerful question

 when the stakeholder answers, ask if the outcome is acceptable

 you'll find many problems dont actually need to be solved

 once you've collected notes on the problem from varius stakeholders, try to synthesize the feedback into a clear problem statment

 pay particular attention to the scope of the problem - whats included and what could be included but isnt

 write and circulate the problement statement - both whats in and out of scope-to vallidate your understanding and get feedback

 The refined problem description will lead to a very different solution than the original

 ### Do your research

 COnsider relevant research, alternative solutions and trade-offs

 the design you come up with should not be your first idea but your best

 there is a ton of resources online - look at how others solved sumular problems

 industry conferences are another resource to check - slide decks & recordings are usually posted online

 talk to experts in the problem space that you're exploring - ask in your company for input, but dont limit yourself to your coworkers

 finally, think critically - not everything you read online is a good idea

 ### Conduct experiments

 expirement with your ideas by writing draft code and running tests

 write draft APIs and partial implementations

 run performance tests or even A/B tests to learn how systems and users behave

 circulate your prototpes with your team to get feedback

 Don't write tests or spend time polishing code - you're tring to learn as much as you can as quickly as possible

 ### Give it time

 give yourself large chunks of time, take breaks, change scenery and be patient

 design requires deep thought - you cant do design in 15 minute incremenets - give yourself several hours to focuse

 figure out when you are most productive to sustain deep concentration and block off the time on your calendar

 Your brian needs time to relax

 take breaks and give yourself room to breather

 allow your mind to relax and wander 

 design is  a24hr a day gig so be patient - your brain is alaways mulling ideas - thoughts will come to you randomly

 desing spikes are a good way to manage the tension between creative work and predictable delivery

 a spike is an extrement programming term for a time-bound investigation

 allocating a spike task in a sprint will give you space to go deep thought without having other tasks to worry about 

 ## Writing Design Documents

 Design documents are a scalable way to clearly communicare your ideas

 to create useful design documents, focus on the most consequent changes, keep the goal and audience in mind, practice writing and keep your docuements up-to-date

 ### Document consequentail changes

 Your org may have its own guidelines for this; if they dont use these three crtieria to decide if a design document is required:

 - The project will require at least a month of engineering work
 - The change will have long-lasting implications with regard to extending and mantianing the software
- the change will significantly impact other teams


going through the process of writing the design document and getting it reviewed will give concerns a change to surface and get addressed

 a review will also ensure the wheol team understand what is being added and why, which will help avoud suprises down the line

 changes that have broad reach often require code reviews or refactoring and other designs might be impacted - your design document notifies teams of your forthcoming changes

 ### Know why you're writing

 A design document is a tool to help you think, to get feedback, to keep your team informaed, to ramp up new engineers and to drive project planning

 Spreading design knowledge will help others maintain an accurate mental model of how the system works

 the team will make better design and implementation decisions later

 design documents are particuarlarly helpful to new engineers to the team

 without design documents, engineers find themselves crawling thoguh code, creating box diagrams, and teasing knowledge out of senior engineers to understand whats going on

 finally managers and teach leads use design docuements for prototype planning

 many design docs include milesones or implementation steps needed to complete the project

 ### Keep desgin documents up-to-date

 once you begin implementation, design docs morph from propsoals into documents that describe how software is implemented: they are living documents

 two comoon pitfualls occur duirng the transition from propsoal to documenetation

 the first pitfall is that the proposal document is abonded and never updated again

 implementations diverge and the document is misleading to future users

 the scond pitfall is that the document is updated and the histrou of the proposal is lost

 future developers cant see discussions that led to design decisions and might repeat mistakes of the past

 version control your design docuements - a good trick is to keep design document version controlled in the same repo as code

 code reviews can then be used as a review for design comments

 ## Using a Design Document Template

 - Introduction
 - Current state and context
 - Motivation for change
 - requirements
 - potential solutions
 - proposed solution
 - design and architecutre
    - system diagram
    - UI/UX changes
    - code changes
    - API changes
    - Persistence layer changes
- test plan
- rollout plan
- unresolved questions
- appendix

### Introduction

provide a paragraph long summary of the propsed changes and some guidance that points different readers-security engineers, operations, data scientists-to relevant sections

### Current state and contenxt

describe the architecture that is being modified and define terminology 

explain what systems with nonobious names do

### Motivation for change

Describe the benefits that will result from this effor

tie these benfits to business needs: "By reducing memory by 50%, we can address the most common objection to installing our software, leading to greater adoption."

### Requirements

List requirements that an acceptable solution must meet - these can be broken out into sections such as the following:

- User-facing requiresments
    these are usally the bulk of the requiresments - they define the nature of the change from a user perspective
- technical requirements
    these include hard requirements on the solution that must be met

    technical requirments are usally casued by interperability concers or strinct internal guidelines - service level objectives can als be defined here
- Secuiry and compliance requirements
    Though thse might be seen as user-facing or technical requirements, they are often brought out separately to esnure that security needs are explicitly discussed

    data retention and access polies are often convered

- other 
    this can included critical deadlines, budgets, and other important considerations

### Potential solutions

writing this section is as much a tool for you as the read; its meant to force you to think through not just your first idea but alternative ideas and their trade-offs

Desribe reasonable alternative approaches and why you dismissed them

describing potential solutons will preemptively address "why not do x?" comments

### Propossed solution

this description goes into more detail than the very brief description in the introduction and may have diagrams that highlight changes

### Design and Architecture

Highlight implmentation, details of itnerest, such as key libraries and frameworks being leverage, implementation patterns and any departures from common company practices

design and architecture should include block diagrams of componenents and call and data flow, UI, code, and shcema mock-ups

#### System Diagram

include digram that shows the main components and how they intereact

explain what is changing by highlighting new and change componentns or creating before and after diagrams

#### UI/UX changes

create mock-ups if your project chnages user interfaces - use the mocks to walk through a user's activity flow

The goal is to think thoguht the xperience of the people who will interact with your change

#### Code changes

highlight what, how and when exsiting code will need to change - describe any new abstractions that need to be introduced

#### API changes

Discuss backward/forward compatibility and versioning

remeber to include error handing in your API proposal: it should respond with useful infromation when encoutering malformed inputs, contraints, violations and unexpected internal errors or execptions

#### Peristence Layer changes

Discuss new databases, file and filesystem layouts, seach indicies and data transformation pipelines

include all schema changes and notes on their backward capitibility

### Test plan

Do not define every test in advance; rather explain how you plan to verify your changes

DIscuss sourcing or generating test data, highlight use cases that need to be covered, discuss librarires and testing stategies you expect to leverage and explain how you will validate that security requriements are met

### Rollout plan

document the feature flags you will need to put in place to control the rollout and whether you will use deployment patters

think about how you would find out if changes are not working and how you will roll back if problems aer discovered

### Unresolved Questions

explictly list presing questions that have not been answered in the design

this is a good way to solicit input from your readers and to state your "known unknowns"

### Appendix

Put extra details of interest in the appendix

## Collaborating on Design

Interpreting and condensing feedback into a meaningful desing isnt easy

collaborate on design by wokring within your teams design process, communicating early and often to avoid suprises and using design disuccsions to brain storm

### Understandin your team's design review process

design reviews notifiy architects of large upcoming changes and give leads a chance to provide feedback

architectural reviews are more formal, heavier-weight processes

designs must be approved by outside stakeholders such as operations and security memebers

a design document is required and there might be mutliple rounds of meetinfs & Presentations because of their high time cost, architectural reviews are reserved for large or risky changes

We call the other tpe of design review process request for decsions or RFD

the term RFD is not very common but the patter isl some discussion but not a full review

an engineer requesting a decision ciruclates a quick write-up describing the decision to be made- a light design document

teammates then whiteboard, dicuss the toptions, provide input nd make a decision

### Dont suprise people 

instead when you do your initial research, get early feedback from other teams and teach leads; this will lead to a better design, keep them aware of your work, and give them a stake in your design

the parties you invovled early can become chamoions of your work later

your goal is simply to make poeple aware of what you're doing, to give an opportunity for feedback and to get them thinking about your work

keep poeple up to date as you progress

give updates in status meetings and standups

### Brainstorm with design disccussions

Discussions happen early in the design cylce, when the problem is reasonably well understood but the design is not yet settled; a draft design doc should exits, but may still have a lot of gpa sna d open questions

desing discussion meetings need to be scheudled for large chunks of time-two hours or so so ideas can develop

### Contribute to design

Reading design documents and going to brainstorm meetings might feel like a distraction - do it anyway 

your participation will improve your teams design and help you learn

when you join in on design give suggestions and ask questions

apply the same guidance we give for code reviews

think holistically about the design

consider security, maintability, performance, scale and so on

pay speical attention to how desings impact your areas of experties

communicare clearly and be respectful

asking questions is as important as giving suggestsions - questions will help you grow

# Chapter 11: Creating Evolvable Architectures

Managers try to deal with requirements voltility using iterative development processes like agile developement

you can do your part to accomadate changing requirements by building evolveable architectures

evolveable architectures eschew complexity, the enenmy of evolvability

