# 马达加斯加旅行读本

10 天静态旅行网页，按日期阅读行程、自然人文知识与路线。当前发布目标为 **GitHub Pages**，无需 npm 安装或构建。

- 源码仓库：https://github.com/wangliumeiagent-creator/madagascar-travel-journal
- 在线网页：https://wangliumeiagent-creator.github.io/madagascar-travel-journal/
- Agent 接手先读 [AGENTS.md](AGENTS.md) 与 [交接文档](docs/HANDOFF.md)。
- 检查：`node scripts/validate.mjs`
- 发布：提交后执行 `powershell -File scripts/publish.ps1`。main 保存源码，gh-pages 保存 dist 子树。
- `.openai/hosting.json` 保留历史 Sites 标识；当前不再自动部署 Sites。

本机 PowerShell 执行策略可能阻止 `.ps1`，不要为发布降低全局策略。可按交接文档逐条运行验证与 Git 命令。

每日路线数据与展示位于 `dist/routes.js`。总览底图 `dist/images/itinerary-overview.png` 来自用户提供的旅行社行程图，保留原图署名。每天显示活动区域高亮与地点顺序，均为示意，不是 GPS 轨迹。Google Maps 使用无需 API 密钥的官方 Maps URLs，提供城市间/已知地面段路线以及候选地点搜索；未调用地图图片或嵌入 API，不声称已核实 Google 的实际路况、导航结果或行车时间。酒店、林区和村庄待确认后可细化。

每日内容集中在 `dist/content.js`，页面与样式分别为 `dist/index.html`、`dist/style.css`，日期切换在 `dist/app.js`。无需构建。

后续补充：修改相应日期的 paragraphs、schedule、look 和 sources；将有使用授权的图片放入 dist/images，再在该天 images 数组添加 `{src:"images/文件名.jpg",alt:"画面描述",caption:"说明及署名"}`。这是一份阅读网页，不含在线编辑或上传后台。

封面：Gavinevans，Sunset on the Avenue of the Baobabs，Wikimedia Commons，CC BY-SA 3.0；页面使用 object-fit 裁切显示。来源链接在页面图片下方。

行程来自用户提供的四张截图，个人费用、保险等信息未展示。背景资料沿用对话已核对来源，地点不明确之处已标注待确认。更新后需重新发布。
