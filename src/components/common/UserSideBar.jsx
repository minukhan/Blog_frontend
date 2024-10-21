import React from "react";
import styled from "styled-components";
import {
  Body2,
  Button,
  Card,
  CardAction,
  CardContent,
  H5,
  Subtitle2,
} from "ui-neumorphism";

function UserSideBar() {
  return (
    // <Wrap>
    <Card>
      <CardContent>
        <Subtitle2 secondary style={{ marginBottom: "4px" }}>
          Word of the day
        </Subtitle2>
        <H5>
          be<span>•</span>nev<span>•</span>o<span>•</span>lent
        </H5>
        <Subtitle2 secondary style={{ marginBottom: "12px" }}>
          adjective
        </Subtitle2>
        <Body2>
          well meaning and kindly.
          <br />
        </Body2>
      </CardContent>
      <CardAction>
        <Button text color="var(--primary)">
          Learn More
        </Button>
      </CardAction>
    </Card>
    // </Wrap>
  );
}

export default UserSideBar;

const Wrap = styled.div`
  border: 1px solid black;
  width: 342px;
  height: 736px;
`;
