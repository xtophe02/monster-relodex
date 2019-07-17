import React from "react";
import { Grid } from "semantic-ui-react";
import CardItem from "../card/CardItem";

const CardList = ({ data }) => {
  return (
    <Grid>
      <Grid.Row columns={3}>
        {data.slice(0, 3).map(item => {
          return (
            <Grid.Column key={item.id}>
              <CardItem name={item.name} id={item.id} email={item.email} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
      <Grid.Row columns={3}>
        {data.slice(3, 6).map(item => {
          return (
            <Grid.Column key={item.id}>
              <CardItem name={item.name} id={item.id} email={item.email} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
      <Grid.Row columns={3}>
        {data.slice(6, 9).map(item => {
          return (
            <Grid.Column key={item.id}>
              <CardItem name={item.name} id={item.id} email={item.email} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
      <Grid.Row columns={3}>
        {data.slice(9, 12).map(item => {
          return (
            <Grid.Column key={item.id}>
              <CardItem name={item.name} id={item.id} email={item.email} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default CardList;
