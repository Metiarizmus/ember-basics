import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class PostRoute extends Route {
  async model(postId) {
    const comments = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' +
        Object.values(postId) +
        '/comments'
    );
    const postComments = await comments.json();

    const post = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + Object.values(postId)
    );
    const postResponse = await post.json();

    return RSVP.hash({
      comments: postComments,
      post: postResponse,
    });
  }
}
