"use client";

import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Primary Glow */}
      <div 
        className="absolute -top-[10%] -left-[10%] h-[70%] w-[70%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      
      {/* Secondary Glow */}
      <div 
        className="absolute -bottom-[10%] -right-[10%] h-[70%] w-[70%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse" 
        style={{ animationDuration: '12s' }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* Vignette effect to soften edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
};

// This matches the 'import AnimatedBackground' (no braces) in your layout
export default AnimatedBackground;