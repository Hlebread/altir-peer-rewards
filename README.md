# React Native Template

This template for React Native contains basic settings for the **editor**, **Eslint**, **Prettier**, **Commit-Lint**, **Husky**, **Lint-Staged** and a set of **npm scripts** to speed up the development process and use a single style of coding and writing commits.

## Table of Contents

- [React Native Template](#react-native-template)
  - [Table of Contents](#table-of-contents)
  - [Local Installation](#local-installation)
    - [1. Set up the development environment 🌳](#1-set-up-the-development-environment-)
    - [2. Clone repository ♊](#2-clone-repository-)
    - [3. Configure project 🛠️](#3-configure-project-️)
      - [3.1 Install project dependencies](#31-install-project-dependencies)
      - [3.2 Run prepare scripts](#32-run-prepare-scripts)
  - [Usage](#usage)
    - [Development 🧑‍💻](#development-)
      - [1. Start Metro bundler](#1-start-metro-bundler)
      - [2. Start application](#2-start-application)
    - [Release 🏗️](#release-️)
  - [🤝 Contact with me](#-contact-with-me)

## Local Installation

### 1. Set up the development environment 🌳

To set up your development environment, follow the instructions from the official React Native [**documentation**](https://reactnative.dev/docs/environment-setup).

### 2. Clone repository ♊

```bash
git clone https://github.com/Hlebread/React-Native-Blueprint.git
```

or if you have installed SSH

```bash
git clone git@github.com:Hlebread/React-Native-Blueprint.git
```

### 3. Configure project 🛠️

Install the package manager [**yarn**](https://yarnpkg.com/getting-started/install) and run:

#### 3.1 Install project dependencies

```bash
yarn
```

Run form project root directory

```bash
cd ios && pod repo update && pod install && pod update && cd ..
```

#### 3.2 Run prepare scripts

This script will install git hooks

```bash
yarn husky:install
```

## Usage

### Development 🧑‍💻

#### 1. Start Metro bundler

To start Metro bundler, run:

```bash
yarn start
```

#### 2. Start application

-  To start the application in the iOS emulator, run:

```bash
yarn ios
```

- 🤖 To start the application in the Android emulator, run:

```bash
yarn android
```

### Release 🏗️

- Official React Native Android release [**documentation**](https://reactnative.dev/docs/signed-apk-android)
- Official React Native iOS release [**documentation**](https://reactnative.dev/docs/publishing-to-app-store)

## 🤝 Contact with me

<p>
  <a href="https://www.linkedin.com/in/gleb-makhankov/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a> &nbsp;
  <a href="https://github.com/Hlebread/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/tskMh.png" alt="github"> GitHub
  </a>
</p>
