import { Model } from '@nozbe/watermelondb'

export default class User extends Model {
    static table = 'users'
    static allocations = {
        websites: { type: 'belongs_to', key: 'website_id'}
    }
}
