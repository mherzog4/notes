# Typescript

## The implicit 'Any' Type error

```javascript
export const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};
```
TypeScript relies on type annotations to understand the contracts the function must meet. Type annotations are critical to understanding TypeScript.

Whenever you create a function, you must always specify the types of each argument!

## Working with Object Params

Perhaps the simplest solution is to pass an object type directly to the params argument.

Use curly braces to represent the object, then create type inline:

```javascript
export const addTwoNumbers = (params: {first: number; second: number}) => {
  return params.first + params.second;
};
```
A useful technique is creating a named type. Use the type keyword, then provide a name and object similar to the previous solution.

In this case, we'll name the type AddTowNumbersArgs and type first and second as number:

``` javascript
type NewType = {
    first: number;
    second: number;
}
export const addTwoNumbers = (params: NewType) => 
  return params.first + params.second;
```
Interfaces can be used to represent objects (they can do other things, but we're only concerned with objects for now).

Using interface is similar to using type.

``` javascript
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};
```

generally speaking, you should be using aliases instead of going inline.

So when should you choose type and when should you choose interface?

It comes down to the syntax you prefer.

Technically, type can represent anything. It could be a number, or a string, or a boolean.

TypeScript will give you an error if you try to use a string with interface:

// this won't work! interface AddTwoNumbersArgs = string
// this won't work!

interface AddTwoNumbersArgs = string
When you're just getting started, it doesn't really matter if you choose type or interface.

Just be consistent!

## Set properties as optional

Adding a ? before the colon tells TypeScript that the property isn't required in order for the function to work.

``` javascript

export const getName = (params: { first: string; last?: string }) => {
```


Adding ? will also work when using named types, or anywhere else object keys can be specified.

type Params = { first: string; last?: string; }
type Params = {
  first: string;
  last?: string;
}
Tooling in VS Code is smart enough to recognize if a key is optional. This can be seen in the autocomplete, where you will be reminded that last should be either a string or undefined.

If you have prior experience with TypeScript, you might have seen a type explicitly set to string or undefined as seen below:

type Params = { first: string; last: string | undefined }
type Params = { first: string; last: string | undefined }

## optional Parameters

Similar to last time, adding a ? will mark last as optional:
``` javascript
export const getName = (first: string, last?: string) => {
```
There is a caveats, however.

You can't put the optional argument before the required one:

// this will not work! export const getName = (last?: string, first: string) => {
// this will not work! export const getName = (last?: string, first: string) => {
This would result in "Required parameter cannot follow an optional parameter".

As before, you could use last: string | undefined but you would then have to pass undefined as the second argument.

## Assigning Types to Variables

By adding : User to defaultUser, we're telling TypeScript that we want it to conform to our User interface.
```Typescript
const defaultUser: User = {}
```
Now TypeScript will display errors at the line where defaultUser is declared.

We also benefit from autocompletion for the properties!

The same : Type syntax can be used with other types, including numbers and functions:

```Typescript
let a: number = 1
```

As you write TypeScript, you need to think about where you want your contracts to be, and what needs to be done in order to meet them.

## Constraining Value Types

The solution is to update role to be a Union type.

The syntax uses | to delineate the options for which values a key can be:

```Typescript
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
}
```
With this change, removing the // @ts-expect-error line will show us the error message along with autocomplete for the allowed options.

### About Union Types

Anything can be added to a union type. For example, we can make a new SuperAdmin type and add it to the role:

``` Typescript
type SuperAdmin = 'super-admin'

interface User {
  // ...other stuff
  role: "admin" | "user" | SuperAdmin;
}
```

In this example, an object primitive is added, and Prettier reformats the code like so:

``` Typescript
role:
  | "admin"
  | "user"
  | SuperAdmin
  | {
      wow: boolean;
    }
```
Union types are everywhere within TypeScript, and will be used throughout Total TypeScript.

They give your code safety and allow you to be really sure of the types of data flowing through your app.

## Working with Arrays

There are two solutions to this problem.

### Add Square Brackets
The first solution is to add a couple of square brackets to Post:

// inside the User interface posts: Post[];
// inside the User interface
posts: Post[];
Now if we create a posts consts of the type Post[], we'll get autocomplete when we populate the id and title properties:

``` Typescript
const posts: Post[] = [
  {
    id: 1,
    title: 'autocomplete works'
  }
]
```

### Use a Generic Type
The second solution is to use a generic type.

This syntax uses the name of what we want (Array, in this case) followed by angle brackets with the type that will be in the array:

``` typescript
// inside the User interface
posts: Array<Post>
```
The generic types are built into TypeScript without us having to import anything.

We'll be seeing more of them later when we get into Promises, Maps, and other more advanced types.

Which one should you use?
Both options resolve to the same thing– it's just two different ways of writing it.

I like Post[] for arrays, but I wanted to show the generic type syntax since it comes up later.

## Function Return Type Annotations

In this case we'll add : User since we want to return a User.

Before:

const makeUser = () => {

After:

const makeUser = (): User => {

Specifying the type a function returns will check your code as you write it.

For example, User expects id to be a number. If you pass it a string, TypeScript will show you the error inside of the return object right away.

Notice that if you don't include everything that User expects, the errors all show within the makeUser function where the errors are instead of in the tests at the bottom of the file.

Adding type return annotations allows you to be more strict in ensuring that your function is safe on the inside as well as the outside.

## Typing Promises and Async Requests

There are several solutions here.

Do What TypeScript Suggests
In the starting point of the code, hovering over the error message in VS Code pops up a message:

The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<LukeSkywalker>'?

We get this error because the fetchLukeSkywalker function is async, so the type returned will be a Promise.

Following TypeScript's suggestion to write Promise<LukeSkywalker> will fix this error:

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {

Note that this syntax is similar to the Array<Post> syntax we saw earlier. But unlike arrays, there's only one way to use Promise<T>.

This solution works well, and is probably what I'd recommend.

Type the Fetched Data Response
By default, the data returned from a fetch request will be typed as Any.

Even though we know from the API what our response will contain, TypeScript has no idea. That means that the Any type doesn't give us any autocomplete when we use it.


export const fetchLukeSkywalker = async () => {
  // `data` will be typed as `Any`
  const data = await fetch(

But because we've awaited the fetch, we can type data as LukeSkywalker:

const data: LukeSkywalker = await fetch(

This would give us the autocomplete because it's been properly typed.

Now when we hover over the fetchLukeSkywalker function declaration, we can see that TypeScript has inferred the return type of the function to be Promise<LukeSkywalker> just like we saw in the prior solution.

Cast Data as a Type
In the cases we've looked at so far, we're kind of lying to ourselves a little bit.

TypeScript doesn't know what we're going to return, so we have to tell it. But really, we don't know what the result of our fetch is going to be.

This is where this soltion comes in:

export const fetchLukeSkywalker = async () => {
  const data = await fetch("<https://swapi.dev/api/people/1>").then((res) => {
    return res.json();
  });

  // cast the data to LukeSkywalker
  return data as LukeSkywalker;
};
The return data as LukeSkywalker line casts the fetch response to our LukeSkywalker type.

When working with fetch requests, you should either cast the return data as a type or assign a type to the data when the request is made.

More About Casting
Casting allows us to let anyone become LukeSkywalker:

const matt = {} as LukeSkywalker

Compare the above to if we said matt was assignable to LukeSkywalker:

const matt: LukeSkywalker = {}

This would give us errors because the object doesn't include the appropriate properties. Generally speaking, the assigning syntax is safer than the as syntax, and is probably what you should do in most cases.

## Passing type arguments

We can pass in a type argument to the Set to tell it what type it should be:


const guitarists = new Set<string>();
When the argument is in place, we can only add items of that specific type.

This also enables useful things like hovering over guitarists.add() and seeing that it expects a string.

Digging Deeper
You can pass in type arguments as well as function arguments to certain functions.

In this case since Set is a class that we're instantiating, we can command-click or right-click and say "Go to Definition".

Double-clicking takes us to a file called lib.es2015.collection.d.ts which is where certain parts of JavaScript are typed out.

There's an interface for Set that starts like this:


interface Set<T> {
That T represents the type argument.

Back in our solution code, if you erase the type argument and go back to just Set(), hovering over it will show you that it is typed as Set<unknown>.

Lots of JavaScript constructs and popular libraries use this.

Another Example
Let's create a new Map and pass string as a type argument:


const map = new Map<string>()
Now when we hover, we see the following:


Map<any, any>
This is because Map accepts two type arguments: the first is the key, and the second is the value.

If we wanted to create a map where the keys and values were both strings, it would look like this:

const map = new Map<string, string>() map.set('someKey', 'someValue')

Changing someKey to a number would now give us an error.

This concept of passing type arguments to certain functions and constructors and classes is crucial for understanding TypeScript as a whole!

## Assigning Dynamic Keys to an Object

Use the Record Utility Type
One solution is to type cache as a Record:

const cache: Record<string, string> = {}

The first type argument to Record is for the key, and the second is for the value. In our case, both are strings.

The Record type allows us to add any number of dynamic keys to the object at runtime, using something like this:

cache['keyHere'] = 'valueHere'

Record is different than the Set and Map we looked at earlier– it is only at the type level.

Use an Index Signature
Here's another way to update cache to please TypeScript:

Recall that in the "before" code we had lots of errors like "You can't use that to index this".

These errors were saying that they couldn't tell what types the key was. Whenever you see an error about an index, it's usually about an object key!

For this fix, we'll add what is called an index signature to our cache:


const cache: {
  [id: string]: string;
} = {};

Index signatures put the name of the index and its type (string or number) inside of square brackets.

So from the above, we can see that id is the index for cache.

If we were to set it to [id: number]: string, every time we called cache.add() we would have to pass a number as the first argument.

Use an Interface with an Index Signature

We can also create an interface for Cache that contains the index signature:

interface Cache {
  [id: string]: string;
}

Then inside of the createCache function we would type cache as Cache:

const createCache = () => {
  const cache: Cache = {};

This would work with a type instead of interface as well.

Which One to Use?

All of these solutions are fine-- there's no pros or cons between them.

I find that the Record syntax is a bit easier to look at and parse what it's doing. It also displays helpful information when you hover over it.

Assigning dynamic keys to an object is a common pattern in JavaScript, and these techniques allow you to do it.

## Narrowing Down Union Types

## Typing Errors in a Try-Catch

## Inheriting Interfact Properties

## Combining Types to Create New Types

## Selectively Construct Types from Other Types

## Typing Functions

## Typing Async Functions