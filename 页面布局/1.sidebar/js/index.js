const toggle = document.querySelector('.sidebar .toggle')
const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelectorAll('.sidebar nav .nav-item')

toggle.addEventListener('click', () => {
    if (sidebar.className === 'sidebar') {
        sidebar.classList.add('open')
    } else {
        sidebar.classList.remove('open')
    }
})

navItems.forEach(nvaItem => {
    nvaItem.addEventListener('click', () => {
      
        navItems.forEach(item => item.classList.remove('active'))

        nvaItem.classList.add('active')

    })
})