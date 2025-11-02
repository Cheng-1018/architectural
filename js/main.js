// 主JavaScript文件

// 平滑滚动
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动到锚点
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
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid && typeof projectsData !== 'undefined') {
        loadPortfolio();
    }
});

// 加载作品集到首页
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
function createPortfolioItem(project) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.onclick = () => {
        window.location.href = `pages/project.html?id=${project.id}`;
    };

    item.innerHTML = `
        <div class="portfolio-img">${project.title} - 项目图片</div>
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
if (document.querySelector('.skills')) {
    animateSkills();
}
