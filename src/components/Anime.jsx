/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 anime.gltf 
Author: Veterock (https://sketchfab.com/windofglass)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/violette-9fc1b1303bee4e6b9d5a67335a517a7b
Title: Violette
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/anime.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.girl_Body_m_0.geometry} material={materials.Body_m} />
      <mesh geometry={nodes.girl_Face_m_0.geometry} material={materials.Face_m} />
      <mesh geometry={nodes.girl_Lips_m_0.geometry} material={materials.Lips_m} />
      <mesh geometry={nodes.girl_Teeth_m_0.geometry} material={materials.Teeth_m} />
      <mesh geometry={nodes.girl_Ears_m_0.geometry} material={materials.Ears_m} />
      <mesh geometry={nodes.girl_Legs_m_0.geometry} material={materials.Legs_m} />
      <mesh geometry={nodes.girl_EyeSocket_m_0.geometry} material={materials.EyeSocket_m} />
      <mesh geometry={nodes.girl_Mouth_m_0.geometry} material={materials.Mouth_m} />
      <mesh geometry={nodes.girl_Arms_m_0.geometry} material={materials.Arms_m} />
      <mesh geometry={nodes.girl_Pupils_m_0.geometry} material={materials.Pupils_m} />
      <mesh geometry={nodes.girl_Fingernails_m_0.geometry} material={materials.Fingernails_m} />
      <mesh geometry={nodes.girl_Irises_m_0.geometry} material={materials.Irises_m} />
      <mesh geometry={nodes.girl_Sclera_m_0.geometry} material={materials.Sclera_m} />
      <mesh geometry={nodes.girl_Eyelashes_m_0.geometry} material={materials.Eyelashes_m} />
      <mesh geometry={nodes.girl_Eyelashes2_m_0.geometry} material={materials.Eyelashes2_m} />
      <mesh geometry={nodes.girl_Hair_m_0.geometry} material={materials.Hair_m} />
      <mesh geometry={nodes.girl_hair_base_m_0.geometry} material={materials.hair_base_m} />
      <mesh geometry={nodes.girl_down_wear_m_0.geometry} material={materials.down_wear_m} />
      <mesh geometry={nodes.girl_top_wear_m_0.geometry} material={materials.top_wear_m} />
      <mesh geometry={nodes.girl_fur_m_0.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_fur_m_0_1.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_fur_m_0_2.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_fur_m_0_3.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_fur_m_0_4.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_fur_m_0_5.geometry} material={materials.fur_m} />
      <mesh geometry={nodes.girl_Boots_m_0.geometry} material={materials.Boots_m} />
      <mesh geometry={nodes.girl_boot_buckles_m_0.geometry} material={materials.boot_buckles_m} />
      <mesh geometry={nodes.girl_Stockings_m_0.geometry} material={materials.Stockings_m} />
    </group>
  )
}

useGLTF.preload('/anime.gltf')