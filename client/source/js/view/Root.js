import React from 'react';
import FriendsList from './FriendsList';
import Conversation from './Conversation';

let Root = ({friends}) => (
  <div className='o-root'>
    <FriendsList friends={friends} />
    <Conversation />
  </div>
);

export default Root;
