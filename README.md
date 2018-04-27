# Sample Flux architecture for React App

[![CodeFactor](https://www.codefactor.io/repository/github/khanhtc1202/flux-arch-sample/badge)](https://www.codefactor.io/repository/github/khanhtc1202/flux-arch-sample)

A sample React application implemented under [FLUX](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207) architecture.

## What can it do?

![Image](https://media.giphy.com/media/RkN5nA5O00StGGwXVQ/giphy.gif)

More explanation about this sample go [here](https://fromnoobstogeeks.com/2018/04/15/flux-arch/).

## Project structure

```bash
.src
├── actions
│   ├── SearchAction.ts
│   └── TypeAction.ts
├── components
│   ├── SearchResults.tsx
│   └── SearchBox.tsx
├── containers
│   ├── SearchBox.ts
│   └── SearchResults.ts
├── reducers
│   ├── Search.ts
│   ├── Type.ts
│   └── index.ts
├── index.tsx
├── state.ts
└── store.ts
```

## Usage guide

### Install dependencies

Install dependencies with `npm` using command

```bash
$ npm install
```

### Build

```bash
$ npm run build
```
