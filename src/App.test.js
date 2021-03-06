import React from 'react';
import App from './App';
import {render, fireEvent, cleanup, within} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';


const locations = [
    'Lombard St, San Francisco, CA, USA',
    'PIER 39, The Embarcadero, San Francisco, CA, USA',
    'Golden Gate Bridge, San Francisco, CA, USA',
    `Fisherman's Wharf, San Francisco, CA, USA`,
    'Alcatraz Island, San Francisco, CA, USA'
];

const IDMAPS = {
    UP_BUTTON: 'up-button',
    DOWN_BUTTON: 'down-button',
    LOCATION: 'location',
    LOCATION_LIST_PARENT: 'location-list',
    LOCATIONS: ['location-0', 'location-1', 'location-2', 'location-3', 'location-4']
};


describe('Hackermaps', () => {
    let renderApp;
    let queryByTestId;
    let getByTestId;
    let app;

    beforeAll(() => {
        renderApp = () => render(<App/>);
    });
    beforeEach(() => {
        app = renderApp();
        queryByTestId = app.queryByTestId;
        getByTestId = app.getByTestId;
    });

    afterEach(() => {
        cleanup();
    });

    const getWithin = (dataTestId, parentDataTestId) => {
        const parent = getByTestId(parentDataTestId);
        return within(parent).getByTestId(dataTestId);
    };

    const queryWithin = (dataTestId, parentDataTestId) => {
        const parent = getByTestId(parentDataTestId);
        return within(parent).queryByTestId(dataTestId);
    };

    it('Should render all the locations in the list', () => {
        const listContainer = getByTestId(IDMAPS.LOCATION_LIST_PARENT);
        expect(listContainer.children.length).toEqual(5);
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[0]).innerHTML.trim()).toEqual(locations[0].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[1].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[2].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[3].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[4]).innerHTML.trim()).toEqual(locations[4].trim());

    });

    it('Should have correct buttons for each location', () => {
        expect(queryWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[0])).toBeFalsy();
        expect(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[0])).toBeTruthy();

        expect(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[1])).toBeTruthy();
        expect(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[1])).toBeTruthy();

        expect(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[2])).toBeTruthy();
        expect(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[2])).toBeTruthy();

        expect(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[3])).toBeTruthy();
        expect(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[3])).toBeTruthy();

        expect(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[4])).toBeTruthy();
        expect(queryWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[4])).toBeFalsy();
    });

    it('Should move the location down on clicking the down button', () => {
        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[1]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[1].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[2].trim());

        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[2]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[1].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[3].trim());

        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[3]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[4]).innerHTML.trim()).toEqual(locations[1].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[4].trim());
    });

    it('Should move the location up on clicking the up button', () => {
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[4]).innerHTML.trim()).toEqual(locations[4].trim());
        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[4]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[4].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[4]).innerHTML.trim()).toEqual(locations[3].trim());

        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[3]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[4].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[2].trim());

        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[2]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[4].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[1].trim());

        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[1]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[0]).innerHTML.trim()).toEqual(locations[4].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[0].trim());
    });


    it('Should be in correct state after a series of actions' , () => {
        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[0]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[0].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[0]).innerHTML.trim()).toEqual(locations[1].trim());

        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[2]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[0].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[2].trim());

        fireEvent.click(getWithin(IDMAPS.UP_BUTTON, IDMAPS.LOCATIONS[4]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[4].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[4]).innerHTML.trim()).toEqual(locations[3].trim());

        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[2]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[3]).innerHTML.trim()).toEqual(locations[0].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[4].trim());

        fireEvent.click(getWithin(IDMAPS.DOWN_BUTTON, IDMAPS.LOCATIONS[1]));
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[2]).innerHTML.trim()).toEqual(locations[2].trim());
        expect(getWithin(IDMAPS.LOCATION, IDMAPS.LOCATIONS[1]).innerHTML.trim()).toEqual(locations[4].trim());

    })
});

