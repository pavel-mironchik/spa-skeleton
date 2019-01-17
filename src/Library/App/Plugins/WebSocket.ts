import Vue             from 'vue';
import WebSocketClient from '../../WebSocket';

/**
 * This plugin makes available the WebSocket client library available to Vue as a plugin.
 *
 * It's possible to access the WebSocket client by simply referring to "this.$ws" from inside any
 * component.
 */
export default function WebSocket(vue: typeof Vue, options?: any): void
{
    // We need to bind the WebSocket client library to the Vue instance so that it's available
    // as long as the app runs.
    vue.prototype.$ws = new WebSocketClient;
};