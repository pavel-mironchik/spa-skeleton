<script lang="ts">

    import { VNode }                   from 'vue';
    import { Component, Mixins, Prop } from 'vue-property-decorator';
    import { Config }                  from '../../Config';
    import { Input }                   from './Input.vue';

    /**
     * This mixin can be used in order to create text fields.
     *
     * It is possible to override any of the value of the props by defining a computed value with
     * the same name.
     */
    @Component
    export class TextField extends Mixins(Input)
    {
        /**
         * Make the input required.
         */
        @Prop({ type: Boolean, default: false }) required: boolean;

        /**
         * Input type.
         */
        @Prop({ type: String, default: '' }) type: string;

        /**
         * Field step size.
         */
        @Prop({ type: String, default: '1'}) step: string;

        /**
         * Maximum value.
         */
        @Prop(String) max: string;

        /**
         * Minimum value.
         */
        @Prop(String) min: string;

        /**
         * Input mask.
         */
        @Prop({ type: String, default: '' }) mask: string;

        /**
         * Input field prefix.
         */
        @Prop({ type: String, default: '' }) prefix: string;

        /**
         * Suffix.
         */
        @Prop({ type: String, default: '' }) suffix: string;

        /**
         * Placeholder.
         */
        @Prop({ type: String, default: '' }) placeholder: string;

        /**
         * Display the text field with a "solo" style.
         */
        @Prop({ type: Boolean, default: false }) solo: boolean;

        /**
         * Prepend an icon to the text field.
         */
        @Prop({ type: String, default: '' }) prependIcon: string;

        /**
         * Prepend an icon to the text field.
         */
        @Prop({ type: String, default: '' }) appendIcon: string;

        /**
         * Make the text field clearable.
         */
        @Prop({ type: Boolean, default: false }) clearable: boolean;

        /**
         * Creates counter for input length; if no number is specified, it defaults to 25. Does
         * not apply any validation.
         */
        @Prop(Number) counter: number;

        /**
         * Returns the unmodified masked string.
         */
        @Prop({ type: Boolean, default: false }) returnMaskedValue: boolean;

        /**
         * Applies the alternate filled input style.
         */
        @Prop({ type: Boolean, default: false }) filled: boolean;

        /**
         * Applies the alternate outline input style.
         */
        @Prop({ type: Boolean, default: undefined }) outlined: boolean;

        /**
         * Hides hint, validation errors
         */
        @Prop({ type: Boolean, default: false }) hideDetails: string;

        /**
         * Removes elevation (shadow) added to element when using the solo or solo-inverted props
         */
        @Prop({ type: Boolean, default: false }) flat: boolean;

        /**
         * Reduces element opacity until focused.
         */
        @Prop({ type: Boolean, default: false }) soloInverted: boolean;

        /**
         * Reduces the input height.
         */
        @Prop({ type: Boolean, default: false }) dense: boolean;

        get _outlined(): boolean
        {
            if (this.outlined === undefined) {
                return Config.ui.components.textField.defaultStyle === 'outlined';
            }

            return this.outlined;
        }

        mounted(): void
        {
            // This is a work-around needed in order to prevent Vuetify text-input mask to trigger
            // the validation too soon.
            let input = this.$el.querySelector('input');

            if (! input) {
                return;
            }
        }

        render(createElement: Function): VNode
        {
            let self = this;

            let props = {
                ...self.$props,
                value: self.value
            };

            let directives = [];

            if (this.mask.length) {
                directives.push({
                    name: 'mask',
                    value: self.mask
                });
            }

            return createElement('v-text-field', {
                attrs: {
                    name: self.name,
                    type: self.type,
                    step: self.step,
                    min: self.min,
                    max: self.max
                },
                directives,
                props,
                on: this.$listeners
            });
        }
    }

    export default TextField;

</script>
