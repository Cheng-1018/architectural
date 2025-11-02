// 主JavaScript文件
// 本文件用于实现首页的所有交互逻辑，包括：
// 1. 平滑滚动导航
// 2. 导航栏高亮跟随
// 3. 动态加载作品集卡片
// 4. 技能条动画效果

// 平滑滚动
// 页面加载完成后，注册所有交互事件
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到锚点
    // 给所有锚点链接添加点击事件，实现平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏高亮
    // 根据滚动位置，动态高亮导航栏当前章节
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 加载作品集（如果在首页）
    // 检查是否有作品集容器，且作品数据已加载
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid && typeof projectsData !== 'undefined') {
        loadPortfolio();
    }
});

// 加载作品集到首页
// 遍历所有作品数据，生成作品卡片并插入到页面
function loadPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    Object.values(projectsData).forEach(project => {
        const item = createPortfolioItem(project);
        portfolioGrid.appendChild(item);
    });
}

// 创建作品项元素
// 根据作品数据生成作品卡片的DOM结构
function createPortfolioItem(project) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    // 点击作品卡片跳转到详情页，带上作品ID参数
    item.onclick = () => {
        window.location.href = `pages/project.html?id=${project.id}`;
    };

    item.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio-img"> <!-- 可替换为实际图片 -->
        <div class="portfolio-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="portfolio-meta">
                <span>${project.year}</span>
                <span>${project.category}</span>
            </div>
        </div>
    `;

    return item;
}

// 技能条动画（可选）
// 当技能条进入视口时，触发进度条动画
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// 如果页面有技能部分，添加动画
// 页面加载时自动检测技能条并添加动画效果
if (document.querySelector('.skills')) {
    animateSkills();
}
