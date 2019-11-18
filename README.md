## React Qunabu Test 

Please fully read the description below and see the included screenshots.

### Introduction

In this test your task is to display a list of Rick and Morty episodes with each episode details.

### Specification

#### API 

* We'll using [Rick and Morty API](https://rickandmortyapi.com/documentation/). 
* Lists are paginated 
* Each episode should have the same attributes
* Data is fetched by ajax, loading state must be shown. 

#### Functionality  

* We expect to see a list of episodes with in an expandable/collapsible panel for the episodes characters 
    * The expand/collapse button on the individual episode should expand/collapse the list of characters in the episodes 
    * The expand/collapse button on the top of the list expand/collapse the list of characters in all the episodes 
* The main technologies you are expected to use
    * Redux: to store the data
    * React: to display the list
* The supported browsers are: **IE11**, Firefox, Chrome, the solution expected to work on these.
  (note: **only IE11**, no backward compatibility with earlier IE is expected)
* Visual aspect of this app does not matter, but it must make sense. Please don't focus on styling. 

### Expected solution

**Your solution must be fork of this repository!**

1. **You can't add any `npm` packages!.** The main app must work with only `dependencies` delivered in `package.json` (Except of `devDependencies` that you can use for other reasons). The exception of this rule is **IE11** support. 
2. The main purpose of this test is for you to show your ability to design and implement
   bespoke SPA using React/Redux.  
   We expect a working implementation, not just a screen design.
3. Please use Redux to store the data.
4. Please use React for displaying the list.
5. The app must be published in the [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) and the link must be published in this file. 
6. Code must be documented. 

### Sketches of the app 

* List of episodes
```
* Episodes [+]
> * episode 1 [+]
> * episode 2 [+]
> * episode 3 [+]
> * episode 4 [+]
> * episode 5 [+]
* 
> * next page
```

* One episode expanded 
```
* Episodes [+]
> * episode 1 [-]
> * * id: 1
> * * name: bla bla 
> * * air_date: 1st Oct 2017
> * * episode: rm123
> * * characters: 1
> * * * Rick 
> * * * Morty
> * * * ... 
> * episode 2 [+]
> * episode 3 [+]
> * episode 4 [+]
> * episode 5 [+]
* 
> * next page
```

* All episodes expanded 
```
* Episodes [-]
> * episode 1 [-]
...
> * episode 2 [-]
...
> * episode 3 [-]
...
> * episode 4 [-]
...
> * episode 5 [-]
...
* 
> * next page
```


### Deploy
[https://mcholcha.github.io/redux-react-test/](https://mcholcha.github.io/redux-react-test/)