import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class Website extends Model {
    static table = 'websites'
    static associations = {
        users: {type: 'has_many', foreignKey: 'website_id'}
    }

    @field('title') title
    @field('url') url

    @children('users') users
}
