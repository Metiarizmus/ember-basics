import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default class CommentModel extends Model {
  @belongsTo postId;
  @attr name;
  @attr email;
  @attr body;
}
