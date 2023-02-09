# Bank List
## Description
Bank List allow us to display a set of banks provided by an API, the first call is from the server, and laters are from local storage. The application uses Redux for the global state management with two slices: one for the data management and a second for the theme management. 
After the data was fetched, the app generates a set of buttons that allows go to a individual screen that shows the complete information of the bank. That feature is provided by a stack navigation and another tab navigator allows to se a screen with the info of this repo.

## Features
- Light/Dark theme
- Full screen navigation
- Complete state memory in the local storage

## Setup
1. Clone this repo to your desktop, enter into the folder created and install the all dependencies.
```
git clone https://github.com/HiroLestrade/bank-list
cd bank-list
npm install
```
2. Install the Expo Go in your mobile device
3. Run the server
```
npx expo start
```
4. Follow the insctructions to run in web, android or ios emulators. In case for run it on a mobile device, open Expo Go (ensure that your server and your mobile are in the same network) and the application auto-detect the server running, just push it.
