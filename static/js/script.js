document.addEventListener('DOMContentLoaded', function() {
    // Matrix Rain Effect
    createMatrixRain();
    
    // Particle Effect
    createParticles();
    
    // Animate skill bars
    animateSkillBars();
    
    // CPU Usage Animation
    animateCPUUsage();
    
    // Hologram card effects
    setupHologramCards();
    
    // Terminal typing effect
    typeTerminalText();
    
    // Robot arm interaction
    setupRobotArm();
    
    // Neural connection animation
    createNeuralConnection();
    
    // Smooth scrolling for navigation
    setupSmoothScrolling();
});

function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const matrixRain = document.querySelector('.matrix-rain');
    matrixRain.appendChild(canvas);
    
    canvas.width = matrixRain.offsetWidth;
    canvas.height = matrixRain.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    // Tech-focused characters: numbers, symbols, and coding terms
    const chars = '01{}[]()<>#%&*+-/=?$@!|;:.,\\^~_';
    const numbers = '0123456789';
    const binary = '01';
    const hex = '0123456789ABCDEF';
    const codeTerms = 'var let const function return if else for while class import export';
    
    // Combine all characters we want to show
    const alphabet = numbers + chars + binary + hex + codeTerms;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0'; // Matrix green
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            // Alternate between different character sets for variety
            let charSet;
            const rand = Math.random();
            
            if (rand < 0.3) {
                charSet = numbers;
            } else if (rand < 0.6) {
                charSet = binary;
            } else if (rand < 0.8) {
                charSet = chars;
            } else {
                charSet = codeTerms.split(' '); // Use whole code terms sometimes
            }
            
            // Get random character from selected set
            let text;
            if (Array.isArray(charSet)) {
                text = charSet[Math.floor(Math.random() * charSet.length)];
            } else {
                text = charSet.charAt(Math.floor(Math.random() * charSet.length));
            }
            
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 30);
}

function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        const color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.backgroundColor = color;
        
        container.appendChild(particle);
    }
}

function animateSkillBars() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const span = document.createElement('span');
        bar.appendChild(span);
        
        setTimeout(() => {
            span.style.width = `${percent}%`;
        }, 500);
    });
}

function animateCPUUsage() {
    const cpuBar = document.querySelector('.cpu-bar');
    const cpuPercent = document.querySelector('.cpu-percent');
    
    const updateCPU = () => {
        const usage = Math.floor(Math.random() * 30) + 10;
        cpuBar.style.width = `${usage}%`;
        cpuPercent.textContent = usage;
        
        setTimeout(updateCPU, 2000);
    };
    
    updateCPU();
}

function setupHologramCards() {
    const cards = document.querySelectorAll('.hologram-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

function typeTerminalText() {
    const terminal = document.querySelector('.terminal-content');
    const lines = terminal.querySelectorAll('p');
    let delay = 0;
    
    lines.forEach((line, index) => {
        if (index === lines.length - 1) return; // Skip the blinking cursor line
        
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 50);
        }, delay);
        
        delay += text.length * 50 + 500; // Add some delay between lines
    });
}

function setupRobotArm() {
    const arm = document.querySelector('.robot-arm');
    const hand = document.querySelector('.hand');
    
    document.addEventListener('mousemove', (e) => {
        const rect = arm.getBoundingClientRect();
        const armCenterX = rect.left + rect.width / 2;
        const armBottomY = rect.bottom;
        
        const angle = Math.atan2(e.clientX - armCenterX, armBottomY - e.clientY) * (180 / Math.PI);
        
        arm.style.transform = `rotate(${angle}deg)`;
    });
    
    // Hand grab when clicking
    document.addEventListener('mousedown', () => {
        hand.style.height = '15px';
    });
    
    document.addEventListener('mouseup', () => {
        hand.style.height = '30px';
    });
}

function createNeuralConnection() {
    const connection = document.querySelector('.neural-connection');
    const canvas = document.createElement('canvas');
    connection.appendChild(canvas);
    
    canvas.width = connection.offsetWidth;
    canvas.height = connection.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    const nodes = [];
    const nodeCount = 15;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1
        });
    }
    
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        ctx.strokeStyle = `rgba(15, 240, 252, 0.3)`;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw nodes
        ctx.fillStyle = 'rgba(15, 240, 252, 0.8)';
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Update nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        });
        
        requestAnimationFrame(draw);
    };
    
    draw();
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
// Add this to your DOMContentLoaded function
setupTechCursor();

function setupTechCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('tech-cursor');
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.classList.add('cursor-follower');
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        setTimeout(() => {
            follower.style.left = `${e.clientX}px`;
            follower.style.top = `${e.clientY}px`;
        }, 100);
    });
    
    // Add hover effects for interactive elements
    const hoverElements = document.querySelectorAll('a, button, .hologram-card, .project-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
            follower.classList.add('follower-active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
            follower.classList.remove('follower-active');
        });
    });
}

function setupHologramCards() {
    const cards = document.querySelectorAll('.hologram-card');
    
    cards.forEach(card => {
        // Create the holographic effect elements
        const hologramOverlay = document.createElement('div');
        hologramOverlay.classList.add('hologram-overlay');
        card.appendChild(hologramOverlay);
        
        const scanline = document.createElement('div');
        scanline.classList.add('scanline');
        card.appendChild(scanline);
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Dynamic light effect
            hologramOverlay.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(15, 240, 252, 0.2),
                    rgba(15, 240, 252, 0) 70%
                )
            `;
        });
        
        card.addEventListener('mouseenter', () => {
            card.classList.add('hologram-active');
            scanline.style.animation = 'scan 3s linear infinite';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hologram-active');
            scanline.style.animation = 'none';
        });
    });
}
function setupBinaryTrail() {
    const elements = document.querySelectorAll('a, button, .project-card, .skill-item');
    
    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const rect = el.getBoundingClientRect();
            const trail = document.createElement('div');
            trail.classList.add('binary-trail');
            
            // Position the trail around the element
            trail.style.width = `${rect.width + 20}px`;
            trail.style.height = `${rect.height + 20}px`;
            trail.style.left = `${rect.left - 10}px`;
            trail.style.top = `${rect.top - 10}px`;
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.style.opacity = '0';
                setTimeout(() => trail.remove(), 500);
            }, 300);
        });
    });
}

// Call this in your DOMContentLoaded function
setupBinaryTrail();

function setupClickParticles() {
    document.addEventListener('click', (e) => {
        const burst = document.createElement('div');
        burst.classList.add('particle-burst');
        burst.style.left = `${e.clientX}px`;
        burst.style.top = `${e.clientY}px`;
        document.body.appendChild(burst);
        
        setTimeout(() => {
            burst.remove();
        }, 1000);
    });
}

// Call this in your DOMContentLoaded function
setupClickParticles();

function setupTechButtons() {
    const buttons = document.querySelectorAll('a, button');
    
    buttons.forEach(button => {
        // Create wave effect container
        const wave = document.createElement('div');
        wave.classList.add('tech-wave');
        button.appendChild(wave);
        
        button.addEventListener('mouseenter', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;
            wave.style.transform = 'translate(-50%, -50%) scale(1)';
            wave.style.opacity = '1';
            
            setTimeout(() => {
                wave.style.transform = 'translate(-50%, -50%) scale(5)';
                wave.style.opacity = '0';
            }, 10);
        });
    });
}

// Call this in your DOMContentLoaded function
setupTechButtons();

function enhanceNeuralConnection() {
    const connection = document.querySelector('.neural-connection');
    
    connection.addEventListener('mouseenter', () => {
        connection.classList.add('neural-active');
    });
    
    connection.addEventListener('mouseleave', () => {
        connection.classList.remove('neural-active');
    });
}

// Call this in your DOMContentLoaded function
enhanceNeuralConnection();


// Chatbot functionality
document.querySelector('.chatbot-icon').addEventListener('click', function() {
    // Here you can add your chatbot opening logic
    alert('AI Assistant activated. How can I help you?');
    // In a real implementation, you would open a chat window here
});

// Optional: Add CPU usage animation
function updateCpuUsage() {
    const cpuPercent = document.querySelector('.cpu-percent');
    let usage = 0;
    
    const interval = setInterval(() => {
        usage = Math.min(usage + Math.random() * 10, 85 + Math.random() * 15);
        cpuPercent.textContent = Math.floor(usage);
        document.querySelector('.cpu-bar').style.width = `${usage}%`;
        
        if(usage >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

// Start the CPU animation when page loads
window.addEventListener('load', updateCpuUsage);