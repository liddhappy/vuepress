#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

outputPath=./blog/.vuepress/dist/
setGitGlobalConfig() {
  git config --global user.name "liddhappy"
  git config --global user.email "870886477@qq.com"
}

if [ -f "${outputPath}index.html" ];then
  echo "index.html文件存在"
else
  echo "index.html文件不存在"
  # 生成静态文件
  yarn build
fi

# 进入生成的文件夹
cd ${outputPath}

# deploy to coding
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='local deploy'
  codingUrl=git@e.coding.net:liddhappy/blog/vuepress-docs.git
else
  msg='来自github actions的自动部署'
  codingUrl=https://${CODING_TOKEN}@e.coding.net/liddhappy/blog/vuepress-docs.git
  setGitGlobalConfig
fi
git init
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf ${outputPath}
