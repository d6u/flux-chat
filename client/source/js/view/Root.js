import React from 'react';
import FriendsList from './FriendsList';
import Conversation from './Conversation';

let Root = ({friends, messages}) => (
  <div className='o-root'>
    <FriendsList friends={friends} />
    <Conversation messages={messages}/>
  </div>
);

export default Root;
