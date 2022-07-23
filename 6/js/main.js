import { createPost } from './data';
import { addPictures } from './miniaturs';
import { photosLibrary } from './data';

function similarPosts () {
  return Array.from({length: 25}, createPost);
}

similarPosts ();

addPictures (photosLibrary);

