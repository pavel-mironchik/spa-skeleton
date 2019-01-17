import AbstractGuard from 'spa-skeleton/src/Library/Guards/AbstractGuard';

/**
 * UserIsAdmin guard.
 *
 * This guard allows access to the user only if he/she is an admin.
 */
export default class UserIsAdmin extends AbstractGuard
{
    /**
     * Guard name.
     */
    protected name: string = 'UserIsAdmin';

    /**
     * Run the guard.
     */
    handle(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this.store.getters.app.user.role.name === 'administrator' ?
                resolve() : reject('You\'re not an administrator. Go away.');
        });
    }
}