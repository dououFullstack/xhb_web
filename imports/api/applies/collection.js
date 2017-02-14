import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const _Modle = Class.create({
  name: 'Apply',
  collection:  new Mongo.Collection('applies'),
  fields: {
    type             : String,
    platform         : String,
    request_counts   : String,
    developer_counts : String,
    kind             : String,
    intro            : String,
    name             : String,
    mobile           : String,
    address          : String,
    postcode         : String,
  }
});
export default _Modle;
