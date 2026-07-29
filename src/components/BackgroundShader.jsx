import React, { useEffect, useRef } from 'react';

export default function BackgroundShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId;

    const syncSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    syncSize();

    window.addEventListener('resize', syncSize);

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
          vec2 uv = v_texCoord;
          vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
          
          // Background deep space obsidian
          vec3 color = vec3(0.05, 0.05, 0.09);
          
          // Animated gradient pulse
          float pulse = sin(u_time * 0.5) * 0.5 + 0.5;
          vec3 accentBlue = vec3(0.2, 0.4, 1.0);
          vec3 accentPurple = vec3(0.6, 0.2, 1.0);
          color += mix(accentBlue, accentPurple, uv.x) * 0.06 * pulse;

          // Moving cyber particles
          for(float i = 0.0; i < 45.0; i++) {
              float t = u_time * (0.1 + hash(vec2(i, 0.0)) * 0.2);
              vec2 pos = vec2(
                  sin(t + i * 1.5) * 1.3,
                  cos(t * 0.8 + i) * 0.9
              );
              
              // Mouse interactive drift
              vec2 m = (u_mouse / u_resolution) * 2.0 - 1.0;
              pos += m * 0.12 * hash(vec2(i, 1.0));

              float dist = length(p - pos);
              float size = 0.002 + hash(vec2(i, 2.0)) * 0.005;
              float brightness = smoothstep(size, 0.0, dist);
              
              vec3 pCol = mix(accentBlue, accentPurple, hash(vec2(i, 3.0)));
              color += pCol * brightness * (0.6 + 0.4 * sin(u_time * 1.5 + i));
          }

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (time) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
