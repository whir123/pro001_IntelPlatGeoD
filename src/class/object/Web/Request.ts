import axios from "axios";

export class Request {
  private host = "http://127.0.0.1:8080";
  // 示例请求方法
  public async getData(endpoint: string) {
    try {
      const res = await axios.get(this.host + endpoint);
      return res.data;
    } catch (error) {
      console.error("请求失败:", error);
      throw error;
    }
  }
}
