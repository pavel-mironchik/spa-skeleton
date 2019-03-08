import AbstractFilter from './AbstractFilter';

/**
 * This filter formats the given file size (in bytes) into a nice string.
 */
export default class FileSize extends AbstractFilter
{
    /**
     * Run the filter.
     */
    run(): (value: string) => string
    {
        return (value: string) =>
        {
            let valueNumber = parseInt(value);
            const units = ['B', 'KB', 'MB', 'GB', 'TB'];
            const unitsCount = 1024;

            let step = 0;

            while (valueNumber >= unitsCount) {
                valueNumber /= unitsCount;
                step++;
            }

            return valueNumber + ' ' + units[step];
        }
    }
}
