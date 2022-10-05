# Altir Peer Rewards

Application that allows employees to receive and assign awards

## Table of Contents

- [Altir Peer Rewards](#altir-peer-rewards)
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
  - [Troubleshooting](#troubleshooting)
    - [Android](#android)
    - [iOS](#ios)
  - [🤝 Contact with me](#-contact-with-me)

## Local Installation

### 1. Set up the development environment 🌳

To set up your development environment, follow the instructions from the official React Native [**documentation**](https://reactnative.dev/docs/environment-setup).

> The application was developed on the following emulators:
>
> - 🤖 **Android** - Pixel 3a (5.6", 1080x2220, 440dpi), Android 12 S (Tiramisu, API 31)
> -  **iOS** - iPhone 13 Pro (15.5)

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

Run from **`ios`** directory

```bash
pod install
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

## Troubleshooting

### Android

If the following error occurs during the installation of the build on the emulator

```bash
Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.
```

Most likely the emulator is out of memory.

To fix it, go to **Android Studio** &rarr; **Device Manager** &rarr; **Virtual Device Configuration** &rarr; click **Show Andvaced Settings** &rarr; **Memory and Storage** section &rarr; set following values:

- RAM: 6144 Mb
- VM heap: 1024 Mb
- Internal Storage: 2048 Mb

This should be enough to successfully install the application on the emulator.

### iOS

If you face any errors during build step, try to clean build folder in Xcode and run build again.

If it doesn't work, try to reinstall **`pods`**.
Run from **`ios`** folder:

```bash
pod deintegrate && pod install
```

## 🤝 Contact with me

<p>
  <a href="https://www.linkedin.com/in/gleb-makhankov/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a> &nbsp;
  <a href="https://github.com/Hlebread/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/tskMh.png" alt="github"> GitHub
  </a>
</p>
