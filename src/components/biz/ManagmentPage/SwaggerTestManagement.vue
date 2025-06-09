<template>
    <div class="swagger-test-management">
        <h2>Swagger API 管理</h2>
        <el-button type="primary" @click="fetchApis">刷新 API 列表</el-button>
        <el-table :data="apis" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="API 名称" width="180"></el-table-column>
            <el-table-column prop="path" label="路径" width="200"></el-table-column>
            <el-table-column prop="method" label="方法" width="100"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="mini" @click="testApi(scope.row)">测试</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import axios from 'axios';

interface Api {
    id: number;
    name: string;
    path: string;
    method: string;
}

// 模拟数据
const mockApis: Api[] = [
    { id: 1, name: '获取用户信息', path: '/api/user/info', method: 'GET' },
    { id: 2, name: '创建订单', path: '/api/order/create', method: 'POST' },
    { id: 3, name: '删除订单', path: '/api/order/delete', method: 'DELETE' },
    { id: 4, name: '更新订单状态', path: '/api/order/updateStatus', method: 'PUT' }
];

const apis = ref<Api[]>([]);

const fetchApis = async () => {
    try {
        // 使用模拟数据
        apis.value = mockApis;
        // 如果需要从实际 API 获取数据，可以取消注释以下代码
        // const response = await axios.get('/api/swagger/apis');
        // apis.value = response.data;
    } catch (error) {
        ElMessage.error('获取 API 列表失败');
    }
};

const testApi = async (api: Api) => {
    ElMessageBox.prompt(`请输入请求参数（JSON 格式）`, '测试 API', {
        confirmButtonText: '发送',
        cancelButtonText: '取消',
        inputPattern: /{.*}/,
        inputErrorMessage: '请输入有效的 JSON 格式'
    }).then(async ({ value }) => {
        try {
            const params = JSON.parse(value);
            const response = await axios({
                method: api.method.toLowerCase(),
                url: `${api.path}`,
                data: params
            });
            ElMessage.success('API 测试成功');
            console.log('API Response:', response.data);
        } catch (error) {
            ElMessage.error('API 测试失败');
            console.error('API Error:', error);
        }
    }).catch(() => {
        ElMessage.info('已取消测试');
    });
};

onMounted(() => {
    fetchApis();
});
</script>

<style scoped>
.swagger-test-management {
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