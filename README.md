# Psyche Mobile Apps

# Setup

1. Download [Node.js](https://nodejs.org/en/) (Note: React has issues running on versions of npm 5+, install a 4.x.x version)

* `expo` recommends using [nvm](https://github.com/creationix/nvm) to install node version 7
* If you are on windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows)
* Once `nvm` is installed run `nvm install 7`

2. Download the Expo app on your phone from your app store.
3. Install the Expo CLI `npm install exp --global`

   If your CLI install fails for a certain npm module (for example, ngrok), install with yarn instead.

   `yarn global add ngrok`

   `yarn global add exp`

4. Run `npm install` in project directory

# Running

### Expo App

* `exp start`
* Scan QR code with app

### Simulator

* iOS (Mac Only): `exp ios`
* Android: `exp android`
