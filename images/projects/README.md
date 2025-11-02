# 作品图片占位符示例

## 当前状态
由于还没有实际的作品图片，网站目前使用占位符显示。

## 何时添加实际图片

### 1. 准备图片文件
将您的作品图片按以下命名放入此目录：

```
projects/
├── modern-residence.jpg       # 现代住宅设计 - 主图
├── modern-residence-1.jpg     # 现代住宅设计 - 图1
├── modern-residence-2.jpg     # 现代住宅设计 - 图2
├── modern-residence-3.jpg     # 现代住宅设计 - 图3
├── cultural-center.jpg        # 城市文化中心 - 主图
├── cultural-center-1.jpg
├── cultural-center-2.jpg
├── cultural-center-3.jpg
├── green-office.jpg           # 绿色办公大楼 - 主图
├── green-office-1.jpg
├── green-office-2.jpg
├── green-office-3.jpg
├── community-library.jpg      # 社区图书馆 - 主图
├── community-library-1.jpg
├── community-library-2.jpg
├── community-library-3.jpg
├── eco-resort.jpg             # 生态度假村 - 主图
├── eco-resort-1.jpg
├── eco-resort-2.jpg
├── eco-resort-3.jpg
├── art-gallery.jpg            # 艺术展览馆 - 主图
├── art-gallery-1.jpg
├── art-gallery-2.jpg
└── art-gallery-3.jpg
```

### 2. 修改代码显示图片

#### 首页作品卡片
编辑 `js/main.js`，找到第 48 行左右：

**原代码（占位符）：**
```javascript
<div class="portfolio-img">${project.title} - 项目图片</div>
```

**修改为（显示图片）：**
```javascript
<img src="${project.image}" alt="${project.title}" class="portfolio-img">
```

#### 详情页图片
编辑 `js/project-detail.js`：

**第 31 行 - 主图：**
```javascript
// 删除占位符代码
// mainImage.innerHTML = `<p>${project.title} - 主图</p>`;

// 取消注释以下行
mainImage.innerHTML = `<img src="../${project.image}" alt="${project.title}" class="project-image">`;
```

**第 44-52 行 - 图集：**
```javascript
// 删除占位符代码
project.gallery.forEach((imagePath, index) => {
    // const galleryItem = document.createElement('div');
    // galleryItem.className = 'gallery-item-placeholder';
    // galleryItem.innerHTML = `<p>图片 ${index + 1}</p>`;
    // gallery.appendChild(galleryItem);
    
    // 取消注释以下代码
    const img = document.createElement('img');
    img.src = `../${imagePath}`;
    img.alt = `${project.title} - 图片 ${index + 1}`;
    img.className = 'gallery-item';
    gallery.appendChild(img);
});
```

### 3. 临时使用在线占位图

如果您想先看看效果，可以使用在线占位图服务：

在 `js/projects-data.js` 中修改图片路径：
```javascript
image: 'https://via.placeholder.com/800x600/3498db/ffffff?text=现代住宅设计',
gallery: [
    'https://via.placeholder.com/800x600/3498db/ffffff?text=图片1',
    'https://via.placeholder.com/800x600/3498db/ffffff?text=图片2',
    'https://via.placeholder.com/800x600/3498db/ffffff?text=图片3'
]
```

## 图片优化建议

1. **尺寸**：主图 1200x800px，其他 800x600px
2. **格式**：JPG（80-90%质量）
3. **压缩**：使用 TinyPNG 或 Squoosh
4. **文件大小**：每张图片不超过 500KB

## 快速测试

可以使用任意图片先测试功能：
1. 将图片重命名为上述格式
2. 放入此目录
3. 按照第2步修改代码
4. 刷新浏览器查看效果
