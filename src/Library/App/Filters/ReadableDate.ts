import * as Moment from 'moment';
import AbstractFilter from './AbstractFilter';
import Config from '../../../Config';

/**
 * This filter formats a date taking into consideration the user's locale value.
 */
export default class Date extends AbstractFilter
{
    /**
     * Run the filter.
     */
    run(value: string): string
    {
        let settings = this.store.getters.app.user.settings;

        return Moment(value).locale(settings.language)
            .format(Config.app.system.dateAndTime.dateFormat);
    }
}
