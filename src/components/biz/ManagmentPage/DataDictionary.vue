<template>
    <div class="data-dictionary">
        <h2>数据字典管理</h2>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input v-model="searchQuery" placeholder="搜索数据字典" clearable></el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="showAddDialog = true">添加数据字典项</el-button>
            </el-col>
        </el-row>
        <el-table :data="filteredData" style="width: 99%; margin-top: 20px;">
            <el-table-column prop="id" label="ID" width="250" align="center" header-align="center"></el-table-column>
            <el-table-column prop="name" label="名称" width="250" align="center" header-align="center"></el-table-column>
            <el-table-column prop="value" label="值" width="250" align="center" header-align="center"></el-table-column>
            <el-table-column prop="description" label="描述" width="350" align="center" header-align="center"></el-table-column>
            <el-table-column label="操作" width="250" align="center" header-align="center">
                <template #default="scope">
                    <div><el-button @click="editItem(scope.row)">编辑</el-button></div>
                    <div><el-button type="danger" @click="deleteItem(scope.row)">删除</el-button></div>
                </template>
            </el-table-column>
        </el-table>


        <!-- 添加数据字典项对话框 -->
        <el-dialog title="添加数据字典项" v-model="showAddDialog" width="30%">
            <el-form :model="newItem" label-width="100px">
                <el-form-item label="名称">
                    <el-input v-model="newItem.name"></el-input>
                </el-form-item>
                <el-form-item label="值">
                    <el-input v-model="newItem.value"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="newItem.description"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="showAddDialog = false">取消</el-button>
                    <el-button type="primary" @click="addItem">确定</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 编辑数据字典项对话框 -->
        <el-dialog title="编辑数据字典项" v-model="showEditDialog" width="30%">
            <el-form :model="editedItem" label-width="100px">
                <el-form-item label="名称">
                    <el-input v-model="editedItem.name"></el-input>
                </el-form-item>
                <el-form-item label="值">
                    <el-input v-model="editedItem.value"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="editedItem.description"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="showEditDialog = false">取消</el-button>
                    <el-button type="primary" @click="updateItem">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const data = ref([
    { id: 1, name: '性别', value: 'male', description: '男性' },
    { id: 2, name: '性别', value: 'female', description: '女性' },
    { id: 3, name: '状态', value: 'active', description: '激活' },
    { id: 4, name: '状态', value: 'inactive', description: '未激活' }
]);

const searchQuery = ref('');
const filteredData = computed(() => {
    return data.value.filter(item =>
        item.name.includes(searchQuery.value) ||
        item.value.includes(searchQuery.value) ||
        item.description.includes(searchQuery.value)
    );
});

const showAddDialog = ref(false);
const newItem = ref({ name: '', value: '', description: '' });

const addItem = () => {
    const newId = data.value.length > 0 ? data.value[data.value.length - 1].id + 1 : 1;
    data.value.push({ id: newId, ...newItem.value });
    showAddDialog.value = false;
    newItem.value = { name: '', value: '', description: '' };
};

const showEditDialog = ref(false);
const editedItem = ref({ id: 0, name: '', value: '', description: '' });

const editItem = (item: any) => {
    editedItem.value = { ...item };
    showEditDialog.value = true;
};

const updateItem = () => {
    const index = data.value.findIndex(item => item.id === editedItem.value.id);
    if (index !== -1) {
        data.value[index] = { ...editedItem.value };
    }
    showEditDialog.value = false;
};

const deleteItem = (item: any) => {
    const index = data.value.findIndex(i => i.id === item.id);
    if (index !== -1) {
        data.value.splice(index, 1);
    }
};
</script>
<style scoped>
.data-dictionary {
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

.el-input,
.el-button {
    width: 100%;
}

.el-table {
    flex-grow: 1;
    overflow: auto;
}

.el-dialog {
    min-width: 400px;
}

.el-form-item {
    margin-bottom: 15px;
}
</style>