const sectionIds = ['#home', '#about', '#skills', '#career', '#testimonial', '#contact']

/* map 함수 사용할 때 {} 사용 주의!! */
const sections = sectionIds.map((id) => document.querySelector(id))
const navItems = sectionIds.map((id) => document.querySelector(`[href='${id}']`))
const visibleSections = sectionIds.map(() => false)

sections.forEach((section) => observer.observe(section))

let activeNavItem = navItems[0]

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
}

const handleObserver = (entries) => {
  let selectLastOne
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`)
    visibleSections[index] = entry.isIntersecting
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99
  })

  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections)

  //selectNavItem(navIndex)
}

const findFirstIntersecting = (interSections) => {
  const index = interSections.indexOf(true)
  return index >= 0 ? index : 0
}
const selectNavItem = (index) => {
  const navItem = navItems[index]
  if (!navItem) {
    return
  }
  activeNavItem.classList.remove('active')
  activeNavItem = navItem
  activeNavItem.classList.add('active')
}

const observer = new IntersectionObserver(handleObserver, options)
