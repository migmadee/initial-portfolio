'use client';

import { skills } from '@/Data';
import React, { useState, useEffect } from 'react';

type Skill = {
  name: string;
  color: string;
  textColor: string;
};

type FloatingSkill = Skill & {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  direction: number;
  rotationSpeed: number;
};



export default function FloatingSkills() {
  const [floatingElements, setFloatingElements] = useState<FloatingSkill[]>([]);

  useEffect(() => {
    const elements: FloatingSkill[] = skills.map((skill, index) => ({
      ...skill,
      id: index,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 40 + 80,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 2
    }));
    setFloatingElements(elements);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements(prev =>
        prev.map(element => {
          let newX = element.x + Math.cos(element.direction) * element.speed;
          let newY = element.y + Math.sin(element.direction) * element.speed;
          let newDirection = element.direction;

          if (newX <= 5 || newX >= 90) {
            newDirection = Math.PI - element.direction;
            newX = Math.max(5, Math.min(90, newX));
          }
          if (newY <= 5 || newY >= 85) {
            newDirection = -element.direction;
            newY = Math.max(5, Math.min(85, newY));
          }

          return {
            ...element,
            x: newX,
            y: newY,
            direction: newDirection,
            rotation: (element.rotation + element.rotationSpeed) % 360
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      {floatingElements.map((skill) => (
        <div
          key={skill.id}
          className={`absolute transition-all duration-75 ease-linear cursor-pointer group ${skill.color} ${skill.textColor} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-3xl`}
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            width: `${skill.size}px`,
            height: `${skill.size}px`,
            transform: `rotate(${skill.rotation}deg)`,
            zIndex: 10,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
          }}
        >
          <span
            className="font-bold text-center px-2 leading-tight select-none"
            style={{
              fontSize: `${Math.max(10, skill.size / 8)}px`,
              transform: `rotate(${-skill.rotation}deg)`
            }}
          >
            {skill.name}
          </span>

          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)`
            }}
          />
        </div>
      ))}

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          My Skills
        </h1>
        <p className="text-xl text-gray-200 drop-shadow-md">
          Interactive floating technology stack
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <p className="text-white/80 text-sm">
          Hover over the floating skills to interact with them
        </p>
      </div>
    </div>
  );
}
