<script lang="ts">

    import { Component, Mixins, Prop } from 'vue-property-decorator';
    import { TextField }               from '../Mixins/TextField.vue';

    @Component
    export class TextFieldSearch extends Mixins(TextField)
    {
        /**
         * Placeholder.
         */
        @Prop({ type: String, default: 'Search...' }) placeholder: string;

        /**
         * Append an icon to the text field.
         */
        @Prop({ type: String, default: 'search' }) appendIcon: string;

        /**
         * Make the text field clearable.
         */
        @Prop({ type: Boolean, default: true }) clearable: boolean;

        /**
         * Value of the name attribute.
         */
        @Prop({ type: String, default: 'search' }) name: string;

        /**
         * Hides hint, validation errors.
         */
        @Prop({ type: Boolean, default: true }) hideDetails: string;

        /**
         * Display the text field with a "solo" style.
         */
        @Prop({ type: Boolean, default: true }) solo: boolean;
    }

    export default TextFieldSearch;

</script>
