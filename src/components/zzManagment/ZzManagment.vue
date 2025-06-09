<template>
  <div class="background">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane label="资质管理" v-if="parsedPagesStoreValue.Permission === 'government'">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="矿山" width="150" />
          <el-table-column prop="name" label="公司名字" width="120" />
          <el-table-column prop="state" label="法人" width="120" />
          <el-table-column prop="city" label="注册地址" width="120" />
          <el-table-column prop="address" label="责任人" width="120" />
          <el-table-column prop="zip" label="安全监测负责人" width="140" />
          <el-table-column prop="level" label="资质等级" width="600" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="dialogDetailVisible = true">
                详情
              </el-button>
              <el-button link type="primary" size="small" @click="dialogEditVisible = true">
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="资质申报" v-if="parsedPagesStoreValue.Permission === 'company'">
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="auto" class="demo-ruleForm" :size="formSize"
          status-icon>
          <el-form-item label="矿山" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="公司地址" prop="region">
            <el-input v-model="ruleForm.region" />
          </el-form-item>
          <el-form-item label="公司名字" prop="count">
            <el-input v-model="ruleForm.count" />
          </el-form-item>
          <el-form-item label="开始时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%" />
              </el-form-item>
            </el-col>
            <el-col class="text-center" :span="2">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%" />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="是否允许生产" prop="delivery">
            <el-switch v-model="ruleForm.delivery" />
          </el-form-item>
          <el-form-item label="资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio value="综合甲级">综合甲级</el-radio>
              <el-radio value="乙级">乙级</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item>
          <el-form-item class="button-group">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              申请
            </el-button>
            <el-button @click="resetForm(ruleFormRef)"> 重置 </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- 业务管理 -->
      <el-tab-pane label="业务管理" v-if="parsedPagesStoreValue.Permission === 'government'">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="name" label="申请公司" width="150" />
          <el-table-column prop="name" label="申请业务" width="120" />
          <el-table-column prop="state" label="申请人" width="120" />
          <el-table-column prop="date" label="申请时间" width="120" />
          <el-table-column prop="addressKuang" label="申请矿山" width="120" />
          <el-table-column prop="level" label="资质等级" width="600" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="dialogDetailVisible = true">
                详情
              </el-button>
              <el-button link type="primary" size="small" @click="dialogEditVisible = true">
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 业务申报 -->
      <el-tab-pane label="业务申报" v-if="parsedPagesStoreValue.Permission === 'company'">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="name" label="申请公司" width="150" />
          <el-table-column prop="name" label="申请业务" width="120" />
          <el-table-column prop="state" label="申请人" width="120" />
          <el-table-column prop="date" label="申请时间" width="120" />
          <el-table-column prop="addressKuang" label="申请矿山" width="120" />
          <el-table-column prop="level" label="资质等级" width="120" />
          <el-table-column prop="zhuangtai" label="申请状态" width="600">
            <template #default="scope">
              <el-tag
                :type="scope.row.zhuangtai === '审批中' ? 'warning' : scope.row.zhuangtai === '通过' ? 'success' : 'danger'">{{
                  scope.row.zhuangtai }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="dialogDetailVisible = true">
                详情
              </el-button>
              <el-button link type="primary" size="small" @click="dialogEditVisible = true">
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <el-dialog v-model="dialogDetailVisible">
      <el-descriptions title="山西煤矿" direction="vertical" border style="margin-top: 20px">
        <el-descriptions-item :rowspan="2" :width="140" label="矿山名字" align="center">
          <el-image style="width: 100px; height: 100px"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </el-descriptions-item>
        <el-descriptions-item label="公司名字">****</el-descriptions-item>
        <el-descriptions-item label="法人">张三</el-descriptions-item>
        <el-descriptions-item label="地址">成都</el-descriptions-item>
        <el-descriptions-item label="资质等级">
          <el-tag size="small">甲级</el-tag>
        </el-descriptions-item>
        <el-descriptions-item class="footer" label="其他信息">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <el-dialog v-model="dialogEditVisible">
      <el-form ref="ruleFormRef" :model="ruleForm" label-width="auto" class="demo-ruleForm" :size="formSize"
        status-icon>
        <el-form-item label="矿山" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="公司地址" prop="region">
          <el-input v-model="ruleForm.region" />
        </el-form-item>
        <el-form-item label="公司名字" prop="count">
          <el-input v-model="ruleForm.count" />
        </el-form-item>
        <el-form-item label="开始时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="是否允许生产" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio value="综合甲级">综合甲级</el-radio>
            <el-radio value="乙级">乙级</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item class="button-group">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            创建
          </el-button>
          <el-button @click="resetForm(ruleFormRef)"> 重置 </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ComponentSize, ElMessage, FormInstance } from "element-plus";

const dialogDetailVisible = ref(false);
const dialogEditVisible = ref(false);

const pagesStoreValue = localStorage.getItem("loginUser")
const parsedPagesStoreValue = ref(pagesStoreValue ? JSON.parse(pagesStoreValue) : null)


const tableData = [
  {
    date: "2023-01-01",
    name: "****",
    state: "张三",
    city: "成都",
    address: "李四",
    zip: "王五",
    level: "甲级",
    zhuangtai: "审批中",
    addressKuang: "青海A矿山"
  },
  {
    date: "2023-01-01",
    name: "****",
    state: "张三",
    city: "成都",
    address: "李四",
    zip: "王五",
    level: "甲级",
    zhuangtai: "通过",
    addressKuang: "青海A矿山"
  },
  {
    date: "2023-01-01",
    name: "****",
    state: "张三",
    city: "青海",
    address: "王五",
    level: "甲级",
    zhuangtai: "未通过",
    addressKuang: "西藏B矿山"
  },
  {
    date: "2023-01-01",
    name: "****",
    state: "张三",
    city: "成都",
    address: "李四",
    zip: "王五",
    level: "甲级",
    zhuangtai: "通过",
    addressKuang: "青海B矿山"
  },
  {
    date: "2023-01-01",
    name: "****",
    state: "张三",
    city: "成都",
    zhuangtai: "未通过",
    addressKuang: "西藏A矿山"
  },
  // ... 其他数据项
];

// 表单数据定义
interface RuleForm {
  name: string;
  region: string;
  count: string;
  date1: string;
  date2: string;
  delivery: boolean;
  location: string;
  type: string[];
  resource: string;
  desc: string;
}

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "Hello",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  location: "",
  type: [],
  resource: "",
  desc: "",
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: '提交成功！',
        type: 'success',
      })
    } else {
      console.log("提交失败！", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped>
.background {
  position: absolute;
  left: 135px;
  top: 10px;
  border-radius: 10px;
  overflow: auto;
  width: calc(100% - 145px);
  height: calc(100% - 20px);
  background-color: white;
}
</style>