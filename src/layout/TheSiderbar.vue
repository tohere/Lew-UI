<script setup lang="ts">
import { PropType } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

type Item = {
    name: string;
    cname: string;
    path: string;
    label: string;
    type: string;
};

type Group = {
    title: string;
    items: Item[];
};

defineProps({
    group: {
        type: Array as PropType<Group[]>,
        default() {
            return [];
        },
    },
});

const toPath = (item: Item) => {
    router.push(item.path);
};
</script>

<template>
    <div class="siderbar btf-scrollbar">
        <div v-for="(list, i) in group" :key="`group${i}`" class="group">
            <div v-if="list.title" class="title">
                <span> {{ list.title }}</span>
            </div>
            <div
                v-for="(item, j) in list.items"
                :key="`siderbar${j}`"
                class="item"
                :class="{ active: route.path == item.path }"
                @click="toPath(item)"
            >
                <span class="name">
                    {{ item.name }}
                </span>
                <Lew-tag
                    v-if="item.label"
                    :type="item.type"
                    size="small"
                    style="margin-left: 10px"
                    >{{ item.label }}
                </Lew-tag>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.siderbar {
    width: 230px;
    height: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    border-right: var(--lew-border-1);
    user-select: none;

    .group {
        white-space: nowrap;
        margin-top: 20px;
        padding: 5px 0px 5px 20px;

        .title {
            margin: 20px 0px 15px 0px;
            padding: 0px 20px;
            font-size: 14px;
            font-weight: 400;
            height: 20px;
            color: var(--lew-text-color-9);
            overflow: hidden;
            span {
                display: inline-block;
            }
        }

        .item {
            display: flex;
            align-items: center;
            position: relative;
            height: 36px;
            line-height: 36px;
            padding-left: 20px;
            box-sizing: border-box;
            list-style: none;
            width: calc(100% - 20px);
            border-radius: var(--lew-form-border-radius);
            cursor: pointer;
            font-size: 14px;
            color: var(--lew-text-color-6);
        }

        .item:hover {
            color: var(--lew-text-color-0);
            background: var(--lew-bgcolor-2);
        }

        .active {
            color: var(--lew-white-text-color);
            background: var(--lew-primary-color);
        }
        .active:hover {
            color: var(--lew-white-text-color);
            background: var(--lew-primary-color);
        }
    }

    .group:last-child {
        padding-bottom: 150px;
    }
}
</style>
