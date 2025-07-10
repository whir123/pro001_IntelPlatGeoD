<template>
    <div class="backup-management">
        <el-button type="primary" @click="createBackup">创建备份</el-button>
        <el-table :data="backups" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="备份名称" width="180"></el-table-column>
            <el-table-column prop="createdAt" label="创建时间" width="180"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="mini" @click="restoreBackup(scope.row)">恢复</el-button>
                    <el-button size="mini" type="danger" @click="deleteBackup(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
// import axios from 'axios';

interface Backup {
    id: number;
    name: string;
    createdAt: string;
}

const backups = ref<Backup[]>([]);

const fetchBackups = async () => {
    // 模拟数据
    const mockData: Backup[] = [
        { id: 1, name: '备份1', createdAt: '2023-10-01' },
        { id: 2, name: '备份2', createdAt: '2023-10-02' },
        { id: 3, name: '备份3', createdAt: '2023-10-03' }
    ];

    try {
        // 如果需要从API获取数据，可以保留这一行
        // const response = await axios.get('/api/backups');
        // backups.value = response.data;

        // 使用模拟数据
        backups.value = mockData;
    } catch (error) {
        ElMessage.error('获取备份列表失败');
    }
};

const createBackup = async () => {
    try {
        const newBackup: Backup = { id: Date.now(), name: '新备份', createdAt: new Date().toISOString() };
        // 如果需要向API发送请求，可以保留这一行
        // const response = await axios.post('/api/backups', { name: '新备份' });

        // 使用模拟数据
        backups.value.push(newBackup);
        ElMessage.success('备份创建成功');
    } catch (error) {
        ElMessage.error('备份创建失败');
    }
};

const restoreBackup = async (backup: Backup) => {
    ElMessageBox.confirm(`确定要恢复备份 ${backup.name} 吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            // 如果需要向API发送请求，可以保留这一行
            // await axios.put(`/api/backups/${backup.id}/restore`);

            // 使用模拟数据
            ElMessage.success('备份恢复成功');
        } catch (error) {
            ElMessage.error('备份恢复失败');
        }
    }).catch(() => {
        ElMessage.info('已取消恢复');
    });
};

const deleteBackup = async (backup: Backup) => {
    ElMessageBox.confirm(`确定要删除备份 ${backup.name} 吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            // 如果需要向API发送请求，可以保留这一行
            // await axios.delete(`/api/backups/${backup.id}`);

            // 使用模拟数据
            backups.value = backups.value.filter(b => b.id !== backup.id);
            ElMessage.success('备份删除成功');
        } catch (error) {
            ElMessage.error('备份删除失败');
        }
    }).catch(() => {
        ElMessage.info('已取消删除');
    });
};

onMounted(() => {
    fetchBackups();
});
</script>

<style scoped>
.backup-management {
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

.el-button {
    margin-bottom: 20px;
}
</style>