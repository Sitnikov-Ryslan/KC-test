const sidebar = document.querySelector('.sidebar');
const showBtn = document.querySelector('.header__menu');
const closeBtn = sidebar.querySelector('.sidebar__close');

let showSidebar = function() {
    sidebar.classList.add('show');
}

let closeSidebar = function() {
    sidebar.classList.remove('show');
}

showBtn.addEventListener('click', showSidebar);
closeBtn.addEventListener('click', closeSidebar);