import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { officeLocationRatings } from "./services";

export type StarRating = {
  text: string;
  stars: number;
};

export type Office = {
  continent: string;
  scores: Array<StarRating>;
};

async function load(
  url: string,
  callbackFn: (err, data: Office[]) => any
): Promise<React.ReactFragment> {
  try {
    const data = await officeLocationRatings(url).then(
      ({ office_locations }) => {
        return office_locations.map(
          (o) =>
            ({
              continent: o.continent,
              scores: o.scores.map((f) => ({ stars: f.stars, text: f.text }))
            } as Office)
        );
      }
    );

    return callbackFn(null, data);
  } catch (error) {
    return callbackFn(error, []);
  }
}

const RatingTable = styled.div`
  font-family: "Andale Mono", monospace;
  li {
    text-align: left;
  }
`;

export function OfficeRatingGrid({ url }: { url: string }) {
  const [state, setState] = useState<Office[]>([]);
  useEffect(() => {
    load(url, (err, data) => {
      if (err) {
        console.log({ ...err });
      } else {
        setState(data);
      }
    });
  }, [url]);

  return (
    <RatingTable>
      {state.map((o, index) => (
        <div key={index}>
          <h2>{o.continent}</h2>
          <ol>
            {o.scores.map((s, i) => (
              <li key={i}>
                {s.text} <strong>{s.stars}</strong>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </RatingTable>
  );
}
