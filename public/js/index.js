document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('walletModal')
    const connectWallet = document.querySelector('.nav__menu--list')
    const connectWalletBtn = document.querySelector('.connect-wallet__btn')
    const closeBtn = document.querySelector('.close')
    const  body = document.querySelector('body')
    const read = document.querySelector('.read')
    const readBtn = document.querySelector('.readBtn')

    read.style.display = 'none'

    readBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.currentTarget.innerText == 'Read More'){
            read.style.display = 'block'
            readBtn.innerHTML = 'Read Less...'
        } else {
            read.style.display = 'none'
            readBtn.innerHTML = 'Read More'
        }
    })

    connectWallet.addEventListener('click', () => {
      modalContainer.style.display = 'flex'
      body.style.overflow = 'hidden';
    })

    connectWalletBtn.addEventListener('click', () => {
      modalContainer.style.display = 'flex'
      body.style.overflow = 'hidden';
    })

    closeBtn.addEventListener('click', () => {
      modalContainer.style.display = 'none'
      body.style.overflow = 'scroll';
    })

    // Navbar Toggle
    let navOpen = document.querySelector('.nav__bars')
    let navMenu = document.querySelector('.nav__menu')
    let navClose = document.querySelector('.nav__menu--times')
    navOpen.addEventListener('click',() => {
      navMenu.classList.add('show')
      body.style.overflow = 'hidden';
    }) 
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show')
      body.style.overflow = 'scroll';
    })

  })
