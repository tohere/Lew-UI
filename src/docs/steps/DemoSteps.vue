<script setup lang="ts">
import { ref } from 'vue';
import {
    DemoSteps1,
    DemoSteps2,
    DemoSteps3,
    DemoSteps1_code,
    DemoSteps2_code,
    DemoSteps3_code,
} from './demo';

const columns = [
    {
        title: '参数名',
        width: '200px',
        field: 'param',
    },
    {
        title: '描述',
        width: '320px',
        field: 'description',
    },
    {
        title: '类型',
        width: 'auto',
        field: 'type',
    },
    {
        title: '默认值',
        width: '200px',
        field: 'default',
    },
];
const docsTable = ref([
    {
        param: 'value',
        description: '显示内容',
        type: 'string | number',
        default: 'undefined',
    },
    {
        param: 'type',
        description: '显示类型',
        type: `default | success | error | warning | info`,
        default: 'default',
    },
    {
        param: 'round',
        description: '形状，是否为圆形。',
        type: 'boolean',
        default: 'false',
    },
]);
</script>

<template>
    <div class="demo-wrapper">
        <lew-title>Steps</lew-title>
        <lew-demo-box title="普通" :code="DemoSteps1_code">
            <demo-steps1 />
        </lew-demo-box>
        <lew-demo-box title="点" :code="DemoSteps2_code">
            <demo-steps2 />
        </lew-demo-box>
        <lew-demo-box title="直接使用" :code="DemoSteps3_code">
            <demo-steps3 />
        </lew-demo-box>
        <lew-title size="16px">Props</lew-title>
        <lew-table :data="docsTable" :columns="columns" height="auto">
            <template #param="{ row }"> {{ row.param }} </template>
            <template #description="{ row }"> {{ row.description }} </template>
            <template #type="{ row }"> {{ row.type }} </template>
            <template #default="{ row }"> {{ row.default }} </template>
        </lew-table>
    </div>
</template>
