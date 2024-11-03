export function startStarFieldAnimation(canvasId: string): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      console.error(`Canvas with id "${canvasId}" not found.`);
      return;
    }
  
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
      console.error("Failed to get canvas 2D context.");
      return;
    }
  
    canvas.width = canvas.parentElement?.clientWidth!;
    canvas.height = canvas.parentElement?.clientHeight!;
  
    interface Star {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }
  
    const stars: Star[] = [];
    const FPS = 60;
    const numStars = 35;
  
    const mouse = {
      x: 0,
      y: 0
    };
  
    // Populate stars array
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }
  
    // Draw the scene
    function draw(): void {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.globalCompositeOperation = "lighter";
  
      stars.forEach(star => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
      });
  
      ctx.beginPath();
      stars.forEach(starI => {
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        stars.forEach(starII => {
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        });
      });
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  
    function distance(point1: { x: number; y: number }, point2: { x: number; y: number }): number {
      const xs = point2.x - point1.x;
      const ys = point2.y - point1.y;
      return Math.sqrt(xs * xs + ys * ys);
    }
  
    // Update star locations
    function update(): void {
      stars.forEach(star => {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;
  
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
      });
    }
  
    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  
    // Update and draw
    function tick(): void {
      draw();
      update();
      requestAnimationFrame(tick);
    }
  
    tick();
  }
  