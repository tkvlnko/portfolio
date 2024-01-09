const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 20.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.38) * 1.5  * (1.0 - distort), 2.0);
    gl_FragColor = vec4(color, 6.0);
}

`;

export default fragmentShader;