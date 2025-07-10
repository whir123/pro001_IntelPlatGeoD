<template>
    <el-table :data="tableData" stripe style="width: 100%" height="100%">
        <el-table-column prop="date" label="注册时间" width="120" />
        <el-table-column fixed prop="name" label="账户名称" width="120" />
        <el-table-column prop="company" label="所属单位" width="180" show-overflow-tooltip />
        <el-table-column prop="role" label="拥有权限" width="180" show-overflow-tooltip />
        <el-table-column prop="address" label="地址" width="180" show-overflow-tooltip />
        <el-table-column prop="status" label="状态" width="100" show-overflow-tooltip>
            <template #default="scope">
                <el-tag :type="scope.row.status === 'normal' ? 'primary' : 'warning'" disable-transitions>
                    {{ scope.row.status }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column fixed="right" min-width="120">
            <template #header>
                <el-input v-model="search" size="small" placeholder="查找" />
            </template>
            <template #default="scope">
                <el-button v-if="auth.canDeleteUser" link type="danger" size="small" @click="deleteUser(scope.row)">
                    停用
                </el-button>
                <el-button v-if="auth.canViewDetails" link type="primary" size="small" @click="handleClick(scope.row)">
                    详情
                </el-button>
                <el-button v-if="auth.canEditUser" link type="primary" size="small" @click="editUser(scope.row)">
                    编辑
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-button v-if="auth.canAddUser" class="mt-4" style="width: 100%" @click="dialogVisible = true" type="primary">
        增加用户
    </el-button>

    <el-dialog v-model="dialogVisible" title="增加用户" width="500" :before-close="handleClose">
        <el-form :model="form" label-width="100px">
            <el-form-item label="账户名称">
                <el-input v-model="form.name" placeholder="请输入账户名称"></el-input>
            </el-form-item>
            <el-form-item label="所属单位">
                <el-input v-model="form.company" placeholder="请输入所属单位"></el-input>
            </el-form-item>
            <el-form-item label="拥有权限">
                <el-input v-model="form.role" placeholder="请输入拥有权限"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address" placeholder="请输入地址"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="form.status" placeholder="请选择状态">
                    <el-option label="正常" value="normal"></el-option>
                    <el-option label="停用" value="stopped"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

// 假设这是从后端获取的当前用户权限
const auth = {
    canAddUser: true,
    canEditUser: true,
    canDeleteUser: true,
    canViewDetails: true
}

const search = ref('')
const handleClick = () => {
    console.log('click')
}
const filterTag = (value: string, row: User) => {
    return row.tag === value
}
const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx<User>
) => {
    const property = column['property']
    return row[property] === value
}
const tableData = [
    {
        date: '2016-05-03',
        name: '张三',
        address: 'A露天矿',
        company: 'ABC Company',
        role: 'company',
        status: 'normal'
    },
    {
        date: '2016-05-02',
        name: '李四',
        address: '管理局',
        company: '管理局',
        role: 'government 业务审批',
        status: 'normal'
    },
    {
        date: '2016-05-04',
        name: '赵六',
        address: 'A露天矿',
        company: 'ABC Company',
        role: 'company',
        status: 'normal'
    },
    {
        date: '2016-05-01',
        name: '王五',
        address: 'A露天矿',
        company: 'ABC Company',
        role: 'company',
        status: 'stopped'
    }
]

const dialogVisible = ref(false)
const form = ref({
    name: '',
    company: '',
    role: '',
    address: '',
    status: ''
})

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要关闭此对话框吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

const submitForm = () => {
    // 处理表单提交逻辑
    console.log('表单数据:', form.value)
    dialogVisible.value = false
}
</script>
<style scoped>
.el-table {
    margin-bottom: 20px;
}

.el-table__header th {
    background-color: #f5f7fa;
}

.el-button--small {
    margin-right: 5px;
}

.mt-4 {
    margin-top: 20px;
}

.el-dialog {
    border-radius: 8px;
}

.el-dialog__header {
    border-bottom: 1px solid #e8eaec;
    padding-bottom: 10px;
}

.el-dialog__body {
    padding: 20px;
}

.el-dialog__footer {
    border-top: 1px solid #e8eaec;
    padding-top: 10px;
}
</style>