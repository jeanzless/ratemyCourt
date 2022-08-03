# Steps for refactoring our JS Project to a TS Project

## Steps

Make sure that you in inside the project folder before doing any of this. Don't be inside classwork in VSCode, instead, open the starter folder directly. You should see the nice pink banners at the top and bottom of VSCode to know you have done this.

1. In your project root: `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`.
2. Run `npm audit fix` when this is completed. If you see `6 vulnerabilities`, don't worry, these are in development mode only. Run `npm audit --production`, and you'll see there are no vulnerabilities in your compiled code.
3. Create a file in your root called `tsconfig.json` with the following contents:

```ts
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

4. Rename all `.js` or `.jsx` file extensions in your codebase to `.tsx`, **except for setupProxy.js**. Leave `setupProxy.js` as a js file.

In the future, if you ever write any typescript files in your codebase that are not react components, for example, library functions for authorization, you can use the `ts` extension for this rather than `tsx`. `tsx` must be used for any React components. All the files in the starter code are React components, so everything should be made a `.tsx` file for now.

5. `npm start` to run your project.

Once you do this, you'll see your first few typescript errors.

```ts
TS7006: Parameter 'e' implicitly has an 'any' type.
    18 |   }
    19 |
  > 20 |   async function handleSubmit(e) {
       |                               ^
    21 |     e.preventDefault()
    22 |     console.log('Add your submit code in here')
    23 |   }
```

The reason for this is because events can mean many things in JS (different kinds of events), and so you need to tell it what kind of event you're dealing with.

In our case, it's going to be a `SyntheticEvent` (a fake react event wrapper around the real thing). You can import this from React, VSCode will autosuggest the fix. So the updated line is:

```ts
function handleChange(e: SyntheticEvent) {
```

Once you've updated all 4 of these, you'll see more linting errors in 2 places. This is because `event.target` can also mean many different things in JavaScript, you can have many different target types with different values, all of it implicit, and hard to reason about.

We make it explicit by declaring it's **type**. Here's one way to do it:

```ts
const { name, value } = e.target as HTMLInputElement
```

This declares we're dealing with an `input` element specifically, not another kind of element.

After this, your starter code should be running! Go to `localhost:3000` in the browser and take a look!