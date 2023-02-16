import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class TypicodeAdapter extends JSONAPIAdapter {
  host = 'https://jsonplaceholder.typicode.com';
}
