import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

const ArrayTry = [
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
  "https://occ-0-5031-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3LOliuEB4SkPvMQw3bAZFjBE_euWxkiNmrI7yqrzgyhrAJGqXrqCy1EO_lXRZNbuMaB1-g2Cc_KqiVF5dlOU6lPxecn0OT-MU57Wh3-mwEOfDklSoWNPbXJrX8.jpg?r=51d",
];

const Row = styled.div`
  background: grey;
  overflow: scroll;
  display: flex;
  align-items: center;
  height: 350px;
`;

const RowInner = styled.div`
  /* background: blue; */
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  /* margin: 100px 0; */
  transition: transform 1s;

  gap: 10px;

  &:hover {
    /* transform: translateX(-50px); */
  }
`;

const Details = styled.div``;
const Card = styled.div`
  position: relative;
  display: flex;
  height: 140px;
  background-color: black;
  width: 250px;
  transition: 1s;
  flex-direction: column;
  /* justify-content: center; */
  overflow: hidden;

  &:hover {
    transform: scale(1.5);
    z-index: 5;
    height: 200px;
  }

  & * {
    width: 100%;
    text-align: center;
  }

  &:hover ${Details} {
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    transition: transform 1s;
    align-self: center;
  }
  & * {
    width: 100%;
    text-align: center;
  }
`;

export default function index() {
  const [show, setShow] = useState(false);
  return (
    <Row>
      <RowInner>
        {ArrayTry.map((number, i) => (
          <Card onMouseEnter={() => setShow(true)} key={i}>
            {/* <CardContent> */}
            <img src={number} />

            <Details>
              <div>Icons</div>
              <div>Match</div>
              <div>Genres</div>
            </Details>

            {/* </CardContent> */}
          </Card>
        ))}
      </RowInner>
    </Row>
  );
}
