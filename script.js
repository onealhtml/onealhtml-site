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
var letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
