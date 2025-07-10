<template>
    <div class="background">
        <el-tabs tab-position="top" style="height: 200px; margin-left: 20px; margin-top: 10px;" class="demo-tabs">
            <el-tab-pane v-for="item in filteredLabels" :key="item.value" :label="item.label">
                <el-date-picker v-model="value" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
                    :shortcuts="shortcuts" :size="size" style="margin-left: 40px; margin-top: 5px;"/>
                <el-button type="primary" @click="dialogVisible = true" style="margin-top: 5px;">编辑</el-button>
                <el-button type="primary" @click="exportLog" style="margin-top: 5px;">导出日志</el-button>
                <el-divider />
                <div v-html="item.data" style="margin-left: 40px;"></div>
                <el-table :data="item.logs" style="width: 80%; margin-left: 50px; margin-top: 5px;">
                    <el-table-column prop="time" label="时间" width="180"></el-table-column>
                    <el-table-column prop="user" label="用户" width="180"></el-table-column>
                    <el-table-column prop="action" label="操作" width="180"></el-table-column>
                    <el-table-column prop="details" label="详情" width="180">
                        <!-- <template #default="scope">
                            <el-button size="mini" @click="showLogDetails(scope.row)">查看</el-button>
                        </template> -->
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-dialog class="demo-dialog" v-model="dialogVisible" title="日志编辑" width="80%">
            <div style="border: 1px solid #ccc">
                <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                    mode="default" />
                <Editor style="height: 500px; overflow-y: hidden" v-model="valueHtml" :defaultConfig="editorConfig"
                    mode="default" @onCreated="handleCreated" />
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="saveLog">保存</el-button>
                    <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
                </div>
            </template>
        </el-dialog>
        <el-dialog class="demo-dialog" v-model="logDetailsVisible" title="日志详情" width="50%">
            <pre>{{ selectedLog.details }}</pre>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="logDetailsVisible = false">关闭</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ref, shallowRef, computed, onMounted, onBeforeUnmount } from "vue";

const labels = ref([
    {
        label: "登录日志",
        value: "1",
        data: "2024/01/02 登录日志",
        logs: [
            { time: "2024-01-02 09:00:00", user: "user1", action: "登录", details: "用户user1成功登录" },
            { time: "2024-01-02 10:00:00", user: "user2", action: "登录", details: "用户user2成功登录" },
        ]
    },
    {
        label: "系统工作日志",
        value: "2",
        data: "<p>2024/01/02 *** 用户频繁登陆！</p> <p>2024/01/03 数据已自动备份！</p>",
        logs: [
            { time: "2024-01-02 11:00:00", user: "admin", action: "备份", details: "系统数据已自动备份" },
            { time: "2024-01-02 12:00:00", user: "admin", action: "检查", details: "系统状态正常" },
        ]
    },
    {
        label: "数据处理日志",
        value: "3",
        data: "2024/01/02 数据处理日志",
        logs: [
            { time: "2024-01-02 13:00:00", user: "user3", action: "处理", details: "处理数据1" },
            { time: "2024-01-02 14:00:00", user: "user4", action: "处理", details: "处理数据2" },
        ]
    },
    {
        label: "数据上传日志",
        value: "4",
        data: "2024/01/02 数据上传日志",
        logs: [
            { time: "2024-01-02 15:00:00", user: "user5", action: "上传", details: "上传文件1" },
            { time: "2024-01-02 16:00:00", user: "user6", action: "上传", details: "上传文件2" },
        ]
    },
    {
        label: "工作日志",
        value: "5",
        data: "2024/01/02 工作日志",
        logs: [
            { time: "2024-01-02 17:00:00", user: "user7", action: "工作", details: "完成任务1" },
            { time: "2024-01-02 18:00:00", user: "user8", action: "工作", details: "完成任务2" },
        ]
    },
])
const pagesStoreValue = localStorage.getItem("loginUser")
const parsedPagesStoreValue = pagesStoreValue ? JSON.parse(pagesStoreValue) : null

const size = ref<"default" | "large" | "small">("default");
const value = ref("");
const shortcuts = [
    {
        text: "今天",
        value: new Date(),
    },
    {
        text: "昨天",
        value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
        },
    },
    {
        text: "一周前",
        value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
        },
    },
];
const disabledDate = (time: Date) => {
    return time.getTime() > Date.now();
};

const dialogVisible = ref(false);
const logDetailsVisible = ref(false);
const selectedLog = ref({});

// 过滤标签，只有当 parsedPagesStoreValue 为 admin 时才显示登录日志
const filteredLabels = computed(() => {
    if (parsedPagesStoreValue.Permission === 'admin') {
        return labels.value;
    } else if (parsedPagesStoreValue.Permission === 'government') {
        return labels.value.filter(item => (item.value !== '1' && item.value !== '2'))
    } else if (parsedPagesStoreValue.Permission === 'company') {
        return labels.value.filter(item => (item.value === '5'))
    }
});

// wangEditor
const editorRef = shallowRef();
const valueHtml = ref("<p>hello</p>");
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = "日志编辑";
    }, 1500);
});
const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
});

const handleCreated = (editor: any) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
};

const saveLog = () => {
    // 保存日志逻辑
    dialogVisible.value = false;
};

const exportLog = () => {
    // 导出日志逻辑
};

const showLogDetails = (log: any) => {
    selectedLog.value = log;
    logDetailsVisible.value = true;
};
</script>

<style scoped>
.background {
    position: absolute;
    left: 200px;
    top: 15px;
    border-radius: 10px;
    overflow: hidden;
    width: calc(100% - 220px);
    height: calc(100% - 30px);
    background-color: white;
}

.demo-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.dialog-footer {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
</style>