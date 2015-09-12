import React from 'react';

let FriendCell = ({name, imageUrl, unreadCount}) => (
  <div className='o-friend-cell'>
    <img className='o-friend-cell__image' src={imageUrl} />
    <span className='o-friend-cell__name'>{name}</span>
    { unreadCount > 0 && <div className='o-friend-cell__unread-count'>{unreadCount}</div> }
  </div>
);

let FriendsList = ({friends}) => (
  <div className='o-friends-list'>{
    friends.map(friend => <FriendCell key={friend.name} {...friend} />)
  }</div>
);

export default FriendsList;
