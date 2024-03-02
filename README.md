## React-Redux

### Created 2 Project to use React-Redux and ReduxToolkit

1. What is Redux?

- Redux is a state management library for JavaScript applications.
- Which is commonly used with React.js for managing the state of an application in a predictable way.

2. What is React-Redux?

- React-Redux is the official binding library that connects React components with the Redux state management library, facilitating the integration of Redux state management into React applications.

3. What is Redux-Toolkit?

- Redux Toolkit is the official, opinionated, and efficient set of tools and utilities for building Redux applications, providing simplified configuration, structured logic, and concise syntax.

### So Basically while configuring we need to first install the packages

```node
npm install @reduxjs/toolkit
npm install react-redux
```

### Redux Toolkit includes these APIs:

1. configureStore()

- wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

#### Configuring a Store

```Javascript
// Creating a src/store/store.js

// importing configureStore from ReducToolkit
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

2. createReducer()

- that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements.

3. createAction():

- generates an action creator function for the given action type string.

4. createSlice():

- accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
