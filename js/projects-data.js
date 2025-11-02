// 作品数据
const projectsData = {
    'modern-residence': {
        id: 'modern-residence',
        title: '现代住宅设计',
        category: '住宅设计',
        year: '2023',
        description: '一个注重自然光与通风的现代住宅项目，采用简约几何线条，融入周边环境。',
        fullDescription: '这是一个结合现代主义与环保理念的住宅设计项目。建筑采用简洁的几何形态，大面积的落地玻璃窗确保了室内充足的自然采光。设计中特别注重空间的流动性和功能性，通过开放式布局营造宽敞舒适的居住环境。',
        features: [
            '大面积落地窗，最大化自然采光',
            '开放式客厅与厨房设计',
            '环保节能材料应用',
            '智能家居系统集成',
            '屋顶花园与雨水收集系统',
            '地下车库与储物空间'
        ],
        image: 'images/projects/modern-residence.jpg',
        gallery: [
            'images/projects/modern-residence-1.jpg',
            'images/projects/modern-residence-2.jpg',
            'images/projects/modern-residence-3.jpg'
        ]
    },
    'cultural-center': {
        id: 'cultural-center',
        title: '城市文化中心',
        category: '公共建筑',
        year: '2023',
        description: '结合传统与现代元素的文化建筑，旨在为社区提供艺术与文化交流空间。',
        fullDescription: '城市文化中心设计融合了传统建筑元素与现代设计语言，创造出独特的文化地标。建筑采用开放式设计理念，内部空间灵活多变，可举办各类艺术展览、文化活动和社区聚会。',
        features: [
            '多功能展览空间',
            '300座位的多功能厅',
            '艺术工作室与创作空间',
            '户外雕塑广场',
            '地下停车场与便民设施',
            '节能环保的绿色建筑设计'
        ],
        image: 'images/projects/cultural-center.jpg',
        gallery: [
            'images/projects/cultural-center-1.jpg',
            'images/projects/cultural-center-2.jpg',
            'images/projects/cultural-center-3.jpg'
        ]
    },
    'green-office': {
        id: 'green-office',
        title: '绿色办公大楼',
        category: '商业建筑',
        year: '2024',
        description: '可持续设计理念的办公建筑，采用太阳能板与雨水回收系统。',
        fullDescription: '这座办公大楼是可持续建筑设计的典范。建筑采用先进的绿色建筑技术，包括太阳能发电系统、雨水收集利用、自然通风系统等。设计注重员工的工作环境质量，创造健康、高效的办公空间。',
        features: [
            '屋顶太阳能发电系统',
            '雨水收集与循环利用',
            '垂直绿化与空中花园',
            '自然通风与采光设计',
            '智能楼宇管理系统',
            'LEED金级认证目标'
        ],
        image: 'images/projects/green-office.jpg',
        gallery: [
            'images/projects/green-office-1.jpg',
            'images/projects/green-office-2.jpg',
            'images/projects/green-office-3.jpg'
        ]
    },
    'community-library': {
        id: 'community-library',
        title: '社区图书馆',
        category: '教育建筑',
        year: '2023',
        description: '为当地社区设计的开放式图书馆，强调阅读氛围与社交空间的结合。',
        fullDescription: '社区图书馆设计旨在创造一个温馨的知识共享空间。建筑采用开放式布局，既有安静的阅读区域，也有活跃的互动空间。大面积的玻璃幕墙让自然光充分照射室内，营造舒适的阅读环境。',
        features: [
            '开放式阅读区与独立学习空间',
            '儿童活动区与亲子阅读空间',
            '多媒体学习中心',
            '室外阅读庭院',
            '无障碍设施完善',
            '智能图书管理系统'
        ],
        image: 'images/projects/community-library.jpg',
        gallery: [
            'images/projects/community-library-1.jpg',
            'images/projects/community-library-2.jpg',
            'images/projects/community-library-3.jpg'
        ]
    },
    'eco-resort': {
        id: 'eco-resort',
        title: '生态度假村',
        category: '旅游建筑',
        year: '2024',
        description: '与自然环境和谐共存的度假村设计，采用当地材料与传统工艺。',
        fullDescription: '生态度假村项目位于风景优美的山林之中，设计充分尊重自然环境。建筑采用当地传统材料和工艺，最小化对环境的影响。每个客房都拥有开阔的景观视野，让客人充分享受大自然的美景。',
        features: [
            '使用当地天然材料建造',
            '最小化环境影响的建造方式',
            '每间客房都有私人景观阳台',
            '太阳能热水与发电系统',
            '有机餐厅与农场体验',
            '生态步道与自然教育中心'
        ],
        image: 'images/projects/eco-resort.jpg',
        gallery: [
            'images/projects/eco-resort-1.jpg',
            'images/projects/eco-resort-2.jpg',
            'images/projects/eco-resort-3.jpg'
        ]
    },
    'art-gallery': {
        id: 'art-gallery',
        title: '艺术展览馆',
        category: '文化建筑',
        year: '2023',
        description: '现代艺术展览空间，注重光影效果与参观流线设计。',
        fullDescription: '艺术展览馆设计以"光与空间"为主题，创造出富有张力的展览环境。建筑采用创新的采光设计，自然光通过精心设计的天窗和侧窗照射入内，为艺术品创造理想的展示环境。流线设计引导参观者经历丰富的空间体验。',
        features: [
            '创新的自然采光系统',
            '灵活可变的展览空间',
            '专业的艺术品保护设施',
            '多层次的参观流线设计',
            '艺术工作坊与教育空间',
            '户外雕塑展示区'
        ],
        image: 'images/projects/art-gallery.jpg',
        gallery: [
            'images/projects/art-gallery-1.jpg',
            'images/projects/art-gallery-2.jpg',
            'images/projects/art-gallery-3.jpg'
        ]
    }
};

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
