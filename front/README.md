## 1. Starting the app
1. Run `npm i`
2. Run `npm run dev`
3. Open `localhost:3000`

## 2. Starting the app in different environments
--- COMING SOON

## 3. Folder structure
- `/assets` - all reusable assets (images, icons, etc.)
- `/components` - all complex components grouped by major features
- `/config` - project config files
- `/consts` - constant variables
- `/gc-components` - gun config wrapper components for basic Mantine components
- `/hooks` - globally reusable hooks
- `/pages` - file based routing
- `/providers` - we use this folder for global contexts only
- `/services` - folder for queries and mutations
- `/store` - we use [Zustand](https://zustand-demo.pmnd.rs/) for global store, everything else is loaded via React Query
- `/styles` - only global styles, rest goes into component styles
- `/utils` - globally reusable utility functions

## 4. Data fetching
We are working with data by using [React Query](https://tanstack.com/query/v4/).
This provides us with state handling, caching, refetching, and much more.

## 5. Styling components
Styles should be kept separate from the components which contain the logic.
We are using [Emotion UI](https://emotion.sh/docs/introduction) in combination with [Mantine UI](https://mantine.dev/) library, and we keep styles in separate ${ComponentName}Styles.ts files within component folder.

## 6. Components

### 6.1 Folder structure
Following is an example of component folder structure. When creating new component you will use only those folders and files that you need.
Inside each component we should define ComponentProps interface, for typification props for each component.
All component files are exported from a single `index.ts` file according to [this practice](https://medium.com/bootstart/you-should-be-using-folder-components-b30b7d165c39).

- component-name
    - /hooks
    - /contexts
    - /utils
    - /assets
    - ${ComponentName}.tsx
    - ${ComponentName}Styles.ts

### 6.2 Different types of components
In our application we have 4 different types of React components
#### 6.2.1 Page components
They are located in `/pages` folder. Representation of each exact page in app. Usually they have not so much logic, 
but they show how each exact page is constructed. Also, because of NextJs, they have automatic routing by name.
#### 6.2.2 Complex components
They are located in `/components` folder. This is main block of our application. Usually they have a lot of logic. 
They are constructed from GC wrapper components.
#### 6.2.3 Basic Mantine components
They are located inside Mantine-UI library. These components have basic functionality and they already created for us :)
#### 6.2.4 GC wrapper components
They are located in `/gc-components` folder. These components are our wrappers for Mantine basic components. 
We are using them as interface for Mantine one, for decoupling connections to Mantine lib 
and also we can extend them with some custom functionality or styling.

## 7. Naming conventions

### 7.1 Namings for components
Namings style - Pascal case (SmallProductCard.tsx). Naming for style file - component name + Style (SmallProductCardStyle.tsx).

### 7.2 Namings for data classes
#### 7.2.1 For response data (Back -> Front)
Back data - PartOfApp+EntityName+Dto|Response (ConfiguratorCardDto)

Renaming for frontend data - PartOfApp+EntityName (ConfiguratorCard)

#### 7.2.2 For request data (Front -> Back)
Back === Front - RequestName+Request (CreateNFTRequest)

#### All data that we use on front end should be inside `/schema` folder

## 8. Core technologies
-   Next JS
-   Mantine UI
-   Emotion UI
-   React Query
-   Zustand

## 9. Code style
We are using [Prettier](https://prettier.io/) as code style tool
