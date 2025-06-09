<template>
  <div class="login-page">
    <div class="background-wrapper">
      <div class="login-box">
        <h1>登 录</h1>
        <form class="login-form" @submit.prevent="login">
          <div class="form-item">
            <span>账 户</span>
            <input type="text" class="input-item" v-model="username" />
          </div>
          <div class="form-item">
            <span>密 码</span>
            <input type="password" class="input-item" v-model="password" />
          </div>
          <button type="submit" class="login-btn">登 录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const User = [
  { name: 'admin', password: 'admin', Permission: 'admin' },
  { name: 'company', password: 'company', Permission: 'company' },
  { name: 'government', password: 'government', Permission: 'government' },
]

const username = ref('admin/company/government (三选一 密码相同)');
const password = ref('admin');

const login = () => {
  const matched = User.find(u => u.name === username.value && u.password === password.value)
  if (matched) {
    localStorage.setItem('loginUser', JSON.stringify(matched))
    ElMessage.success('登录成功！')
    setTimeout(() => router.replace({ path: '/home' }), 500)
  } else {
    ElMessage.error('用户名或密码错误！')
  }
}
</script>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background-color: #1d4359;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 背景图容器 */
.background-wrapper {
  width: 90vw;
  height: 90vh;
  background: url("../image/LoginPagePhone.png") no-repeat center center;
  background-size: cover;
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 登录框 */
.login-box {
  width: 60%;
  max-width: 400px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
}

.login-box h1 {
  font-size: 28px;
  margin-bottom: 15px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-item {
  text-align: left;
}

.form-item span {
  font-size: 18px;
  color: #ddd;
  margin-left: 8px;
}

.input-item {
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
}

.login-btn {
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background-color: #eb5f5d;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background-color: #e33b38;
}

/* 桌面端样式覆盖 */
@media (min-width: 769px) {
  .login-page {
    width: 100vw;
    height: 100vh;
    background-color: #1d4359;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 背景图容器 */
  .background-wrapper {
    width: 90vw;
    height: 90vh;
    background: url("../image/LoginPage.png") no-repeat center center;
    background-size: cover;
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-item span {
    font-size: 18px;
    color: black;
    margin-left: 8px;
  }

  .login-box {
    width: 400px;
    padding: 40px;
    margin-left: 52%;
  }

  .login-box h1 {
    color: #1d4359;
    font-size: 36px;
  }

  .input-item {
    color: #1d4359;
    font-size: 18px;
    padding: 12px 18px;
    border-color: #1d4359;
  }

  .login-btn {
    font-size: 20px;
    padding: 14px;
  }
}
</style>