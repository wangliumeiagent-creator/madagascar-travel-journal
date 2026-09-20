# 马达加斯加旅行读本：Agent 交接

## 目标和现状
迁移状态（2026-09-20）：用户已明确授权创建公开仓库、公开源码/旅行日期/路线/交接文档及发布 GitHub Pages。仓库已创建，main 为默认源码分支；Pages 来源为 gh-pages 根目录，HTTPS 已启用。首次网页构建状态 built，对应发布提交 0ce23390ab67ff18367dda15dfebafbe3a350233。

在线地址：https://wangliumeiagent-creator.github.io/madagascar-travel-journal/

用户提供 10 天旅行行程，要求以网页按天展示真实背景知识，后续持续补充介绍和图片。已完成全部日期的阅读内容、来源链接、现场观察提示、行程安排、用户提供总览图、每日区域高亮和 Google Maps 链接。页面适配桌面及手机。

当前迁移目标：GitHub Pages；源码仓库为 https://github.com/wangliumeiagent-creator/madagascar-travel-journal 。当前使用公开仓库与公开网页，用户已要求迁移、推送和部署。保留原 Sites 版本，不删除或更改其访问权限。原 Sites 已公开，若用户以后要求关闭，应单独处理。

## 文件入口
| 文件 | 用途 |
| --- | --- |
| dist/index.html | 页面外壳、总览地图、导航容器 |
| dist/content.js | TRIP.cover、10 天的内容、来源、每日图片数组 |
| dist/routes.js | DAY_ROUTES、地点顺序、交通方式、地图链接生成 |
| dist/app.js | 日期 hash 导航、内容渲染、前后天切换 |
| dist/style.css | 响应式布局与地图高亮样式 |
| dist/images/itinerary-overview.png | 用户提供的旅行社总览图，保留署名 |
| dist/.nojekyll | 禁用 GitHub Pages 的 Jekyll 处理 |
| scripts/validate.mjs | 无依赖的内容与资源检查 |
| scripts/publish.ps1 | 源码与 dist 子树发布，拒绝脏工作区和异常远端 |
| .openai/hosting.json | 历史 Sites 标识，不是当前部署入口 |

`dist/` 是正式源码，禁止当作生成物删除。脚本采用普通 defer script 全局常量，顺序是 content.js、routes.js、app.js。资源必须是相对路径，以兼容 GitHub Pages 的项目路径。

## 如何补充内容和图片
1. 先定位日期，再修改对应 day 的 paragraphs、schedule、notice、look、sources。
2. 图片有使用授权后存入 dist/images，避免覆盖同名图片。在该天 images 中加入 `{src:"images/example.jpg",alt:"具体画面描述",caption:"图注、作者与许可"}`。
3. 外部封面仍来自 Wikimedia Commons，网络失败时可能不显示，不保证全离线。来源和许可在页面及 README 中；用户旅行社图已本地保存。
4. 此版本无上传按钮、在线编辑或数据库。用户把材料发给 Agent 后修改并发布，不是浏览器内保存。

## 地点与事实边界
- 旅行日期 2026-09-30 至 2026-10-09，主要游览为首都高地、安达西贝、Kirindy、穆隆达瓦。
- 狐猴岛/鳄鱼谷可能为 Vakôna；蝴蝶谷可能为 Peyrieras；大狐猴具体林区未定；Kimony 园区、Vezo 渔村地址、蓝山行宫是否 Ambohimanga、城市步行点位及最终酒店均需确认。
- Kirindy Forest 与 Kirindy Mitea 不能混淆。
- 地图为旅行社示意底图加区域框；国际日用航段顺序。它不是比例地图、GPS 轨迹或 Google 生成的图。
- Google Maps 仅使用官方 Maps URLs，无 API 密钥，不生成嵌入地图。候选地点只提供搜索，不当作已确认途经点；未核实 Google 实际路况或用时。
- 国内航班时刻与原旅行社“机队数量”等描述未核实。日落、动物出现和星空能见度不作保证。

## 本地检查
`node scripts/validate.mjs`

本地预览（从仓库根目录）：`python -m http.server 8765 --bind 127.0.0.1 --directory dist`。本机 Python 也可用 `D:/测试文档/.runtime/Python310/python.exe`。打开 http://127.0.0.1:8765 。8765 若被占用先确认进程，不杀未知服务。

界面改动检查：10 天都能切换；第 1/10 天边界按钮；来源折叠；总览原图；第 6 天白天/晚间地图链接；窄屏无页面横向溢出（日期导航自身可横滑）。

## 发布约定
仓库 main 保存完整源码和文档。gh-pages 只保存 dist 的子树，由 `git subtree push --prefix dist origin gh-pages` 生成；不要直接编辑 gh-pages。

1. 检查 git 状态，拉取远端并核实他人改动；不要盲目强推或重置。
2. 修改、运行验证、仅提交本任务文件。
3. 执行 `powershell -File scripts/publish.ps1`，或手动推送 main 再推送 dist 子树。
4. 用 `gh api repos/wangliumeiagent-creator/madagascar-travel-journal/pages/builds/latest` 检查状态，并用 Pages API 返回的 html_url 验证线上页面和静态资源。
5. Pages 的来源设置为 gh-pages 分支根目录，HTTPS。普通 main push 不会单独更新网页，必须发布子树。

本机 PowerShell 禁止执行脚本时，不修改全局执行策略。直接逐条运行：
```powershell
node scripts/validate.mjs
git status --short
git -c 'credential.helper=!gh auth git-credential' push origin HEAD:main
git -c 'credential.helper=!gh auth git-credential' subtree push --prefix dist origin gh-pages
```
仅在验证通过、工作区干净且当前提交是待发布源码时运行推送。已有 gh-pages 分支可能自动启用 Pages，创建 API 返回 409 时先读取现状，不重复创建或破坏配置。

本机受限网络下 gh auth status 可能误报 invalid；在获准的联网执行环境复核，禁止打印 token、读取或提交凭据文件。使用现有 gh 登录和临时 Git credential helper，不修改全局账号设置。

## Agent 协作
主 Agent 分配不重叠文件，研究内容/路线与界面可分工，但必须明确所有权。其他 Agent 报告事实来源、修改文件、验证结果和风险；只有集成负责人合并、提交、推送和发布。接手先读 AGENTS.md。

下一步优先：确认点位和酒店；补充每日有授权的真实图片；如用户需要旅行离线使用，再做资源本地化及离线阅读能力。不要未经要求引入框架、登录或后台。
