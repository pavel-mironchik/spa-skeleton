export { default as Config } from './Config';
export { default as Api } from './Library/Api';
export { default as ResponseInterface } from './Library/API/ResponseInterface';
export { default as StateMachineModule } from './Library/State/Module';

/*
 * Models.
 */
export { ExtendedModel as Model } from './Library/Services/StateMachine/VuexOrm/Support/ExtendedModel';
import NotificationModel from './Library/App/State/Models/Notification';

export namespace Models {
    export class Notification extends NotificationModel {}
}

/**
 * Components
 */
export { default as BreadcrumbsMain } from './Components/Breadcrumbs/Main.vue';
export { default as CardMain } from './Components/Cards/Main.vue';
export { default as DataTableMain } from './Components/DataTables/Main.vue';
export { default as DialogMain } from './Components/Dialogs/Main.vue';
export { default as FormMain } from './Components/Forms/Main.vue';
export { default as NavigationDrawerMain } from './Components/NavigationDrawers/Main.vue';
export { default as ToolbarMain } from './Components/Toolbars/Main.vue';

/**
 * Mixins
 */
export { default as ViewPaginated } from './Components/Mixins/Views/Paginated.vue';
export { default as Subscribable } from './Components/Mixins/Subscribable.vue';
export { default as Wrapper } from './Components/Mixins/Wrapper.vue';

import App from './App';
export default App;