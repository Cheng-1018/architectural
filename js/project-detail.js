// 项目详情页脚本
// 本文件用于实现作品详情页的动态内容加载，包括：
// 1. 根据URL参数获取作品ID
// 2. 加载并渲染作品详细信息、主图、特点、图集
// 3. 错误处理与友好提示

document.addEventListener('DOMContentLoaded', function() {
    // 从URL获取项目ID
    // 解析 ?id=xxx 参数，获取当前要展示的作品ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projectsData[projectId]) {
        // 如果作品ID有效且数据存在，加载详情
        loadProjectDetail(projectId);
    } else {
        // 如果没有找到项目，显示错误信息
        // 提示用户作品不存在，并提供返回按钮
        document.querySelector('.project-content').innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h2>项目未找到</h2>
                <p>抱歉，您访问的项目不存在。</p>
                <a href="../index.html#portfolio" class="btn">返回作品集</a>
            </div>
        `;
    }
});

// 加载项目详情
// 根据作品ID，渲染详情页所有内容
function loadProjectDetail(projectId) {
    const project = projectsData[projectId];

    // 设置页面标题
    // 动态修改 <title> 标签内容
    document.getElementById('page-title').textContent = `${project.title} | 建筑作品集`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-description').textContent = project.fullDescription;

    // 设置主图
    // 默认显示占位符，如有实际图片可取消注释显示图片
    const mainImage = document.getElementById('main-image');
    mainImage.innerHTML = `<p>${project.title} - 主图</p>`;
    // 如果有实际图片，取消注释以下代码：
    mainImage.innerHTML = `<img src="../${project.image}" alt="${project.title}" class="project-image">`;

    // 加载项目特点
    // 遍历特点数组，生成列表
    const featuresList = document.getElementById('project-features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // 加载图集
    // 遍历图集数组，生成图片或占位符
    const gallery = document.getElementById('project-gallery');
    gallery.innerHTML = '';
    project.gallery.forEach((imagePath, index) => {
        // const galleryItem = document.createElement('div');
        // galleryItem.className = 'gallery-item-placeholder';
        // galleryItem.innerHTML = `<p>图片 ${index + 1}</p>`;
        // gallery.appendChild(galleryItem);
        
        // 如果有实际图片，取消注释以下代码：
        const img = document.createElement('img');
        img.src = `../${imagePath}`;
        img.alt = `${project.title} - 图片 ${index + 1}`;
        img.className = 'gallery-item';
        gallery.appendChild(img);
    });
}
