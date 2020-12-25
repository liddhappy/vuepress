## 使用

### 使用 Action 部署

直接 `push` 整个仓库,通过 github Action 自动部署

详情查看`.github/workflows/blog_ci.yaml`

目前只支持部署到 coding,可自行增加

1. 开启仓库的 Action 功能(github)
2. coding 上获取项目(个人)令牌
3. 设置 github 的`Settings/Secrets`,添加`CODING_TOKE`为`coding令牌用户名:coding令牌密码`

### 使用本地环境

在本地打包好后推送

#### 安装依赖

```bash
yarn install
```

#### 打包

```bash
yarn build
```

#### 推送到 coding

路径修改 `blog_deploy.sh`

```bash
yarn deploy
```
