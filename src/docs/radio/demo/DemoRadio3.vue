<script setup lang="ts">
import { ref } from 'vue';

let options = ref([
    { label: '宋朝', value: 1 },
    { label: '唐朝', value: 2 },
    { label: '明朝', value: 3 },
    { label: '清朝', value: 4 },
]);

let value = ref();
</script>

<template>
    <lew-flex direction="column" x="start">
        <lew-title size="14px">无图标</lew-title>
        <lew-radiobox-group
            v-model="value"
            block
            :iconable="false"
            :options="options"
        ></lew-radiobox-group>
        <br />
        <br />
        <lew-title size="14px">有图标</lew-title>
        <lew-radiobox-group
            v-model="value"
            block
            :options="options"
        ></lew-radiobox-group>
    </lew-flex>
</template>
