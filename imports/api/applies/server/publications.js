import {Meteor} from 'meteor/meteor';
import _Collection from '../collection';

Meteor.publish('Apply.all', function() {
  return _Collection.find();
});
