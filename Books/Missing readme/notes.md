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