import axios from 'axios';

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const { data } = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
  return data;
};

export const fetchDetails = async postId => {
  const { data } = await axios.get(
    `${JSON_PLACEHOLDER_BASE_URL}/posts/${postId}/comments`
  );
  return data;
};
// import axios from 'axios';

// export const fetchPosts = async () => {
//   const { data } = await axios.get(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return data;
// };

// export const fetchDetails = async postId => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   return data;
// };
