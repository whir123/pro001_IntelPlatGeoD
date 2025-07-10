<template>
    <div class="function-menu-allocation">
        <h2>功能菜单分配</h2>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>可用功能菜单</span>
                        </div>
                    </template>
                    <el-tree :data="availableMenus" show-checkbox node-key="id" :props="defaultProps"
                        ref="availableTree"></el-tree>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>已分配功能菜单</span>
                        </div>
                    </template>
                    <el-tree :data="allocatedMenus" show-checkbox node-key="id" :props="defaultProps"
                        ref="allocatedTree"></el-tree>
                </el-card>
            </el-col>
        </el-row>
        <el-button type="primary" @click="allocateMenus">分配</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

interface Menu {
    id: number;
    label: string;
    children?: Menu[];
}

const availableMenus = ref<Menu[]>([
    {
        id: 1,
        label: '菜单1',
        children: [
            { id: 2, label: '子菜单1-1' },
            { id: 3, label: '子菜单1-2' }
        ]
    },
    {
        id: 4,
        label: '菜单2',
        children: [
            { id: 5, label: '子菜单2-1' },
            { id: 6, label: '子菜单2-2' }
        ]
    }
]);

const allocatedMenus = ref<Menu[]>([]);

const defaultProps = {
    children: 'children',
    label: 'label'
};

const allocateMenus = () => {
    const selectedNodes = (availableTree.value as any).getCheckedNodes(false, true);
    const selectedIds = selectedNodes.map(node => node.id);

    // 将选中的节点从可用菜单中移除，并添加到已分配菜单中
    const newAvailableMenus = removeNodes(availableMenus.value, selectedIds);
    const newAllocatedMenus = [...allocatedMenus.value, ...selectedNodes];

    availableMenus.value = newAvailableMenus;
    allocatedMenus.value = newAllocatedMenus;

    ElMessage.success('功能菜单分配成功');
};

// 辅助函数：递归移除节点
const removeNodes = (menus: Menu[], ids: number[]): Menu[] => {
    return menus.filter(menu => {
        if (ids.includes(menu.id)) {
            return false;
        }
        if (menu.children && menu.children.length > 0) {
            menu.children = removeNodes(menu.children, ids);
        }
        return true;
    });
};

onMounted(() => {
    // 模拟加载数据
    // 这里不需要实际的API调用，因为数据已经定义在组件内部
});
</script>

<style scoped>
.function-menu-allocation {
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.el-row {
    margin-bottom: 20px;
}

.box-card {
    height: 400px;
    overflow: auto;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-tree {
    margin-top: 10px;
}

.el-button {
    margin-top: 20px;
}
</style>