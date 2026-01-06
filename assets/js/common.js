$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});

// Smooth scrolling for in-page anchors in header nav
$(function() {
    $('a.page-link').on('click', function(e) {
        var href = $(this).attr('href');
        if (!href) return;
        var hashIndex = href.indexOf('#');

        // Use an <a> element to parse the href reliably
        var parser = document.createElement('a');
        parser.href = href;

        var homePath = '/';
        var currentPath = window.location.pathname.replace(/\/$/, '') || '/';

        // If the link points to the site root ("/"), treat it as 'scroll to top' when already on homepage
        if ((parser.pathname === homePath || href === homePath) && currentPath === homePath && hashIndex === -1) {
            e.preventDefault();
            var headerOffset = 0; // go fully to top
            $('html, body').animate({ scrollTop: 0 - headerOffset }, 350);
            if (history.pushState) history.pushState(null, null, homePath);
            return;
        }

        // If there's a hash, handle same-document vs cross-document behavior
        if (hashIndex !== -1) {
            var hash = href.slice(hashIndex);
            // normalize legacy '#projects' to '#projects-anchor'
            if (hash === '#projects') {
                hash = '#projects-anchor';
                // ensure external navigation uses the new anchor
                parser.href = parser.protocol + '//' + parser.host + '/#projects-anchor';
            }
            var parser2 = document.createElement('a');
            parser2.href = href;

            var samePath = (parser2.pathname === window.location.pathname && parser2.hostname === window.location.hostname);
            if (!samePath) {
                // If navigating to another page (e.g. from a post/news page to the homepage),
                // set a sessionStorage flag so the homepage can scroll to the desired anchor
                // after layout/images/fonts finish loading. This avoids race conditions.
                try {
                    if (hash === '#projects' || hash === '#projects-anchor') {
                        sessionStorage.setItem('scrollToOnLoad', 'projects-anchor');
                    } else if (hash) {
                        sessionStorage.setItem('scrollToOnLoad', hash);
                    }
                } catch (err) {
                    // ignore storage errors (private mode etc.)
                }
                // navigate to the normalized anchor on the root if desired
                if (hash === '#projects' || hash === '#projects-anchor') {
                    window.location = parser.protocol + '//' + parser.host + '/#projects-anchor';
                } else {
                    window.location = href;
                }
                return;
            }

            // same document: smooth-scroll to target
            var $target = $(hash);
            if ($target.length) {
                e.preventDefault();
                var headerOffset = 80;
                var targetTop;
                // Special handling for projects anchors: scroll to below the header element
                if (hash === '#projects' || hash === '#projects-anchor') {
                    var el = $target.get(0);
                    // compute position just below the element (top + height)
                    targetTop = (el.offsetTop || (el.getBoundingClientRect().top + window.pageYOffset)) + (el.offsetHeight || el.getBoundingClientRect().height);
                    // subtract header offset so section header is visible
                    targetTop = Math.max(0, targetTop - headerOffset - 6);
                } else {
                    targetTop = $target.offset().top - headerOffset;
                }
                // animate and ensure stability
                $('html, body').animate({ scrollTop: targetTop }, 450);
                ensureScrollStable(targetTop, 1500);
                if (history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    location.hash = hash;
                }
            }
        }
    });
});

// On page load, if there is a hash (direct navigation), adjust scroll to account for fixed header
// On page load, if there is a hash (direct navigation), adjust scroll to account for fixed header
function ensureScrollStable(targetTop, timeout) {
    var start = performance.now();
    var tolerance = 8; // pixels
    function step(now) {
        var current = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(current - targetTop) <= tolerance) {
            // close enough
            return;
        }
        window.scrollTo(0, targetTop);
        if (now - start < timeout) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

function scrollToHashWithRetries(hash, maxAttempts, delay, finalTimeout) {
    var attempts = 0;
    var headerOffset = 80;
    function tryScroll() {
        attempts++;
        var el = document.querySelector(hash);
        if (el) {
            var rect = el.getBoundingClientRect();
            var scrollTop = window.pageYOffset + rect.top - headerOffset;
            // immediate scroll then ensure stability
            window.scrollTo(0, scrollTop);
            ensureScrollStable(scrollTop, finalTimeout || 1500);
            return true;
        }
        if (attempts < maxAttempts) {
            setTimeout(tryScroll, delay);
            return false;
        }
        return false;
    }
    tryScroll();
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        // Try multiple times to allow images/layout to settle and then stabilize scroll
        scrollToHashWithRetries(window.location.hash, 16, 120, 2000);
    }
});

// Also try again on full load (images/fonts finished)
window.addEventListener('load', function() {
    if (window.location.hash) {
        scrollToHashWithRetries(window.location.hash, 8, 200, 2000);
    }
    // If a navigation set a scroll flag (sessionStorage), honor it after full load
    try {
        var s = sessionStorage.getItem('scrollToOnLoad');
        if (s) {
            // normalize and scroll
            if (s === 'projects-anchor') s = '#projects-anchor';
            if (s.charAt(0) !== '#') s = '#' + s;
            scrollToHashWithRetries(s, 12, 150, 2500);
            sessionStorage.removeItem('scrollToOnLoad');
        }
    } catch (err) {
        // ignore
    }
});

// Ensure that hash changes (including browser default jumps) are corrected
window.addEventListener('hashchange', function() {
    var h = window.location.hash;
    if (!h) return;
    // normalize
    if (h === '#projects' ) h = '#projects-anchor';
    if (h === '#projects-anchor') {
        // compute target and force-stabilize
        var el = document.querySelector(h);
        if (el) {
            var headerOffset = 80;
            var targetTop = (el.offsetTop || (el.getBoundingClientRect().top + window.pageYOffset)) + (el.offsetHeight || el.getBoundingClientRect().height) - headerOffset - 6;
            // clamp
            if (targetTop < 0) targetTop = 0;
            // aggressive ensure for a short time
            ensureScrollStable(targetTop, 2000);
            // extra repeated set for compatibility
            var reps = 6;
            var iv = setInterval(function() {
                window.scrollTo(0, targetTop);
                reps--; if (reps <= 0) clearInterval(iv);
            }, 250);
        }
    }
});

// Simple horizontal slider controls for project rows
document.addEventListener('DOMContentLoaded', function() {
    var rows = document.querySelectorAll('.project-row');
    rows.forEach(function(row) {
        var container = row.querySelector('.project-slider');
        if (!container) return;
        // allow horizontal scroll with mouse wheel (shift)
        container.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                // scroll horizontally instead
                container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
                e.preventDefault();
            }
        });
    });
});
