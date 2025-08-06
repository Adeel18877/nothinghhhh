function startCharm() {
  const canvas = document.getElementById("charm");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const hearts = [];
  const heartCount = 100;

  for (let i = 0; i < heartCount; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 20 + 10,
      speedY: Math.random() * 1 + 0.5,
      alpha: Math.random() * 0.5 + 0.5
    });
  }

  function drawHeart(x, y, size, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 50, size / 50);
    ctx.beginPath();
    ctx.moveTo(25, 15);
    ctx.bezierCurveTo(25, 0, 0, 0, 0, 15);
    ctx.bezierCurveTo(0, 30, 25, 45, 25, 45);
    ctx.bezierCurveTo(25, 45, 50, 30, 50, 15);
    ctx.bezierCurveTo(50, 0, 25, 0, 25, 15);
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 105, 180, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let heart of hearts) {
      drawHeart(heart.x, heart.y, heart.size, heart.alpha);
      heart.y += heart.speedY;

      if (heart.y > canvas.height) {
        heart.y = -heart.size;
        heart.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}
