# haolifa

## 已完成模块
- [x] 基础框架搭建
- [x] 动态生成菜单及动态路由控制
- [x] 用户登录登出
- [x] 供应商管理-供应商增删改查

## 接口问题
### 供应商管理
- ~~供应商信息获取和提交字段名称应当保持一致（如 `credentialsInfo` 在提交时叫 `credentials`）。~~
- ~~主要机构表格中为多个部门，接口上为一个(业务逻辑问题)。~~
- ~~供应商调用 `add` 接口可正常添加，但调用 `update` 接口无法更新，报数据库错误。~~
- ~~需要知道必填字段，以及必填字段长度等限制。~~
- ~~`staffInfo` 字段提交后，再获取，字段为空字符窜 （可能跟第一条有关系）。~~
### 登录及菜单
- ~~登录、菜单接口菜单应返回登录人可访问的模块标识。~~
