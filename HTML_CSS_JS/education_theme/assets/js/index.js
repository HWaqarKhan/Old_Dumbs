
class Navigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <div class="container nav__container">
            <a href="index.html">
                <h4>Logo</h4>
            </a>
            <ul class="nav__menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <button class="nav__btn nav__btn--open"><i class="uil uil-bars"></i></button>
            <button class="nav__btn nav__btn--close"><i class="uil uil-multiply"></i></button>
        </div>
    </nav>`
    }
}

customElements.define('top-navigation', Navigation);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="footer__section container">
            <div class="footer__para">
                <a href="index.html" class="footer__logo">Logo</a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ea.</p>
            </div>

            <div class="footer__nav">
                <h4>Permalinks</h4>
                <ul class="footer__permalinks">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer__privacy">
                <h4>Privacy</h4>
                <ul class="footer__terms">
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Refund policy</a></li>
                </ul>
            </div>

            <div class="footer__contact">
                <h4>Contact Us</h4>
                <div>
                    <p>+01 111 111 1111</p>
                    <p>example12@gamil.com</p>
                </div>
                <ul class="footer__social">
                    <li><a href="#"><i class="uil uil-facebook-f"></i> </a></li>
                    <li><a href="#"><i class="uil uil-instagram-alt"></i></a></li>
                    <li><a href="#"><i class="uil uil-twitter"></i></a></li>
                    <li><a href="#"><i class="uil uil-linkedin"></i></a></li>
                </ul>
            </div>

        </div>
        <div class="footer__copyright">
            <small>Copyright &copy; Your Website</small>
        </div>
    </footer>`
    }
}

customElements.define('footer-bottom', Footer);



// Change navbar style on Scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// FAQ Toggle collapse Answer
const faqs = document.querySelectorAll('.faqs__section');
faqs.forEach(faq => {
    faq.addEventListener('click', function () {
        faq.classList.toggle('toggle-collapse');
        const icon = faq.querySelector('.faqs__icon i');
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        }
        else {
            icon.className = "uil uil-plus";
        }

        // if (icon.classList.contains('uil-plus')) {
        //     icon.classList.remove('uil-plus')
        //     icon.classList.add('uil-minus')
        // } else {
        //     icon.classList.remove('uil-minus')
        //     icon.classList.add('uil-plus')

        // }
    })

})

// Toggle Nav
const menu = document.querySelector('.nav__menu')
const openMenu = document.querySelector('.nav__btn--open')
const closeMenu = document.querySelector('.nav__btn--close')


openMenu.addEventListener('click', () => {
    menu.style.display = "flex";
    closeMenu.style.display = "inline-block";
    openMenu.style.display = "none";
})
closeMenu.addEventListener('click', () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
})