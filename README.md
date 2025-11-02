# 建筑设计作品集网站

一个现代化、标准化的建筑学学生作品集展示网站，采用前后端分离的项目结构。

## 📁 项目结构

```
architectural/
├── index.html              # 主页（作品集首页）
├── css/
│   └── style.css          # 全局样式文件
├── js/
│   ├── main.js            # 主页交互逻辑
│   ├── projects-data.js   # 作品数据管理
│   └── project-detail.js  # 详情页逻辑
├── pages/
│   └── project.html       # 作品详情页模板
├── images/
│   └── projects/          # 作品图片目录
├── app.py                 # Flask后端服务
├── requirements.txt       # Python依赖
├── run_container.bat      # Windows Docker运行脚本
├── run_container.sh       # Linux Docker运行脚本
└── README.md             # 项目说明文档
```

## 🎯 功能特点

- ✅ **标准前端结构**：CSS、JS、HTML完全分离
- ✅ **动态作品加载**：通过JavaScript数据文件管理所有作品
- ✅ **作品详情页**：点击作品卡片进入独立的详情页面
- ✅ **响应式设计**：完美适配手机、平板、电脑
- ✅ **平滑交互**：导航高亮、平滑滚动等现代化交互
- ✅ **易于扩展**：添加新作品只需修改数据文件

## 🚀 快速开始

### 方法1：直接打开（本地预览）
双击 `index.html` 文件即可在浏览器中预览

### 方法2：使用Flask运行（推荐）
```bash
# 安装依赖
pip install flask

# 运行服务器
python app.py

# 浏览器访问
http://localhost:5000
```

### 方法3：使用Docker部署
```bash
# Windows系统
run_container.bat

# Linux/Mac系统
chmod +x run_container.sh
./run_container.sh

# 访问
http://localhost:5003
```

## 📝 如何添加新作品

### 步骤1：准备作品图片

1. 将作品图片放入 `images/projects/` 目录
2. 建议命名格式：
   - 主图：`项目英文id.jpg`（如 `modern-residence.jpg`）
   - 附加图片：`项目英文id-1.jpg`, `项目英文id-2.jpg` 等

3. 图片规格建议：
   - 主图：至少 1200x800 像素
   - 缩略图：至少 800x600 像素
   - 格式：JPG、PNG

### 步骤2：在数据文件中添加作品信息

打开 `js/projects-data.js`，按照以下格式添加新作品：

```javascript
const projectsData = {
    // ... 现有作品 ...
    
    'your-project-id': {  // 唯一的项目ID（英文、数字、连字符）
        id: 'your-project-id',
        title: '您的项目标题',
        category: '项目类型',  // 如：住宅设计、公共建筑等
        year: '2024',
        
        // 首页显示的简短描述（50-100字）
        description: '项目简短介绍，显示在作品集卡片上...',
        
        // 详情页显示的完整描述（200-500字）
        fullDescription: '详细的项目介绍，包括设计理念、背景、解决方案等...',
        
        // 项目特点列表（5-8个要点）
        features: [
            '特点1：具体描述',
            '特点2：具体描述',
            '特点3：具体描述',
            '特点4：具体描述',
            '特点5：具体描述'
        ],
        
        // 图片路径
        image: 'images/projects/your-project-id.jpg',
        gallery: [
            'images/projects/your-project-id-1.jpg',
            'images/projects/your-project-id-2.jpg',
            'images/projects/your-project-id-3.jpg'
        ]
    }
};
```

### 步骤3：保存并刷新

保存 `projects-data.js` 文件后，刷新网页即可看到新添加的作品！

## 💡 添加作品示例

假设您要添加一个"学生宿舍楼"项目：

```javascript
'student-dormitory': {
    id: 'student-dormitory',
    title: '学生宿舍楼设计',
    category: '教育建筑',
    year: '2024',
    description: '为大学校园设计的现代化学生宿舍，注重学生生活品质与社交空间。',
    fullDescription: '本项目为某大学新校区设计的学生宿舍楼。设计充分考虑当代大学生的生活需求，在保证私密性的同时，创造了丰富的公共空间。建筑采用模块化设计，每个单元包含4间卧室、共享客厅和卫浴设施。公共区域设有学习室、健身房、洗衣房等配套设施。',
    features: [
        '4人套间设计，每人独立空间',
        '共享客厅促进社交互动',
        '每层设有公共学习区',
        '屋顶露台与休闲花园',
        '节能环保的建筑系统',
        '完善的安全与管理设施'
    ],
    image: 'images/projects/student-dormitory.jpg',
    gallery: [
        'images/projects/student-dormitory-1.jpg',
        'images/projects/student-dormitory-2.jpg',
        'images/projects/student-dormitory-3.jpg'
    ]
}
```

## 🎨 自定义样式

### 修改配色方案

编辑 `css/style.css`，查找并替换以下颜色值：

```css
/* 主色调（蓝色） */
#3498db → 您的主色

/* 深色背景 */
#2c3e50 → 您的深色

/* 文字颜色 */
#333 → 您的文字色

/* 浅色背景 */
#fafafa → 您的背景色
```

### 修改字体

在 `css/style.css` 的 `body` 选择器中：

```css
body {
    font-family: 'Your-Font', 'Helvetica Neue', Arial, sans-serif;
}
```

## 🔧 高级功能

### 添加实际图片显示

当您准备好实际图片后，需要修改两个地方：

#### 1. 首页作品卡片（`js/main.js`）

找到 `createPortfolioItem` 函数，将：
```javascript
<div class="portfolio-img">${project.title} - 项目图片</div>
```

替换为：
```javascript
<img src="${project.image}" alt="${project.title}" class="portfolio-img">
```

#### 2. 详情页图片（`js/project-detail.js`）

取消注释标记的代码：
```javascript
// 主图部分
mainImage.innerHTML = `<img src="../${project.image}" alt="${project.title}" class="project-image">`;

// 图集部分
const img = document.createElement('img');
img.src = `../${imagePath}`;
img.alt = `${project.title} - 图片 ${index + 1}`;
img.className = 'gallery-item';
gallery.appendChild(img);
```

### 添加图片灯箱效果

推荐使用 [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) 或 [GLightbox](https://biati-digital.github.io/glightbox/)

1. 在 `index.html` 和 `pages/project.html` 的 `<head>` 中引入库：
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>
```

2. 在图片上添加 `data-gallery` 属性并初始化

### 添加作品分类筛选

在 `js/main.js` 中添加筛选功能：

```javascript
function filterProjects(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
```

## 📱 响应式断点

网站自动适配以下设备：

- **桌面**：> 768px（3列网格）
- **平板**：481px - 768px（2列网格）
- **手机**：≤ 480px（单列布局）

## 🌐 部署方式

### GitHub Pages（免费）

1. 将代码推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 选择 main 分支，保存
4. 几分钟后访问提供的 URL

### Netlify（免费）

1. 注册 [Netlify](https://netlify.com) 账号
2. 拖拽项目文件夹到 Netlify
3. 自动部署完成

### 服务器部署（使用Docker）

详见 `DEPLOY.md` 文档

## 📚 常见问题

### Q: 如何修改作品顺序？
A: 在 `projects-data.js` 中调整作品的位置即可，从上到下就是显示顺序。

### Q: 作品图片不显示怎么办？
A: 检查图片路径是否正确，确保图片文件存在于 `images/projects/` 目录中。

### Q: 如何删除一个作品？
A: 在 `projects-data.js` 中删除对应的作品对象即可。

### Q: 可以添加视频吗？
A: 可以！在详情页的 `fullDescription` 中嵌入视频链接，或在 gallery 中添加视频元素。

### Q: 如何修改联系方式？
A: 编辑 `index.html` 中的 `#contact` 部分。

## 🎓 扩展建议

- [ ] 集成CMS系统（如 Netlify CMS）实现在线编辑
- [ ] 添加作品搜索功能
- [ ] 集成 Google Analytics 统计访问量
- [ ] 添加多语言支持（中英文切换）
- [ ] 集成评论系统
- [ ] 添加作品下载功能（PDF版本）
- [ ] 创建作品时间轴视图
- [ ] 添加 3D 模型查看器（如 three.js）

## 📄 技术栈

- **前端**：HTML5、CSS3、原生JavaScript
- **后端**：Flask (Python)
- **部署**：Docker、GitHub Pages、Netlify
- **设计**：响应式网格布局、Flexbox、CSS Grid

## 📞 获取帮助

如有问题或建议：
- 查看代码注释
- 参考现有作品的数据格式
- 搜索 CSS/JavaScript 相关文档

## 📜 许可证

MIT License - 可自由使用和修改

---

**最后更新**：2024年11月  
**版本**：2.0（重构版）

祝您的作品集网站搭建顺利！🎉
