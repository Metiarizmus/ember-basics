import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default class PostModel extends Model {
  @attr title;
  @attr body;
  @attr userId;
}
