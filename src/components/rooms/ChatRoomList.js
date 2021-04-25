import React from 'react';
import { Nav } from 'rsuite';
import RoomItems from './RoomItems';

const ChatRoomList = ({ aboveElHeight }) => {
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElHeight}px)`,
      }}
    >
      <Nav.Item>
        <RoomItems />
      </Nav.Item>
    </Nav>
  );
};

export default ChatRoomList;
