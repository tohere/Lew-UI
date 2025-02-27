<template>
    <lew-flex
        x="start"
        gap="15px"
        class="lew-checkbox-group"
        :class="`lew-checkbox-group-${direction}`"
    >
        <lew-checkbox
            v-for="option in options"
            :key="option.value"
            :block="block"
            :iconable="iconable"
            :round="round"
            :label="option.label"
            :checked="getChecked(option.value)"
            @change="check(option.value, $event)"
        />
    </lew-flex>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import LewCheckbox from './LewCheckbox.vue';

type Options = {
    label: string;
    value: string;
};
const props = defineProps({
    modelValue: {
        type: Array,
        default: () => {
            return [];
        },
        required: true,
    },
    block: {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    round: {
        type: Boolean,
        default: () => {
            return false;
        },
    },
    direction: {
        type: String,
        default: 'x',
    },
    iconable: {
        type: Boolean,
        default: true,
    },
    options: {
        type: Array as PropType<Options[]>,
        default: () => {
            return [];
        },
        required: true,
        validator: (value: Array<Options>) => {
            return value.every(
                (option) =>
                    Object.prototype.hasOwnProperty.call(option, 'label') &&
                    Object.prototype.hasOwnProperty.call(option, 'value'),
            );
        },
    },
});

const emit = defineEmits(['update:modelValue']);

const check = (_value: string, checked: boolean) => {
    let updatedValue = [...props.modelValue];

    if (checked) {
        updatedValue.push(_value);
    } else {
        updatedValue.splice(updatedValue.indexOf(_value), 1);
    }
    emit('update:modelValue', updatedValue);
};

const getChecked = (_value: string | number) => {
    return props.modelValue.includes(_value);
};
</script>
<style lang="scss" scoped>
.lew-checkbox-group {
    display: flex;
    align-items: center;
    font-size: 0px;
    flex-wrap: wrap;
}

.lew-checkbox-group.lew-checkbox-group-x {
    flex-direction: row;
}

.lew-checkbox-group.lew-checkbox-group-y {
    align-items: flex-start;
    flex-direction: column;
}
</style>
