# Hackermaps

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Project Specifications 

![Project Preview](https://hrcdn.net/s3_pub/istreet-assets/TmGRAMBIdTiDH4t9b4xOCg/ezgif.com-video-to-gif.gif)

The app has one component: the Navigation view. The list of locations to be displayed is already provided in the app. 

The app should implement the following functionalities:

- The locations should be initially displayed in their respective `<li>` tags in the same order in which they are provided.

- Each location can have one or two icon buttons depending on its position in the list:

  - The first location should only have the Move Down icon button. 

  - The last location should only have the Move Up icon button.

  - All the other locations should have both the Move Up and the Move Down buttons.

- Clicking on the Move Down button should move the location down by one position in the list.

- Similarly, clicking the Move Up button should move the location up by one position in the list.

- When a location is moved either up or down, it should exchange its position with the location positioned just above (if moving up) or below (if moving down).

- The list of locations is passed as props to the Navigation component.


The locations list is an array of strings, with each item representing a location in the list.

```text
Note: Utility function isLast is provided to help with computing if the current location is the last item in the list. Also, the function getClasses is present in the template to aid in rendering. Please do not modify this function. 
```

The following data-testid/class attributes are required in the component for the tests to pass:

- The parent container of the location list `<ul>` should have the data-testid attribute 'location-list'.

- Each location item in the list should have the data-testid attribute 'location-0', 'location-1', 'location-2', and so on.

- Each location name paragraph tag `<p>` should have the data-testid attribute 'location'.

- Each Move Up button should have the data-testid attribute 'up-button'.

- Each Move Down button should have the data-testid attribute 'down-button'.


Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Project Specifications 

**Read-Only Files**
- `src/App.js`
- `src/components/Navigation.js`


**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```


