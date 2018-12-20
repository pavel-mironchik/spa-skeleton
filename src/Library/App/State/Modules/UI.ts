import AbstractModule from '../../../State/AbstractModule';

/**
 * User interface state machine module.
 */
export default class UI extends AbstractModule
{
    constructor()
    {
        super();

        this.name = 'ui';
    }

    /**
     * UI state gtters.
     */
    getters()
    {
        return {

            /**
             * Get the UI state.
             *
             * @param state
             */
            ui: (state: any) => state
        }
    }

    /**
     * UI state mutations.
     */
    mutations()
    {
        return {

            /**
             * Show or hide the left navigationDrawer.
             *
             * @param state
             * @param value
             */
            'ui/SET_NAVIGATION_DRAWER_VISIBILITY'(state: any, value: any)
            {
                state.navigationDrawerVisible = value;
            },

            /**
             * Show or hide the right navigationDrawer.
             *
             * @param state
             * @param value
             */
            'ui/SET_RIGHT_NAVIGATION_DRAWER_VISIBILITY'(state: any, value: any)
            {
                state.rightNavigationDrawerVisible = value;
            },

            /**
             * Show or hide the notifications drawer.
             *
             * @param state
             * @param value
             */
            'ui/SET_NOTIFICATIONS_DRAWER_VISIBILITY'(state: any, value: any)
            {
                state.notificationsDrawerVisible = value;
            }
        }
    }

    /**
     * State definition.
     */
    state()
    {
        return {

            navigationDrawerVisible: true,

            rightNavigationDrawerVisible: false,

            notificationsDrawerVisible: false
        }
    }
}