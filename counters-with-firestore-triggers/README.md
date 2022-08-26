# Counters in Firestore with Cloud Firestore Triggers
This repository provides an example about handling counters in Firestore using [Cloud Functions for Firebase](https://firebase.google.com/docs/functions). 

[Check the article for more information](https://monogram.io/blog/handling-counters-with-firestore-triggers).

## Running the project
### 1. Install dependencies
This project is using [pnpm](https://pnpm.io/) as the package manager.
```
pnpm install
```

### 2. Run functions locally
```
pnpm start
```
The `start` script is configured to run the [Firebase Emulator](https://firebase.google.com/docs/emulator-suite), importing data from the `/emulator` folder and exporting data to the same folder on exit. When you run `pnpm start`, this script will be executed:
```
firebase emulators:start --import=./emulator --export-on-exit ./emulator
```

### 3. Play with the Emulator UI to see the functions in action
After successfully executing `pnpm start`, open the Firestore Emulator UI at [http://localhost:4000/firestore](http://localhost:4000/firestore) then add and/or delete documents from the `residents` collection to see the functions in action.
