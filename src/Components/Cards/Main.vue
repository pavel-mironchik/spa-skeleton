<template>
    <v-card v-bind="$props" v-on="$listeners">
        <v-card-title class="headline" v-if="title.length">
            {{ title }}
            <v-spacer></v-spacer>
            <slot name="title-actions"></slot>
        </v-card-title>
        <v-card-subtitle v-if="subtitle.length">{{ subtitle }}</v-card-subtitle>
        <slot></slot>
        <v-card-actions v-if="$slots.actions">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">

    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export class CardMain extends Vue
    {
        /**
         * Displays linear progress bar. Can either be a String which specifies which color is
         * applied to the progress bar (any material color or theme color - primary, secondary,
         * success, info, warning, error) or a Boolean which uses the component color (set by color
         * prop - if it's supported by the component) or the primary color.
         */
        @Prop({ type: Boolean, default: false }) loading: boolean;

        /**
         * Removes card elevation shadow and adds a thin border.
         */
        @Prop({ type: Boolean, default: false }) outlined: boolean;

        /**
         * Card title.
         */
        @Prop({ type: String, default: '' }) title: string;

        /**
         * Card subtitle.
         */
        @Prop({ type: String, default: '' }) subtitle: string;
    }

    export default CardMain;

</script>
