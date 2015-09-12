import React from 'react';
import ReactDOM from 'react-dom';

let data = {
  friends: [
    {
      name: 'Daiwei',
      imageUrl: 'http://facebook.github.io/react/img/logo.svg'
    },
    {
      name: 'Anqi',
      imageUrl: 'http://facebook.github.io/react/img/logo.svg'
    },
    {
      name: 'Lu',
      imageUrl: 'http://facebook.github.io/react/img/logo.svg'
    }
  ]
};

let FriendCell = ({name, imageUrl, unreadCount}) => (
  <div>
    <img src={imageUrl} />
    <span>{name}</span>
    <span>{unreadCount}</span>
  </div>
);

let FriendsList = ({friends}) => (
  <ol>{
    friends.map(friend => <FriendCell key={friend.name} {...friend} />)
  }</ol>
);

let Root = ({friends}) => {
  return (
    <FriendsList friends={friends}/>
  );
};

ReactDOM.render(<Root {...data} />, document.getElementById('app'));
