// eslint-disable-next-line no-unused-vars
import { React, useMemo, useRef } from 'react'
import vertexShader from "./vertexShader"
import fragmentShader from "./fragmentShader"
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";



export const Blob = () => {
    const mesh = useRef();
    const hover = useRef(false);

    const uniforms = useMemo(() => {
      return {
        u_time: { value: 0 },
        u_intensity: { value: 0.7 },
      };
    });

    useFrame((state) => {
      const { clock } = state;
      if (mesh.current) {
        mesh.current.material.uniforms.u_time.value =
          0.4 * clock.getElapsedTime();
  
        mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
          mesh.current.material.uniforms.u_intensity.value,
          hover.current ? 1 : 0.15,
          0.02
        );
      }
    });
  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 20]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}

        />
    </mesh>
    
  )
}

export default Blob