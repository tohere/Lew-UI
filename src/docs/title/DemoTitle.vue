<script setup lang="ts">
import {
    DemoTitle1,
    DemoTitle2,
    DemoTitle1_code,
    DemoTitle2_code,
} from './demo';
import { ref } from 'vue';

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
        param: 'size',
        description: '标题尺寸大小',
        type: 'string(px)',
        default: '24px',
    },
    {
        param: 'bold',
        description: '粗体值',
        type: `100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`,
        default: '500',
    },
]);
</script>
<template>
    <div class="demo-wrapper">
        <lew-title>Title</lew-title>
        <lew-demo-box title="普通" :code="DemoTitle1_code">
            <demo-title1 />
        </lew-demo-box>
        <lew-demo-box title="粗体" :code="DemoTitle2_code">
            <demo-title2 />
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
