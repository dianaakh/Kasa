import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <p key={index} className='tag'>{tag}</p>
      ))}
    </div>
  );
};

export default Tags;