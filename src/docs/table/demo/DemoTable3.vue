<script lang="ts" setup>
const data: any = [
    {
        id: 1,
        name: '小明',
        age: '14',
        sex: 1,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
        hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    },
    {
        id: 2,
        name: '小卢',
        age: '24',
        sex: 1,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
        hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    },
    {
        id: 3,
        name: '小娟',
        age: '25',
        sex: 0,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
        hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    },
    {
        id: 4,
        name: '小贝',
        age: '22',
        sex: 0,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
        hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    },
    {
        id: 5,
        name: '小飞',
        age: '13',
        sex: 3,
        intro: '从小独立呼吸，讲卫生懂礼貌，不会随便捡地上的东西吃。',
        hobby: ['唱', '跳', 'rap', '游泳', '爬山', '看电影', '越野'],
    },
];

const columns = [
    {
        title: 'id',
        width: '50px',
        field: 'id',
        x: 'center',
        sticky: 'left',
        offsetX: '0px',
    },
    {
        title: '姓名',
        width: '100px',
        field: 'name',
        x: 'center',
        sticky: 'left',
        offsetX: '50px',
    },
    {
        title: '年龄',
        width: '200px',
        field: 'age',
        x: 'center',
    },
    {
        title: '性别',
        width: '200px',
        field: 'sex',
        x: 'center',
    },
    {
        title: '爱好',
        width: '400px',
        field: 'hobby',
    },
    {
        title: '介绍',
        width: '400px',
        field: 'intro',
    },
    {
        title: '操作',
        width: '120px',
        field: 'action',
        sticky: 'right',
        offsetX: '0px',
        x: 'center',
    },
];

const formatSex = (sex: number) => {
    switch (true) {
        case sex == 0:
            return '女';
        case sex == 1:
            return '男';
        default:
            return '未知';
    }
};

const set = (row: any, column: any) => {
    LewMessage.info('你可以拿到这一行的数据，例如：id=' + row.id);
    console.log(row, column);
};
const del = (row: any, column: any) => {
    LewMessage.warning('你也可以拿到这一列的数据，例如：field=' + column.field);
};
</script>

<template>
    <lew-table :data="data" :columns="columns" height="auto">
        <template #id="{ row }"> {{ row.id }} </template>
        <template #name="{ row }"> {{ row.name }} </template>
        <template #age="{ row }"> {{ row.age }} </template>
        <template #sex="{ row }"> {{ formatSex(row.sex) }} </template>
        <template #hobby="{ row }">
            <lew-flex gap="5px" x="start">
                <lew-tag
                    v-for="(item, index) in row.hobby"
                    :key="index"
                    type="info"
                    size="small"
                    >{{ item }}
                </lew-tag></lew-flex
            >
        </template>
        <template #intro="{ row }"> {{ row.intro }} </template>
        <template #action="{ row, column }">
            <lew-flex>
                <lew-button is-text @click="set(row, column)">管理</lew-button
                ><lew-button type="error" is-text @click="del(row, column)"
                    >删除
                </lew-button></lew-flex
            >
        </template>
    </lew-table>
</template>
