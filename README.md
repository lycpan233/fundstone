# fundstone

## 介绍

一个基于 egg + seqquelize + mysql 的后台管理系统。

## 开始指南

### 运行环境

- Nodejs: v20.14.0
- 包管理工具:  pnpm 8.14.0
- 数据库: mysql 5.7.40

### 安装依赖

`pnpm install`

### 启动服务

`pnpm run dev`

### 运行测试

`pnpm run test`

### 部署服务
> 待补充....


## 数据库迁移

### 配置环境变量

- 文件目录: {{proeject_root}}/datebase/config.json
- 根据开发环境配置数据库连接信息

### 运行迁移

`npx sequelize-cli db:migrate`

### 撤销迁移

`npx sequelize-cli db:migrate:undo`