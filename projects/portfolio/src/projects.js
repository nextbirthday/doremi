'use strict'

/* project 필터링 관련 로직 */

const categories = document.querySelector('.categories')

const projects = document.querySelectorAll('.project')

const projectsContainer = document.querySelector('.projects')

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter
  if (filter === null || filter === undefined) {
    return
  }
  /* active 메뉴 재설정 */
  handleActiveSelection(event.target)

  filterProjects(filter)
})

const handleActiveSelection = (target) => {
  const active = document.querySelector('.category--selected')
  active.classList.remove('category--selected')
  target.classList.add('category--selected')
}

const filterProjects = (filter) => {
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block'
    } else {
      project.style.display = 'none'
    }
  })

  /* 바로 브라우저에서 적용되는 것이 아니라 콜백함수가 다 끝난 다음에 브라우저에 업데이트 */
  projectsContainer.classList.add('anime-out')

  setTimeout(() => {
    projectsContainer.classList.remove('anime-out')
  }, 200)
}
