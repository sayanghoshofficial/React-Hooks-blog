import { useState } from 'react';
// import { css } from 'styled-components';
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? 'blue' : '#4caf50')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${
    (props)=> props.primary && css `
    border: 2px solid ${props.bgColor}`
  }
`;

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handledSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handledSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        {/* <StyledButton primary bgColor ='blue'>Create Post</StyledButton> */}
        <StyledButton>Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
