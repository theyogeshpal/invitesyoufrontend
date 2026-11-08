/**
 * Frontend Environment Configuration
 * Loads environment variables and provides global access
 */
(function() {
    // Default / Local fallback environment variables
    const DEFAULT_ENV = {
        API_URL: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
            ? 'http://localhost:5000/api'
            : `${window.location.origin}/api`,
        WHATSAPP_NUMBER: '917817095043',
        WHATSAPP_DISPLAY: '+91 7817095043',
        SITE_URL: window.location.origin || 'https://typwrite.in',
        IMAGEKIT_URL: 'https://ik.imagekit.io/typ1309'
    };

    // If server already injected window.__ENV__, merge it
    window.__ENV__ = Object.assign({}, DEFAULT_ENV, window.__ENV__ || {});

    // Helper: generate WhatsApp link with encoded message
    window.getWhatsAppUrl = function(message) {
        const phone = window.__ENV__.WHATSAPP_NUMBER || '917817095043';
        if (!message) return `https://wa.me/${phone}`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    // Auto-update elements that listen for env variables
    function applyEnvToDOM() {
        // Elements with data-env="whatsapp-link"
        document.querySelectorAll('[data-env="whatsapp-link"]').forEach(el => {
            const msg = el.getAttribute('data-msg') || '';
            el.href = window.getWhatsAppUrl(msg);
        });

        // Elements with data-env="whatsapp-text"
        document.querySelectorAll('[data-env="whatsapp-text"]').forEach(el => {
            el.textContent = window.__ENV__.WHATSAPP_DISPLAY;
        });

        // Elements with data-env="phone-link"
        document.querySelectorAll('[data-env="phone-link"]').forEach(el => {
            el.href = `tel:+${window.__ENV__.WHATSAPP_NUMBER}`;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyEnvToDOM);
    } else {
        applyEnvToDOM();
    }
})();
