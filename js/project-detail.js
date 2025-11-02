// 项目详情页脚本

document.addEventListener('DOMContentLoaded', function() {
    // 从URL获取项目ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projectsData[projectId]) {
        loadProjectDetail(projectId);
    } else {
        // 如果没有找到项目，显示错误信息
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
function loadProjectDetail(projectId) {
    const project = projectsData[projectId];

    // 设置页面标题
    document.getElementById('page-title').textContent = `${project.title} | 建筑作品集`;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-description').textContent = project.fullDescription;

    // 设置主图
    const mainImage = document.getElementById('main-image');
    mainImage.innerHTML = `<p>${project.title} - 主图</p>`;
    // 如果有实际图片，取消注释以下代码：
    // mainImage.innerHTML = `<img src="../${project.image}" alt="${project.title}" class="project-image">`;

    // 加载项目特点
    const featuresList = document.getElementById('project-features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // 加载图集
    const gallery = document.getElementById('project-gallery');
    gallery.innerHTML = '';
    project.gallery.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item-placeholder';
        galleryItem.innerHTML = `<p>图片 ${index + 1}</p>`;
        gallery.appendChild(galleryItem);
        
        // 如果有实际图片，取消注释以下代码：
        // const img = document.createElement('img');
        // img.src = `../${imagePath}`;
        // img.alt = `${project.title} - 图片 ${index + 1}`;
        // img.className = 'gallery-item';
        // gallery.appendChild(img);
    });
}
