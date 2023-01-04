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