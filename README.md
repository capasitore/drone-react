# Drone UI for Parrot Minidrones
Just for fun, built using React / Express and Socket.io.

## Usage Instructions
- `yarn install`
- Connect to minidrone via Bluetooth (instructions below)
- Add your minidrones network name to the 'droneName' property in config.js
- `yarn start`
- Browser will open control window in new tab
## How to connect to a minidrone via Bluetooth on a Mac
You won't be able to find the minidrone via a normal bluetooth device search as minidrones emit BTLE (Bluetooth Low Energy) connections. To connect to this, follow these instructions...

- Install XCode
- In the top menu, go to Xcode > Open Developer Tool > More Developer Tools
- This will open a page in your browser.
- Download and install the latest 'Additional Tools for XCode' binary.
- Open Hardware > Bluetooth Explorer
- In the top menu, go to Devices > Low Energy Devices
- Search for your drone and click 'Connect'

## Run Jest Unit Tests
- `yarn test`

## Thanks to
- [This parrot mini-drone node library](https://github.com/fetherston/npm-parrot-minidrone).
- [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) for making get started on building a React app so easy! a starting point for the controller CSS.
- Credits:
  - Drone icon by mikicon from the Noun Project
