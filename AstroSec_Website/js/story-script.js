document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // --- Animate Text Panels on Scroll ---
    gsap.utils.toArray('.text-panel').forEach(panel => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top 80%",
            end: "bottom 20%", 
            toggleClass: "is-visible",
            // Removed 'once: true' to allow animation to re-trigger on scroll up
        });
    });

    // --- Lottie Astronaut Animation ---
    const lottieContainer = document.getElementById("astronaut-lottie");
    if (lottieContainer) {
        const anim = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // Using your new Lottie file
            path: 'https://lottie.host/cffac622-70fe-4d32-a3c6-73ee5164a502/j3xEWlkhVW.json'
        });

        // Use GSAP to move the astronaut up the page on scroll
        gsap.to(lottieContainer, {
            y: "-120vh",
            ease: "none",
            scrollTrigger: {
                trigger: ".story-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            }
        });
    }

    // --- Chapter 3 Solar Flare Video Animation ---
    const flareVideo = document.getElementById("flare-video");
    if (flareVideo) {
        flareVideo.addEventListener('loadedmetadata', function() {
            gsap.to(flareVideo, {
                currentTime: flareVideo.duration,
                ease: "none",
                scrollTrigger: {
                    // CORRECTED: Triggering on the 3rd section to match the new story
                    trigger: ".story-section:nth-child(3)",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });
        });
    }
});

