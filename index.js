
const ASIDE = 'aside'
const BTN_HOME_ID = 'btn-home'
const BTN_HOME_SELECT_ID = 'btn-home-select'
const BTN_MENU = 'btn-menu'
const BTN_PROJECTS_ID = 'btn-projects'
const BTN_PROJECTS_SELECT_ID = 'btn-projects-select'
const BTN_CONTACT_ID = 'btn-contact'
const BTN_CONTACT_SELECT_ID = 'btn-contact-select'
const SECTION_HOME_ID = 'section-home'
const SECTION_PROJECTS_ID = 'section-projects'
const SECTION_CONTACT_ID = 'section-contact'
const NAVIGATION = 'navigation'

let aside
let btnHome
let btnHomeSelect
let btnProjects
let btnProjectsSelect
let btnContact
let btnContactSelect
let btnMenu
let sectionHome
let sectionProjects
let sectionContact
let body
let main
let navigation
let header
let article

// States
let currentOpenSection

window.addEventListener("DOMContentLoaded", () => {
    aside = document.getElementById(ASIDE)
    btnHome = document.getElementById(BTN_HOME_ID)
    btnHomeSelect = document.getElementById(BTN_HOME_SELECT_ID)
    btnMenu = document.getElementById(BTN_MENU)
    btnProjects = document.getElementById(BTN_PROJECTS_ID)
    btnProjectsSelect = document.getElementById(BTN_PROJECTS_SELECT_ID)
    btnContact = document.getElementById(BTN_CONTACT_ID)
    btnContactSelect = document.getElementById(BTN_CONTACT_SELECT_ID)
    sectionHome = document.getElementById(SECTION_HOME_ID)
    sectionProjects = document.getElementById(SECTION_PROJECTS_ID)
    sectionContact = document.getElementById(SECTION_CONTACT_ID)
    navigation = document.getElementById(NAVIGATION)
    body = document.getElementsByTagName('body')[0]
    main = document.getElementsByTagName('main')[0]
    header = document.getElementsByTagName('header')[0]
    article = document.getElementsByTagName('article')[0]

    currentOpenSection = sectionProjects

    init()
});

// Btn styles helpers
function btnHomeOpen(isOpen) {
    if (isOpen) {
        btnHomeSelect.classList.remove('btn-home-close')
        btnHomeSelect.classList.add('btn-home-open')
    } else {
        btnHomeSelect.classList.add('btn-home-close')
        btnHomeSelect.classList.remove('btn-home-open')
    }
}
function btnProjectsOpen(isOpen) {
    if (isOpen) {
        btnProjectsSelect.classList.remove('btn-projects-close')
        btnProjectsSelect.classList.add('btn-projects-open')
    } else {
        btnProjectsSelect.classList.add('btn-projects-close')
        btnProjectsSelect.classList.remove('btn-projects-open')
    }
}
function btnContactOpen(isOpen) {
    if (isOpen) {
        btnContactSelect.classList.remove('btn-contact-close')
        btnContactSelect.classList.add('btn-contact-open')
    } else {
        btnContactSelect.classList.add('btn-contact-close')
        btnContactSelect.classList.remove('btn-contact-open')
    }
}

// Set sections styles
function setHomeStyle() {
    body.classList.add('background-blue')
    header.classList.add('font-white')
    article.classList.add('font-white')
    btnHomeOpen(true)
}
function setProjectsStyle() {
    body.classList.add('background-yellow')
    header.classList.add('font-blue-dark')
    article.classList.add('font-blue-dark')
    btnProjectsOpen(true)
}
function setContactStyle() {
    body.classList.add('background-green')
    header.classList.add('font-pink')
    article.classList.add('font-pink')
    btnContactOpen(true)
}

function setPageStyle(section) {
    switch (section.id) {
        case SECTION_HOME_ID:
            setHomeStyle()
            break
        case SECTION_PROJECTS_ID:
            setProjectsStyle()
            break
        case SECTION_CONTACT_ID:
            setContactStyle()
            break
    }
}

function removeHomeStyle() {
    body.classList.remove('background-blue')
    header.classList.remove('font-white')
    article.classList.remove('font-white')
    btnHomeOpen()
}
function removeProjectsStyle() {
    body.classList.remove('background-yellow')
    header.classList.remove('font-blue-dark')
    article.classList.remove('font-blue-dark')
    btnProjectsOpen()
}
function removeContactStyle() {
    body.classList.remove('background-green')
    header.classList.remove('font-pink')
    article.classList.remove('font-pink')
    btnContactOpen()
}

function removePageStyle(oldSection) {
    switch (oldSection.id) {
        case SECTION_HOME_ID:
            removeHomeStyle()
            break
        case SECTION_PROJECTS_ID:
            removeProjectsStyle()
            break
        case SECTION_CONTACT_ID:
            removeContactStyle()
            break
    }
}

function openSection(section) {
    if (currentOpenSection !== section) {
        currentOpenSection.classList.remove('open')
        section.classList.add('open')
        removePageStyle(currentOpenSection)
        setPageStyle(section)
        currentOpenSection = section
    }
}

function copyMail() {
    void navigator.clipboard.writeText('igor.klos@pm.me')
}

function toggleMenu() {
    navigation.classList.toggle('hide')
    navigation.classList.toggle('show')
    if (navigation.classList.contains('show')) {
        btnMenu.textContent = 'cerra'
    } else {
        btnMenu.textContent = 'el menu'
    }
}

function isMobile() {
    return window.screen.width < 570;
}

function init() {
    // hide the animation on load
    window.setTimeout(function() {
        navigation.style.visibility = 'visible';
    }, 1150);

    btnProjectsOpen()
    btnContactOpen()
    btnHomeOpen()
    openSection(sectionHome)
    btnHome.addEventListener('click', () => openSection(sectionHome))
    btnMenu.addEventListener('click', () => toggleMenu())
    if (isMobile) {
        navigation.addEventListener('click', () => toggleMenu())
    }
    btnProjects.addEventListener('click', () => openSection(sectionProjects))
    btnContact.addEventListener('click', () => openSection(sectionContact))
}