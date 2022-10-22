## 1. Starting the app

1. Run `npm i`
2. Run `npm run dev`
3. Open `localhost:3000`

## 2. Folder structure

-   `/assets` - all reusable assets (images, icons, etc.)
-   `/components` - all components grouped by major features
-   `/config` - project config files
-   `/consts` - constant variables
-   `/hooks` - globally reusable hooks
-   `/pages` - file based routing
-   `/providers` - we use this folder for global contexts only
-   `/services` - folder for queries and mutations
-   `/store` - we use [Zustand](https://zustand-demo.pmnd.rs/) for global store, everything else is loaded via React Query
-   `/styles` - only global styles, rest goes into component styles
-   `/utils` - globally reusable utility functions

## 3. Data fetching

We are working with data by using [React Query](https://tanstack.com/query/v4/).
This provides us with state handling, caching, refetching, and much more.

## 4. Styling components

Styles should be kept separate from the components which contain the logic.
We are using [Emotion UI](https://emotion.sh/docs/introduction) in combination with [Mantine UI](https://mantine.dev/) library, and we keep styles in separate .jsx files within component folder.

## 5. Component folder structure example

Following is an example of component folder structure. When creating new component you will use only those folders and files that you need.
All component files are exported from a single `index.ts` file according to [this practice](https://medium.com/bootstart/you-should-be-using-folder-components-b30b7d165c39).

-   component-name
    -   /hooks
    -   /components
    -   /contexts
    -   /utils
    -   /assets
    -   component-name.tsx
    -   component-name.styles.tsx
    -   index.ts

## 6. Core technologies

-   Next JS
-   Mantine UI
-   Emotion UI
-   React Query
-   Zustand
