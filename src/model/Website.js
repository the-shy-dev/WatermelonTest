import { Model } from '@nozbe/watermelondb'

export default class Website extends Model {
    static table = 'websites'
    static associations = {
        users: {type: 'has_many', foreignKey: 'website_id'}
    }
}
