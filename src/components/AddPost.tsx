import React, { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <Input
          type='text'
          placeholder='Title'
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          placeholder='Description'
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={submitForm}>Add Post</button>
      </form>
    </div>
  );
};
