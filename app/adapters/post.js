import TypicodeAdapter from './typicode';

export default class PostAdapter extends TypicodeAdapter {
  pathForType() {
    return 'posts';
  }
}
