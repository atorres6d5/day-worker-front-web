import React from 'react';
import { Item, Image, Container} from 'semantic-ui-react'

const Review = ({date, user, review, rating, title}) => (
    <Item>
      <Item.Image name="post_user" size='tiny' src='./img/profile_placeholder.jpg' />
      <Item.Content>
        <Item.Header >{title}</Item.Header>
        <Item.Meta>{date}</Item.Meta>
        <Item.Meta>{user}</Item.Meta>
        <Item.Description>
          <Container>
            {review}
          </Container>
        </Item.Description>
        <Item.Extra>Extra</Item.Extra>
      </Item.Content>
    </Item>
);

export default Review;
