import React, { forwardRef } from 'react';

const Note = forwardRef(({ content, initialPostion, ...props }, ref) => {

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: initialPostion?.x + 'px',
        top: initialPostion?.y + 'px', // Changed 'right' to 'top' assuming positioning
        border: '1px solid black',
        userSelect: 'none',
        padding: '10px',
        width: '200px',
        cursor: 'move',
        backgroundColor: 'lightyellow',
      }}
      {...props}
    >
      {content}
    </div>
  );
});

export default Note;
