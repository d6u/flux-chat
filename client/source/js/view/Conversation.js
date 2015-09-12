import React from 'react';

let Message = ({user, text}) => {
  return (
    <div className={`o-conversation__message${user === 0 ? ' o-conversation__message--me' : ''}`}>
      <div className='o-conversation__message-text'>{text}</div>
    </div>
  )
};

let Conversation = ({messages}) => {
  let selected = false;

  if (selected) {
    return (
      <div className='o-conversation'>
        <div className='o-conversation__bg'></div>
      </div>
    );
  } else {
    return (
      <div className='o-conversation'>
        <div className='o-conversation__messages-list'>
          {messages.map((msg, i) => <Message key={i} {...msg} />)}
        </div>
        <textarea className='o-conversation__input'></textarea>
      </div>
    );
  }
};

export default Conversation;
