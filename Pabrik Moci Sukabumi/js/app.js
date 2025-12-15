document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog Single Template initialized');
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    LoadingManager.init(5000);
    
    setTimeout(() => {
        ThemeManager.init();
        ShareManager.init();
        renderArticle();
        renderTableOfContents();
        renderRelatedPosts();
        document.body.style.opacity = '1';
    }, 3000);
});

const renderArticle = () => {
    const articleContainer = document.getElementById('articleContent');
    
    const articleHTML = `
        <div class="article-header">
            <img src="${articleData.heroImage}" alt="${articleData.title}" class="article-hero" loading="lazy">
            <div class="article-meta">
                <span class="article-category">${articleData.category}</span>
                <h1 class="article-title">${articleData.title}</h1>
                <p class="article-excerpt">${articleData.excerpt}</p>
                <div class="article-info">
                    <div class="author-info">
                        <img src="${articleData.author.avatar}" alt="${articleData.author.name}" class="author-avatar-small">
                        <span>Ditulis oleh ${articleData.author.name}</span>
                    </div>
                    <span>•</span>
                    <span>${articleData.date}</span>
                </div>
            </div>
        </div>
        
        <div class="article-content">
            ${articleData.content.map(section => `
                <section class="content-section" id="${section.id}">
                    <h2>${section.title}</h2>
                    ${section.content}
                </section>
            `).join('')}
        </div>
        
        <footer class="article-footer">
            <div class="tags">
                ${articleData.tags.map(tag => `
                    <a href="#" class="tag">#${tag}</a>
                `).join('')}
            </div>
            
            <div class="article-actions">
                <a href="./../../Main/index.html" class="action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    Kembali ke Beranda
                </a>
                <button class="action-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                    </svg>
                    Ke Atas
                </button>
            </div>
        </footer>
    `;
    
    articleContainer.innerHTML = articleHTML;
};

const renderTableOfContents = () => {
    const tocContainer = document.getElementById('tableOfContents');
    
    const tocHTML = articleData.content.map(section => `
        <a href="#${section.id}" class="toc-link">${section.title}</a>
    `).join('');
    
    tocContainer.innerHTML = tocHTML;
    
    // Add scroll spy for TOC
    const sections = document.querySelectorAll('.content-section');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
};

const renderRelatedPosts = () => {
    const relatedContainer = document.getElementById('relatedPosts');
    
    const relatedHTML = relatedPosts.map(post => `
        <a href="#" class="related-post">
            <img src="${post.image}" alt="${post.title}" class="related-post-image">
            <div class="related-post-content">
                <div class="related-post-title">${post.title}</div>
                <div class="related-post-date">${post.date}</div>
            </div>
        </a>
    `).join('');
    
    relatedContainer.innerHTML = relatedHTML;
};