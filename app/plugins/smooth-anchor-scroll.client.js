import { nextTick } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    const getHeaderOffset = () => {
        const header = document.querySelector('.header');

        return header ? header.offsetHeight + 16 : 0;
    };

    const scrollToHash = (hash) => {
        if (!hash || hash === '#') {
            return false;
        }

        const id = decodeURIComponent(hash.replace(/^#/, ''));
        const target = document.getElementById(id);

        if (!target) {
            return false;
        }

        const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

        window.scrollTo({
            top,
            behavior: 'smooth',
        });

        return true;
    };

    const handleAnchorClick = (event) => {
        const link = event.target.closest('a[href^="#"]');

        if (!link) {
            return;
        }

        const href = link.getAttribute('href');

        if (!href || href === '#') {
            return;
        }

        if (!scrollToHash(href)) {
            return;
        }

        event.preventDefault();

        if (window.location.hash !== href) {
            history.pushState(null, '', href);
        }
    };

    document.addEventListener('click', handleAnchorClick);

    nuxtApp.hook('page:finish', () => {
        if (!window.location.hash) {
            return;
        }

        requestAnimationFrame(() => {
            scrollToHash(window.location.hash);
        });
    });

    const router = useRouter();

    router.afterEach((to) => {
        if (!to.hash) {
            return;
        }

        nextTick(() => {
            requestAnimationFrame(() => {
                scrollToHash(to.hash);
            });
        });
    });
});
