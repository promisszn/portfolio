// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(li => li.classList.remove('active'));
        link.classList.add('active');
    })
})

// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="project-card">
        <img src="assets/${project.image}" alt="">
        <div class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">
                <a href="${project.url}" class="btn" target="_blank">Live site</a>
                <a href="${project.code}" class="btn" target="_blank">View code</a>
            </span>
        </div>
    </div>
    `;
})

//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})