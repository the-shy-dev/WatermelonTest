import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class User extends Model {
    static table = 'users'
    static allocations = {
        websites: { type: 'belongs_to', key: 'website_id'}
    }

    @field('fullname') fullName
    @field('email') email
    @field('website_id') websiteID

    @relation('websites', 'website_id') website
}
