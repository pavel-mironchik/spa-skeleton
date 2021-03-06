import { AbstractHandler } from './AbstractHandler';
import { Notification }    from '../App/State/Models/Notification';
import Notifications       from '../App/Notifications';

/**
 * Handle events that should make changes to the App state machine module.
 */
export class AppHandler extends AbstractHandler
{
    /**
     * Handle the `App\Models\User\Updated` event.
     */
    public 'Models.User.Updated'(event: any): void
    {
        let authenticatedUser = this.vue.$store.getters.app.user;

        if (event.data.id === authenticatedUser.id) {
            this.vue.$store.commit('user/UPDATE_AUTHENTICATED_USER', event.data);
        }
    }

    /**
     * Handle the `Bloom\Cluster\Kernel\App\Events\App\SettingsUpdated` event.
     */
    public '.Bloom\\Cluster\\Kernel\\App\\Events\\App\\SettingsUpdated'(event: any): void
    {
        this.vue.$store.commit('app/SET_SETTINGS', event.data);
    }

    /**
     * Handle the `Bloom\Cluster\Kernel\App\Events\App\AppUpdated` event.
     */
    public '.Bloom\\Cluster\\Kernel\\App\\Events\\App\\AppUpdated'(event: any): void
    {
        this.vue.$store.commit('app/SET', {
            key: 'updateAvailable',
            value: true
        });
    }

    /**
     * Handle the `.Bloom\Cluster\Kernel\App\Events\NotificationSent` event.
     */
    public '.Bloom\\Cluster\\Kernel\\App\\Events\\NotificationSent'(event: any): void
    {
        let notification = event.response;

        Notification.insertOrUpdate({ data: notification });

        let user = this.vue.$store.getters.app.user;

        if (! user.settings.notifications.desktopNotifications) {
            return;
        }

        let desktopNotification = new Notifications[notification.type](this.vue,  notification);

        if (! desktopNotification) {
            return;
        }

        desktopNotification.show();
    }
}
