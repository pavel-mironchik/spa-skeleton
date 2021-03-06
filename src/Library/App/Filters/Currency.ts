import { AbstractFilter } from './AbstractFilter';

/**
 * Currency filter.
 *
 * @param value
 */
export class Currency extends AbstractFilter
{
    /**
     * Run the filter.
     */
    public run(): (value: string) => string
    {
        return (value: string): string =>
        {
            let settings = this.store.getters.app.user.settings;

            return new Intl.NumberFormat(settings.language, {
                style: 'decimal',
                currency: 'SEK',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(parseInt(value));
        }
    }
}
