import React from 'react';
import { Item, Image, Container} from 'semantic-ui-react'

const Review = ({date, user, review, rating, title}) => (
    <Item className='review'>
      <Item.Image name="post_user" size='tiny' src='./img/profile_placeholder.jpg' />
      <Item.Content>
        <Item.Header ><b>{title}</b></Item.Header>
        <Item.Meta>Date of Project: {date}</Item.Meta>
        <Item.Meta>{user}</Item.Meta>
        <Item.Description>
          {review}
        </Item.Description>
        <Item.Extra>
          <a>link to project goes here</a>
        </Item.Extra>
      </Item.Content>
    </Item>
);

export default Review;
