<script setup lang="ts">
import { ref } from 'vue';

let v = ref('');
let lewPopoverRef1 = ref();
let lewPopoverRef2 = ref();
const submit = () => {
    LewMessage.error(v.value || '密码不可为空');
    lewPopoverRef1.value.hide();
    lewPopoverRef2.value.hide();
};

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
        width: '400px',
        field: 'age',
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
        title: '性别',
        width: '80px',
        field: 'sex',
        x: 'center',
        sticky: 'right',
        offsetX: '0px',
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
</script>

<template>
    <lew-flex gap="20px" x="start">
        <lew-popover
            ref="lewPopoverRef1"
            trigger="click"
            placement="bottom-start"
        >
            <template #trigger>
                <lew-button>进入保险箱</lew-button>
            </template>
            <template #popover-body>
                <div class="popover-body" style="width: 300px">
                    <lew-form-item direction="y" title="请输入密码">
                        <lew-input v-model="v" />
                    </lew-form-item>
                    <lew-flex x="end">
                        <lew-button
                            type="blank"
                            size="small"
                            @click="lewPopoverRef1.hide()"
                            >取消
                        </lew-button>
                        <lew-button size="small" @click="submit()"
                            >提交
                        </lew-button>
                    </lew-flex>
                </div>
            </template>
        </lew-popover>

        <lew-popover
            ref="lewPopoverRef2"
            trigger="click"
            placement="bottom-start"
        >
            <template #trigger>
                <lew-button>展示表格</lew-button>
            </template>
            <template #popover-body>
                <div class="popover-body" style="width: 800px">
                    <lew-table :data="data" :columns="columns" height="auto">
                        <template #id="{ row }"> {{ row.id }} </template>
                        <template #name="{ row }"> {{ row.name }} </template>
                        <template #age="{ row }"> {{ row.age }} </template>
                        <template #sex="{ row }">
                            {{ formatSex(row.sex) }}
                        </template>
                        <template #hobby="{ row }">
                            <lew-flex gap="5px" x="start">
                                <lew-tag
                                    v-for="(item, index) in row.hobby"
                                    :key="index"
                                    size="small"
                                    type="info"
                                    >{{ item }}</lew-tag
                                ></lew-flex
                            >
                        </template>
                        <template #intro="{ row }"> {{ row.intro }} </template>
                    </lew-table>
                    <br />
                    <lew-flex x="end">
                        <lew-button
                            type="blank"
                            size="small"
                            @click="lewPopoverRef2.hide()"
                            >取消
                        </lew-button>
                        <lew-button size="small" @click="submit()"
                            >提交
                        </lew-button>
                    </lew-flex>
                </div>
            </template>
        </lew-popover>
    </lew-flex>
</template>

<style lang="scss" scoped>
.popover-body {
    padding: 15px;
    box-sizing: border-box;
}
</style>
