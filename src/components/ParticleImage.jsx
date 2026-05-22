import { useEffect, useRef, useState } from "react";

function ParticleImage({ src, className }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const [particles, setParticles] = useState([]);

  /* ================= CREATE PARTICLES ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    const image = new Image();
    image.src = src;

    image.onload = () => {
      const width = 350;
      const height = 450;

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      const tempParticles = [];

      const gap = 5;

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;

          const alpha = data[index + 3];
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          if (alpha > 120 && r + g + b > 90) {
            tempParticles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              originX: x,
              originY: y,
              color: `rgb(${r},${g},${b})`,
              size: Math.random() * 1.3 + 0.6,
            });
          }
        }
      }

      setParticles(tempParticles);
    };
  }, [src]);

  /* ================= MOUSE ================= */
  useEffect(() => {
    const canvas = canvasRef.current;

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    const leave = () => {
      mouseRef.current = { x: null, y: null };
    };

    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);

    return () => {
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
    };
  }, []);

  /* ================= ANIMATION ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const radius = 70;

      particles.forEach((p) => {
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0) {
          p.x += (dx / dist) * dist * 0.06;
          p.y += (dy / dist) * dist * 0.06;
        }

        if (mouse.x !== null) {
          const mx = mouse.x - p.x;
          const my = mouse.y - p.y;

          const mouseDist = Math.sqrt(mx * mx + my * my);

          if (mouseDist < radius) {
            const force = (radius - mouseDist) / radius;

            p.x -= (mx / mouseDist) * force * 15;
            p.y -= (my / mouseDist) * force * 15;
          }
        }

        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default ParticleImage;