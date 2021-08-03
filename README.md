# Wayhome Frontend pairing tech test

## What we're looking for
- Your approach to problem solving

- Knowledge of JS fundamentals

- Approach towards testing

- Working in a team and pairing

## What we're not looking for
- Being able to solve all the problems set in this test - *Just focus on how you'd approach a similar problem and go about your regular process*

- Your memorization skills -  *Please feel free to ask questions/Google stuff if needed*

- Styling/CSS/design skills

--- 
## Getting set up

Clone down this repo to your computer.

In the project directory, run:

`yarn` and then `yarn start` to install all the dependencies and start a dev server on port 3000.

`yarn test` to run the unit tests.


## Summary

We serve users across the UK. We have a Locations API that gives us a list of all the places that we serve, however that data is not served in the most readable way.

The users want to be able to see a list of towns where we serve within a county together.

## User Story

As a Wayhome user

I want to be able to scan the list of locations by county

So that I can quickly understand if Wayhome can help me or not

## Acceptance Criteria
**Given** I am on the locations page

**When** the page has loaded

**Then** I should see a list of counties where Wayhome is available

**And** under each county, I can see a sub-list of towns within that county where Wayhome is available

**And** each of the counties, and the towns should be listed alphabetically

---

## Notes
- [msw](https://www.npmjs.com/package/msw) is set up to handle mock server calls, so making a network call to `/locations` will give the data in the `location-data.js` file. Checkout `mocks/handlers.ts` to look at the msw setup.
