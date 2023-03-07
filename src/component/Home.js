import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;
const PostSubTitle = styled.p`
  font-size: 13px;
`;

const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    border: 2px solid blue;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 800px) {
    border: 1px solid black;
  }
`;

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      <BlogHeading>Tech blog</BlogHeading>
      <div id="blog-by"> Sayan </div>

      {posts.map((post, index) => (
        <Post className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subTitle}</PostSubTitle>
        </Post>
      ))}
    </div>
  );
}

export default Home;

const styles = {
  heading: {
    marginTop: 20,
    fontSize: 56,
  },
};
