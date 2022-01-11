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
                <a href="${project.url}" target="_blank"><i class="fas fa-external-link-alt fa-2x"></i></a>
                <a href="${project.code}" target="_blank"><i class="fab fa-github fa-2x"></i></a>
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