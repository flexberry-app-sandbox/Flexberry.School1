import { Serializer as клиентыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-school-клиенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(клиентыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
