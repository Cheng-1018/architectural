# images 目录说明

这个目录用于存放网站的所有图片资源。

## 目录结构

```
images/
├── projects/           # 作品项目图片
│   ├── modern-residence.jpg
│   ├── modern-residence-1.jpg
│   ├── modern-residence-2.jpg
│   ├── cultural-center.jpg
│   └── ...
└── profile.jpg         # 个人照片（可选）
```

## 使用说明

### 作品图片命名规范

- **主图**：`项目ID.jpg`（例如：`modern-residence.jpg`）
- **附加图片**：`项目ID-序号.jpg`（例如：`modern-residence-1.jpg`）

### 图片规格建议

- **主图**：1200 x 800 像素以上
- **缩略图**：800 x 600 像素以上
- **图集图片**：800 x 600 像素以上
- **格式**：JPG（照片）、PNG（图标、透明图）

### 图片优化

建议使用以下工具压缩图片：
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- Photoshop "存储为Web所用格式"

### 占位图

如果暂时没有图片，可以使用占位图服务：
- `https://via.placeholder.com/800x600?text=项目名称`
- `https://picsum.photos/800/600`

## 示例

将您的项目图片放在这里，然后在 `js/projects-data.js` 中引用即可。
