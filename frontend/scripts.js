function goToHome() {
  window.location.hash = '#home';
  gsap.to(window, { scrollTop: 500, duration: 1 });
}

window.onload = function() {
  goToHome();
};

function animateHomeBg() {
  const aurora = document.querySelector('#homeBg .aurora');
  gsap.to(aurora, {
    backgroundPosition: "400px 400px",
    opacity: 0.45,
    duration: 10,
    repeat: -1,
    ease: "auroraFlow"
  });

  const bubbles = document.querySelectorAll('#homeBg .bubble');
  bubbles.forEach(bubble => {
    gsap.to(bubble, {
      x: 100,
      y: -200,
      opacity: 0,
      background: "var(--light-blue)",
      duration: Math.random() * 4 + 2,
      repeat: -1,
      ease: "bubbleFloat",
      delay: Math.random() * 5
    });
  });

  const butterflies = document.querySelectorAll('#homeBg .butterfly');
  butterflies.forEach(butterfly => {
    gsap.to(butterfly, {
      x: 200,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 5,
      repeat: -1,
      ease: "butterflyFlutter",
      delay: Math.random() * 3
    });
  });
}

function animateSkillsBg() {
  const nebulaParticles = document.querySelectorAll('#skillsBg .nebula-particle');
  nebulaParticles.forEach(particle => {
    gsap.to(particle, {
      x: 300,
      y: 100,
      opacity: 0,
      duration: 6,
      repeat: -1,
      ease: "nebulaDrift",
      delay: Math.random() * 3
    });
  });

  const flutterWings = document.querySelectorAll('#skillsBg .flutter-wing');
  flutterWings.forEach(wing => {
    gsap.to(wing, {
      x: 100,
      y: 40,
      rotation: 20,
      opacity: 0,
      duration: 4,
      repeat: -1,
      ease: "wingFlutter",
      delay: Math.random() * 2
    });
  });
}

function animateExperienceBg() {
  const wavePattern = document.querySelector('#experienceBg .wave-pattern');
  gsap.to(wavePattern, {
    backgroundPosition: "500px 500px",
    opacity: 0.35,
    duration: 8,
    repeat: -1,
    ease: "waveFlow"
  });

  const butterflies = document.querySelectorAll('#experienceBg .butterfly');
  butterflies.forEach(butterfly => {
    gsap.to(butterfly, {
      x: 200,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 5,
      repeat: -1,
      ease: "butterflyFlutter",
      delay: Math.random() * 3
    });
  });

  const flutterWings = document.querySelectorAll('#experienceBg .flutter-wing');
  flutterWings.forEach(wing => {
    gsap.to(wing, {
      x: 100,
      y: 40,
      rotation: 20,
      opacity: 0,
      duration: 4,
      repeat: -1,
      ease: "wingFlutter",
      delay: Math.random() * 2
    });
  });
}

function animateProjectsBg() {
  const cosmicRipples = document.querySelectorAll('#projectsBg .cosmic-ripple');
  cosmicRipples.forEach(ripple => {
    gsap.to(ripple, {
      scale: 10,
      opacity: 0,
      duration: 4,
      repeat: -1,
      ease: "cosmicRippleExpand",
      delay: Math.random() * 3
    });
  });

  const butterflies = document.querySelectorAll('#projectsBg .butterfly');
  butterflies.forEach(butterfly => {
    gsap.to(butterfly, {
      x: 200,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 5,
      repeat: -1,
      ease: "butterflyFlutter",
      delay: Math.random() * 3
    });
  });
}

function animateAchievementsBg() {
  const nebulaGlows = document.querySelectorAll('#achievementsBg .nebula-glow');
  nebulaGlows.forEach(glow => {
    gsap.to(glow, {
      scale: 1.5,
      opacity: 0.8,
      duration: 3,
      repeat: -1,
      ease: "nebulaGlowPulse",
      delay: Math.random() * 2
    });
  });

  const butterflies = document.querySelectorAll('#achievementsBg .butterfly');
  butterflies.forEach(butterfly => {
    gsap.to(butterfly, {
      x: 200,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 5,
      repeat: -1,
      ease: "butterflyFlutter",
      delay: Math.random() * 3
    });
  });
}

function animateContactBg() {
  const shootingStars = document.querySelectorAll('#contactBg .shooting-star');
  shootingStars.forEach(star => {
    gsap.to(star, {
      x: 500,
      y: -300,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: "shootingStarTrail",
      delay: Math.random() * 4
    });
  });

  const butterflies = document.querySelectorAll('#contactBg .butterfly');
  butterflies.forEach(butterfly => {
    gsap.to(butterfly, {
      x: 200,
      y: -100,
      rotation: 30,
      opacity: 0,
      duration: 5,
      repeat: -1,
      ease: "butterflyFlutter",
      delay: Math.random() * 3
    });
  });
}

animateHomeBg();
animateSkillsBg();
animateExperienceBg();
animateProjectsBg();
animateAchievementsBg();
animateContactBg();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 100 },
        duration: 1.2,
        ease: "power3.inOut"
      });
    }
  });
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

gsap.fromTo("#logo", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 1.5, ease: "cinematicFadeIn",
    onComplete: () => {
      gsap.to("#logo", { 
        duration: 3, 
        repeat: -1, 
        ease: "logoColorShift" 
      });
    }
  }
);

let currentOpenDetails = null;

function toggleDetails(id) {
  if (currentOpenDetails && currentOpenDetails !== id) {
    const previousBrief = document.getElementById(`${currentOpenDetails}-brief`);
    const previousDetails = document.getElementById(`${currentOpenDetails}-details`);
    gsap.to(previousDetails, {
      opacity: 0,
      duration: 0.5,
      ease: "flipReveal",
      onComplete: () => {
        previousDetails.classList.remove('active');
        gsap.fromTo(previousBrief, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5, ease: "flipReveal",
            onComplete: () => {
              gsap.to(previousBrief, { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
        previousBrief.style.display = 'block';
      }
    });
  }

  const brief = document.getElementById(`${id}-brief`);
  const details = document.getElementById(`${id}-details`);

  if (details.classList.contains('active')) {
    gsap.to(details, {
      opacity: 0,
      duration: 0.5,
      ease: "flipReveal",
      onComplete: () => {
        details.classList.remove('active');
        gsap.fromTo(brief, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5, ease: "flipReveal",
            onComplete: () => {
              gsap.to(brief, { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
        brief.style.display = 'block';
        currentOpenDetails = null;
      }
    });
  } else {
    gsap.to(brief, {
      opacity: 0,
      duration: 0.5,
      ease: "flipReveal",
      onComplete: () => {
        brief.style.display = 'none';
        details.classList.add('active');
        gsap.fromTo(details, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5, ease: "flipReveal",
            onComplete: () => {
              gsap.to(details, { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
        animateText(details);
        currentOpenDetails = id;
      }
    });
  }
}

function animateText(container) {
  const headings = container.querySelectorAll('.heading-anim');
  headings.forEach((heading, index) => {
    const sectionId = heading.closest('.section')?.getAttribute('id');
    if (sectionId === 'home') {
      gsap.fromTo(heading, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: "fadeInGlow",
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'skills') {
      const letters = heading.textContent.split('');
      heading.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
      gsap.fromTo(heading.querySelectorAll('span'), 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "letterBounce", stagger: 0.05,
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'experience') {
      gsap.fromTo(heading, 
        { opacity: 0, filter: "blur(5px)", scale: 0.95 }, 
        { opacity: 1, filter: "blur(0)", scale: 1, duration: 1, ease: "revealWithBlur",
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'projects') {
      const letters = heading.textContent.split('');
      heading.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
      gsap.fromTo(heading.querySelectorAll('span'), 
        { opacity: 0, y: 0 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "waveText", stagger: 0.03,
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'education') {
      gsap.fromTo(heading, 
        { opacity: 0, rotate: 0, scale: 0 }, 
        { opacity: 1, rotate: 360, scale: 1, duration: 1, ease: "spiralIn",
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'achievements') {
      gsap.fromTo(heading, 
        { opacity: 0, scale: 0 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "popInSparkle",
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    } else if (sectionId === 'contact') {
      gsap.fromTo(heading, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: "fadeUpRipple",
          onComplete: () => {
            gsap.to(heading, { textShadow: "0 0 12px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
          }
        }
      );
    }
  });
  gsap.fromTo(container.querySelectorAll('.text-anim'), 
    { opacity: 0, x: -30 }, 
    { opacity: 1, x: 0, duration: 0.8, ease: "cinematicFadeIn", stagger: 0.1,
      onComplete: () => {
        container.querySelectorAll('.text-anim').forEach(el => {
          gsap.to(el, { textShadow: "0 0 4px var(--light-blue)", duration: 1.5, repeat: -1, yoyo: true, ease: "textGlow" });
        });
      }
    }
  );
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      animateText(entry.target);
      if (sectionId === 'home') {
        gsap.fromTo(entry.target.querySelectorAll('.profile-placeholder'), 
          { opacity: 0, scale: 0.5, rotation: -45 }, 
          { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "zoomIn" }
        );
        gsap.fromTo(entry.target.querySelectorAll('.text-anim, .btn-custom'), 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1.5, ease: "cinematicFadeIn", stagger: 0.3 }
        );
      } else if (sectionId === 'skills') {
        gsap.fromTo(entry.target.querySelectorAll('.skill-item'), 
          { opacity: 0, y: 30, rotation: -45 }, 
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "riseAndGlow", stagger: 0.2,
            onComplete: () => {
              entry.target.querySelectorAll('.skill-item').forEach(el => {
                gsap.to(el, { duration: 2, repeat: -1, ease: "pulseGlow" });
              });
            }
          }
        );
      } else if (sectionId === 'experience') {
        gsap.fromTo(entry.target.querySelectorAll('.exp-item'), 
          { opacity: 0, y: 30, scale: 0.8 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "riseAndGlow", stagger: 0.2,
            onComplete: () => {
              entry.target.querySelectorAll('.exp-item').forEach(el => {
                gsap.to(el, { duration: 2, repeat: -1, ease: "pulseGlow" });
              });
            }
          }
        );
      } else if (sectionId === 'projects') {
        gsap.fromTo("#yt-brief", 
          { opacity: 0, scale: 0.5, rotation: -45 }, 
          { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "zoomIn",
            onComplete: () => {
              gsap.to("#yt-brief", { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
        gsap.fromTo("#_2fa-brief", 
          { opacity: 0, y: 50, rotation: 45 }, 
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "slideUp",
            onComplete: () => {
              gsap.to("#_2fa-brief", { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
        gsap.fromTo("#phish-brief", 
          { opacity: 0, scale: 0.5, rotation: 45 }, 
          { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "rotateIn",
            onComplete: () => {
              gsap.to("#phish-brief", { duration: 2, repeat: -1, ease: "pulseGlow" });
            }
          }
        );
      } else if (sectionId === 'education') {
        gsap.fromTo(entry.target.querySelectorAll('.edu-item'), 
          { opacity: 0, y: 20, rotation: 2 }, 
          { opacity: 1, y: 0, rotation: 0, duration: 1, ease: "driftIn", stagger: 0.3,
            onComplete: () => {
              entry.target.querySelectorAll('.edu-item').forEach(el => {
                gsap.to(el, { duration: 2, repeat: -1, ease: "pulseGlow" });
              });
            }
          }
        );
      } else if (sectionId === 'achievements') {
        gsap.fromTo(entry.target.querySelectorAll('.achieve-item'), 
          { opacity: 0, scale: 0.5 }, 
          { opacity: 1, scale: 1, duration: 1, ease: "popInSparkle", stagger: 0.2,
            onComplete: () => {
              entry.target.querySelectorAll('.achieve-item').forEach(el => {
                gsap.to(el, { duration: 2, repeat: -1, ease: "pulseGlow" });
              });
            }
          }
        );
      } else if (sectionId === 'contact') {
        gsap.fromTo(entry.target.querySelectorAll('.contact-info p'), 
          { opacity: 0, x: -30 }, 
          { opacity: 1, x: 0, duration: 1, ease: "slideFromLeft", stagger: 0.2 }
        );
        gsap.fromTo(entry.target.querySelectorAll('input, textarea, .btn-custom'), 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 1, ease: "fadeUpRipple", stagger: 0.2 }
        );
      }
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Custom Cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX - 15,
    y: e.clientY - 15,
    duration: 0.1,
    ease: "power2.out"
  });
});

document.addEventListener('mousedown', () => {
  gsap.to(cursor, {
    scale: 0.8,
    boxShadow: "0 0 20px var(--cursor)",
    duration: 0.3,
    ease: "elastic.out(1, 0.3)"
  });
});

document.addEventListener('mouseup', () => {
  gsap.to(cursor, {
    scale: 1,
    boxShadow: "0 0 12px var(--cursor)",
    duration: 0.3,
    ease: "elastic.out(1, 0.3)"
  });
});

// Contact Form Submission
// Contact Form Submission
async function submitMessage() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const data = { name, email, message };

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Response status:', response.status); // Now accessible
    console.log('Response data:', result); // Debug log

    if (response.ok) {
  // Show the animated popup
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'block';
  }

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
 else {
      alert('Error saving message: ' + (result.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the message.');
  }
}

function closePopup() {
  const successElement = document.getElementById('successMessage');
  if (successElement && successElement.classList.contains('active')) {
    gsap.to(successElement, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        successElement.classList.remove('active');
        successElement.textContent = '';
        gsap.set(successElement, { opacity: 1, scale: 1 });
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".section h2").forEach((heading) => {
    gsap.fromTo(heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.to(heading, {
      textShadow: "0 0 12px var(--light-blue)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "textGlow"
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const projectTitles = document.querySelectorAll('#projects h3');

  projectTitles.forEach(title => {
    const letters = title.textContent.trim().split(' ');
    title.innerHTML = letters.map(letter => `<span style="display:inline-block;">${letter}</span>`).join(' ');

    gsap.fromTo(title.querySelectorAll('span'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.05 }
    );

    gsap.to(title, {
      textShadow: "0 0 12px var(--light-blue)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "textGlow"
    });
  });
});

