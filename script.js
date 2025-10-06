var canvas = document.querySelector('#matrix'),
    ctx = canvas.getContext('2d');

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    fontSize = window.innerWidth <= 480 ? 14 : 18; // Aumentando o tamanho da fonte
    columns = Math.floor(canvas.width / fontSize);

    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
    }
}

// Caracteres japoneses katakana e símbolos para aspecto mais autêntico do Matrix
var letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
letters = letters.split('');

var fontSize, columns, drops;

setupCanvas();

function draw() {
    // Fade mais suave e gradual
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Fonte mais grossa e definida
    ctx.font = 'bold ' + fontSize + 'px monospace';
    ctx.textBaseline = 'top';
    
    for (var i = 0; i < columns; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        
        // Efeito Matrix com cores mais vibrantes e definidas
        var intensity = Math.random();
        if (intensity > 0.97) {
            // Branco brilhante para a "ponta" da cascata
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 3;
        } else if (intensity > 0.85) {
            // Verde claro brilhante
            ctx.fillStyle = '#00ff41';
            ctx.shadowColor = '#00ff41';
            ctx.shadowBlur = 2;
        } else if (intensity > 0.6) {
            // Verde médio vibrante
            ctx.fillStyle = '#00ee00';
            ctx.shadowColor = '#00ee00';
            ctx.shadowBlur = 1;
        } else {
            // Verde base mais sólido
            ctx.fillStyle = '#00bb00';
            ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset shadow para próximo caractere
        ctx.shadowBlur = 0;

        // Velocidade normal
        drops[i]++;

        // Reset da coluna
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = Math.floor(Math.random() * -100);
        }
    }
}

setInterval(draw, 33);

window.addEventListener('resize', setupCanvas);

// --- Typing Animation ---
document.addEventListener('DOMContentLoaded', () => {
  const typingTextElement = document.getElementById('typing-text');
  const cursorElement = document.querySelector('.cursor');
  const words = [
    "Software Engineer",
    "AI Expecialist", 
    "Music Producer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const text = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

    typingTextElement.textContent = text;
    typingTextElement.setAttribute('data-text', text); // Update for glitch effect

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    // Switch to deleting when word is fully typed
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting - reduzido de 2000 para 1000
      return;
    }

    // Switch to next word when fully deleted
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300); // Pause before typing next word - reduzido de 500 para 300
      return;
    }

    const typingSpeed = isDeleting ? 50 : 80; // Velocidades muito mais rápidas: 100->50 e 200->80
    setTimeout(type, typingSpeed);
  }

  type(); // Start the animation
});
