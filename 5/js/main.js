import { createPost } from './data';

function similarPosts () {
  return Array.from({length: 25}, createPost);
}

similarPosts ();

