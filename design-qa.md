# Saintia 医疗中心首页 Design QA

## 参考与实现

- 选定视觉方向：`/Users/cc/.codex/generated_images/01a04738-cc46-7c02-9a89-36e3c37c303e/exec-2e4cc7ac-90c6-4677-a2dc-e0669cee7f62.png`
- 实站参考截图：`/var/folders/qj/ft_sj3hj6b996k6k0mmqk3zc0000gn/T/codex-clipboard-4260a11f-aca2-4fdb-8f93-d4c90fb6aff9.png` 至 `codex-clipboard-f372179c-41ae-4490-a1ff-eb37357a069b.png`
- 实现截图：
  - `web/implementation-home-1440x1024.png`
  - `web/implementation-home-full.png`
  - `web/implementation-doctors-1440x1024.png`
  - `web/implementation-home-mobile-390x844.png`
- 桌面验证视口：1440 × 1024 CSS px（浏览器实际内容区约 1425 × 1013）；移动验证视口：390 × 844 CSS px（实际约 375 × 812）。
- 状态：本地 Next 开发服务器 + 管理端 API 已启动，首页数据加载完成（8 张医生资料图）。

## 视觉核对

| 维度 | 结果 | 证据与处理 |
|---|---|---|
| 布局与层级 | Pass | 首屏采用左文案/右实景照片分栏；信任指标紧接首屏；服务、团队、预约、页脚按参考节奏排列。 |
| 字体与色彩 | Pass | 标题使用高对比衬线字；正文为无衬线；象牙白、深紫、紫红和金色作为统一 token。 |
| 间距与组件 | Pass | 统一内容最大宽度、卡片间距、按钮高度与窄边框；移动端改为单列并保留可读留白。 |
| 图片与素材 | Pass | 首屏使用项目真实医护照片；医生资料使用原始长方形/竖向海报，`contain` 保留完整内容，不套用参考截图的圆形头像裁切。 |
| 文案与数据 | Pass | 首页中文文案、服务标签、医生专长和预约入口与现有站点数据结构保持一致。 |
| 图标与可访问性 | Pass | 导航下拉图标改为 Lucide；按钮保留语义文本；图片含替代文本；对话框可打开/关闭。 |
| 响应式 | Pass | 390px 视口已核验导航菜单、标题、图片和卡片不溢出；桌面版保持分栏构图。 |

## 重点区域证据

- 首屏对照：`web/design-qa-hero-comparison.jpg`。视觉目标与实现均为暖白导航、紫色强调、左侧主标题和右侧医护照片；实现将统计数字替换为项目真实指标。
- 医生区域对照：`web/design-qa-doctors-comparison.jpg`。实站截图中的圆形头像仅作为布局参考；最终实现明确使用真实长方形医生介绍图，图片完整显示。
- 全页滚动：`web/implementation-home-full.png`，验证了从首屏到预约和页脚的连续节奏。

## 交互与质量

- 已验证医生卡片点击打开资料对话框，关闭按钮可正常关闭。
- 已验证移动端菜单可打开；服务 tab 点击后 active 状态切换。
- 控制台错误：0。
- `npm run lint`：通过（仅保留项目已有的 `no-img-element` warnings）。
- `npm run typecheck`：通过。
- `npm run build`：通过。

## 比较历史

1. Pass 1 发现首屏文案在窄桌面宽度下逼近照片区域；通过限制标题宽度、调整左侧内边距并让 hero 内容区完整占列修正。
2. Pass 2 发现医生 API 未启动导致卡片为空；启动管理端 API 后复测，8 张资料图正常加载。
3. Final pass 在桌面、移动和医生焦点区域复核；未发现新的 P0/P1/P2 视觉问题。

## Final result

passed
