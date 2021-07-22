import { rest } from "msw";

import { locationsList } from "../locations/data/location-data";

export const handlers = [
  rest.get("/locations", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        locations: locationsList,
      })
    );
  }),
];
