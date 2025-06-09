<template>
    <div class="sso-management-page">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>SSO 登录管理</span>
                    <el-button class="button" type="primary" @click="openAddDialog">新增</el-button>
                </div>
            </template>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="username" label="用户名" width="180" />
                <el-table-column prop="email" label="邮箱" width="180" />
                <el-table-column prop="role" label="角色" width="180" />
                <el-table-column prop="status" label="状态" width="100">
                    <template #default="scope">
                        <el-tag :type="scope.row.status === 'active' ? 'success' : 'info'">
                            {{ scope.row.status }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="openEditDialog(scope.row)">
                            编辑
                        </el-button>
                        <el-button link type="danger" size="small" @click="deleteRecord(scope.row)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="total" style="margin-top: 10px;margin-left: 8px;"/>
        </el-card>

        <!-- 新增对话框 -->
        <el-dialog v-model="addDialogVisible" title="新增 SSO 登录记录" width="500" :before-close="handleClose">
            <el-form :model="addForm" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="addForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="addForm.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                    <el-input v-model="addForm.role" placeholder="请输入角色"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="addForm.status" placeholder="请选择状态">
                        <el-option label="激活" value="active"></el-option>
                        <el-option label="禁用" value="inactive"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="addDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitAddForm">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>

        <!-- 编辑对话框 -->
        <el-dialog v-model="editDialogVisible" title="编辑 SSO 登录记录" width="500" :before-close="handleClose">
            <el-form :model="editForm" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="editForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="editForm.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="角色">
                    <el-input v-model="editForm.role" placeholder="请输入角色"></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="editForm.status" placeholder="请选择状态">
                        <el-option label="激活" value="active"></el-option>
                        <el-option label="禁用" value="inactive"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="editDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitEditForm">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'

// 表格数据
const tableData = ref([
    { username: 'user1', email: 'user1@example.com', role: 'admin', status: 'active' },
    { username: 'user2', email: 'user2@example.com', role: 'user', status: 'inactive' },
    // 其他数据
])

// 分页参数
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(tableData.value.length)

// 新增对话框
const addDialogVisible = ref(false)
const addForm = reactive({
    username: '',
    email: '',
    role: '',
    status: ''
})

const openAddDialog = () => {
    addDialogVisible.value = true
}

const submitAddForm = () => {
    tableData.value.push({ ...addForm })
    addDialogVisible.value = false
    addForm.username = ''
    addForm.email = ''
    addForm.role = ''
    addForm.status = ''
}

// 编辑对话框
const editDialogVisible = ref(false)
const editForm = reactive({
    id: null,
    username: '',
    email: '',
    role: '',
    status: ''
})

const openEditDialog = (row: any) => {
    editForm.id = row.id
    editForm.username = row.username
    editForm.email = row.email
    editForm.role = row.role
    editForm.status = row.status
    editDialogVisible.value = true
}

const submitEditForm = () => {
    const index = tableData.value.findIndex(item => item.id === editForm.id)
    if (index !== -1) {
        tableData.value[index] = { ...editForm }
    }
    editDialogVisible.value = false
}

// 删除记录
const deleteRecord = (row: any) => {
    ElMessageBox.confirm('确定要删除此记录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        const index = tableData.value.findIndex(item => item.id === row.id)
        if (index !== -1) {
            tableData.value.splice(index, 1)
        }
    }).catch(() => {
        // 取消删除
    })
}

// 分页处理
const handleSizeChange = (newSize: number) => {
    pageSize.value = newSize
}

const handleCurrentChange = (newPage: number) => {
    currentPage.value = newPage
}

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要关闭此对话框吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            // 取消关闭
        })
}
</script>
<style scoped>
.sso-management-page {
    padding: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-card {
    width: 100%;
}

.button {
    margin-left: 10px;
}
</style>