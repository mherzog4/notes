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

## Typing Promises and Async Requests

## Assigning Dynamic Keys to an Object

## Narrowing Down Union Types

## Typing Errors in a Try-Catch

## Inheriting Interfact Properties

## Combining Types to Create New Types

## Selectively Construct Types from Other Types

## Typing Functions

## Typing Async Functions