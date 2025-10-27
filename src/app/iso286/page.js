"use client";
import React, { useState, useMemo } from 'react';
import { Calculator, Info } from 'lucide-react';

const ISO286Calculator = () => {
  const [nominalSize, setNominalSize] = useState(50);
  const [holeClass, setHoleClass] = useState('H7');
  const [shaftClass, setShaftClass] = useState('h6');
  const [language, setLanguage] = useState('en');

  const t = {
    en: {
      title: "ISO 286 Tolerance Calculator",
      subtitle: "Holes & Shafts Fit Calculations",
      nominalDiameter: "Nominal Diameter (mm)",
      holeTolerance: "Hole Tolerance Class",
      shaftTolerance: "Shaft Tolerance Class",
      calculate: "Calculate",
      fitType: "Fit Type",
      visualRep: "Visual Representation",
      holeDeviations: "Hole Deviations",
      shaftDeviations: "Shaft Deviations",
      upperDeviation: "Upper Deviation",
      lowerDeviation: "Lower Deviation",
      toleranceField: "Tolerance Field",
      limitsOfSize: "Limits of Size",
      minSize: "Min Size",
      maxSize: "Max Size",
      maxClearance: "Maximum Clearance",
      minClearance: "Minimum Clearance"
    },
    fr: {
      title: "Calculateur de Tolérance ISO 286",
      subtitle: "Calculs d'Ajustements Alésages & Arbres",
      nominalDiameter: "Diamètre Nominal (mm)",
      holeTolerance: "Classe de Tolérance Alésage",
      shaftTolerance: "Classe de Tolérance Arbre",
      calculate: "Calculer",
      fitType: "Type d'Ajustement",
      visualRep: "Représentation Visuelle",
      holeDeviations: "Écarts Alésage",
      shaftDeviations: "Écarts Arbre",
      upperDeviation: "Écart Supérieur",
      lowerDeviation: "Écart Inférieur",
      toleranceField: "Champ de Tolérance",
      limitsOfSize: "Cotes Limites",
      minSize: "Cote Min",
      maxSize: "Cote Max",
      maxClearance: "Jeu Maximum",
      minClearance: "Jeu Minimum"
    }
  };

  const generateClasses = (letters, grades, isUpperCase) => {
    const classes = [];
    letters.forEach(letter => {
      grades[letter].forEach(grade => {
        const letterCase = isUpperCase ? letter.toUpperCase() : letter.toLowerCase();
        classes.push(`${letterCase}${grade}`);
      });
    });
    return classes;
  };

  const holeGrades = {
    'a': [5, 6, 7, 8, 9, 10, 11], 'b': [5, 6, 7, 8, 9, 10, 11], 'c': [5, 6, 7, 8, 9, 10, 11],
    'd': [5, 6, 7, 8, 9, 10, 11], 'e': [5, 6, 7, 8, 9, 10, 11], 'f': [5, 6, 7, 8, 9, 10, 11],
    'g': [5, 6, 7, 8, 9, 10, 11], 'h': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    'j': [5, 6, 7, 8, 9, 10, 11, 12], 'k': [5, 6, 7, 8, 9, 10, 11, 12],
    'm': [5, 6, 7, 8, 9, 10, 11, 12], 'n': [5, 6, 7, 8, 9, 10, 11, 12],
    'p': [6, 7, 8, 9, 10, 11, 12], 'r': [6, 7, 8, 9, 10, 11, 12],
    's': [6, 7, 8, 9, 10, 11, 12], 't': [6, 7, 8, 9, 10, 11, 12],
    'u': [6, 7, 8, 9, 10, 11, 12], 'x': [7, 8, 9, 10, 11], 'z': [7, 8, 9, 10, 11],
    'za': [7, 8, 9, 10, 11], 'zb': [7, 8, 9, 10, 11], 'zc': [7, 8, 9, 10, 11]
  };

  const holeClasses = generateClasses(Object.keys(holeGrades), holeGrades, true);
  const shaftClasses = generateClasses(Object.keys(holeGrades), holeGrades, false);

  const calculateITGrade = (grade, D) => {
    const i = 0.45 * Math.pow(D, 1/3) + 0.001 * D;
    const itFactors = { 1: 0.55, 2: 0.9, 3: 1.4, 4: 2.3, 5: 7, 6: 10, 7: 16, 8: 25, 9: 40, 10: 64, 11: 100, 12: 160 };
    return i * itFactors[grade];
  };

  const getD = (size) => {
    if (size <= 3) return Math.sqrt(1 * 3);
    if (size <= 6) return Math.sqrt(3 * 6);
    if (size <= 10) return Math.sqrt(6 * 10);
    if (size <= 18) return Math.sqrt(10 * 18);
    if (size <= 30) return Math.sqrt(18 * 30);
    if (size <= 50) return Math.sqrt(30 * 50);
    if (size <= 80) return Math.sqrt(50 * 80);
    if (size <= 120) return Math.sqrt(80 * 120);
    if (size <= 180) return Math.sqrt(120 * 180);
    if (size <= 250) return Math.sqrt(180 * 250);
    if (size <= 315) return Math.sqrt(250 * 315);
    if (size <= 400) return Math.sqrt(315 * 400);
    return Math.sqrt(400 * 500);
  };

  const getDelta = (size) => {
    if (size <= 18) return 0;
    if (size <= 50) return 1;
    if (size <= 250) return 2;
    return 3;
  };

  const getFundamentalDeviation = (letter, size, isHole) => {
    const shaftDev = {
      'a': -310, 'b': -170, 'c': -120, 'd': -80, 'e': -50, 'f': -25, 'g': -9, 'h': 0,
      'j': 7, 'k': -2, 'm': 8, 'n': 13, 'p': 21, 'r': 28, 's': 35, 't': 43,
      'u': 51, 'v': 62, 'x': 64, 'y': 73, 'z': 83, 'za': 112, 'zb': 153, 'zc': 198
    };

    const holeDev = {
      'A': 310, 'B': 170, 'C': 120, 'D': 80, 'E': 50, 'F': 25, 'G': 9, 'H': 0,
      'J': -7, 'K': 2, 'M': -8, 'N': -13
    };

    if (isHole) {
      if (['P', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'ZA', 'ZB', 'ZC'].includes(letter)) {
        const lower = letter.toLowerCase();
        return -(shaftDev[lower] || 0) - getDelta(size);
      }
      return holeDev[letter] || 0;
    }
    return shaftDev[letter] || 0;
  };

  const calculateTolerance = (classStr, isHole) => {
    const match = classStr.match(/^([A-Za-z]+)(\d+)$/);
    if (!match) return null;
    
    const letter = match[1];
    const grade = parseInt(match[2]);
    const D = getD(nominalSize);
    const tolerance = calculateITGrade(grade, D);
    const fundamentalDev = getFundamentalDeviation(letter, nominalSize, isHole);

    let upperDev, lowerDev;
    
    if (isHole) {
      if (letter === 'H') {
        upperDev = tolerance;
        lowerDev = 0;
      } else if (['P', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'ZA', 'ZB', 'ZC'].includes(letter)) {
        upperDev = fundamentalDev;
        lowerDev = fundamentalDev - tolerance;
      } else {
        lowerDev = fundamentalDev;
        upperDev = fundamentalDev + tolerance;
      }
    } else {
      if (letter === 'h') {
        upperDev = 0;
        lowerDev = -tolerance;
      } else {
        upperDev = fundamentalDev;
        lowerDev = fundamentalDev - tolerance;
      }
    }

    return {
      upperDev: upperDev / 1000,
      lowerDev: lowerDev / 1000,
      tolerance: tolerance / 1000,
      maxSize: nominalSize + upperDev / 1000,
      minSize: nominalSize + lowerDev / 1000
    };
  };

  const hole = useMemo(() => calculateTolerance(holeClass, true), [nominalSize, holeClass]);
  const shaft = useMemo(() => calculateTolerance(shaftClass, false), [nominalSize, shaftClass]);

  const fit = useMemo(() => {
    if (!hole || !shaft) return null;
    const maxClearance = hole.maxSize - shaft.minSize;
    const minClearance = hole.minSize - shaft.maxSize;
    let fitType = minClearance >= 0 ? 'Clearance Fit' : maxClearance <= 0 ? 'Interference Fit' : 'Transition Fit';
    return { maxClearance, minClearance, fitType };
  }, [hole, shaft]);

 // Compute the total vertical span needed (in mm)
const maxDeviation = Math.max(
  Math.abs(hole?.upperDev || 0),
  Math.abs(hole?.lowerDev || 0),
  Math.abs(shaft?.upperDev || 0),
  Math.abs(shaft?.lowerDev || 0)
);

// Compute scaling so the tallest deviation fits nicely inside ~350px
const visualScale = maxDeviation > 0 ? 350 / (maxDeviation * 2) : 1000;

// Make the baselineY always centered vertically
const svgHeight = 400; // Total SVG height
const baselineY = svgHeight / 2; // Center baseline
const centerX = 400;


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 p-8 opacity-85 mb-30">

      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 mt-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">ISO 286 Tolerance Calculator</h1>
                <p className="text-white/70 text-sm">Holes & Shafts Fit Calculations | Calculs d'Ajustements Alésages & Arbres</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Nominal Diameter (mm) | Diamètre Nominal (mm)</label>
              <input type="number" value={nominalSize} onChange={(e) => setNominalSize(Math.max(1, parseFloat(e.target.value) || 1))}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                min="1" max="500" step="0.1" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Hole Tolerance Class | Classe de Tolérance Alésage</label>
              <select value={holeClass} onChange={(e) => setHoleClass(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20">
                {holeClasses.map(cls => <option key={cls} value={cls} className="bg-gray-800">{cls}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Shaft Tolerance Class | Classe de Tolérance Arbre</label>
              <select value={shaftClass} onChange={(e) => setShaftClass(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20">
                {shaftClasses.map(cls => <option key={cls} value={cls} className="bg-gray-800">{cls}</option>)}
              </select>
            </div>
          </div>
          <button className="w-full mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5" /> Calculate | Calculer
          </button>
        </div>

        {hole && shaft && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {fit && (
                <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Fit Type | Type d'Ajustement</h3>
                  <div className="text-xl font-bold text-green-400">{fit.fitType}</div>
                </div>
              )}

              <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Visual Representation | Représentation Visuelle</h3>
<svg
  width="100%"
  height={svgHeight}
  viewBox={`0 0 800 ${svgHeight}`}
  className="bg-white/5 rounded-lg w-full h-auto"
  preserveAspectRatio="xMidYMid meet"
>

                  <line x1="150" y1={baselineY} x2="700" y2={baselineY} stroke="#ffffffff" strokeWidth="2" strokeOpacity="0.8" />
                  <text x="5" y={baselineY + 5} fontSize="14" fill="#ffffffff" opacity="0.9"fontWeight="bold">Nominal Ø{nominalSize.toFixed(1)} ±0.0</text>
                  

                  <g>
                    <text x={centerX - 300} y={baselineY - 80} fontSize="16" fontWeight="bold" fill="#ffffffff">Hole</text>
                    <rect x={centerX - 150} y={baselineY - hole.upperDev * visualScale} width="120"
                      height={Math.abs(hole.tolerance) * visualScale} fill="#ffffffff" fillOpacity="0.6" stroke="#ffffffff" strokeWidth="2" />
                    <line x1={centerX - 160} y1={baselineY - hole.upperDev * visualScale} x2={centerX - 180} y2={baselineY - hole.upperDev * visualScale} stroke="#ffffffff" strokeWidth="1.5" />
                    <line x1={centerX - 160} y1={baselineY - hole.lowerDev * visualScale} x2={centerX - 180} y2={baselineY - hole.lowerDev * visualScale} stroke="#ffffffff" strokeWidth="1.5" />
                    <line x1={centerX - 170} y1={baselineY - hole.upperDev * visualScale} x2={centerX - 170} y2={baselineY - hole.lowerDev * visualScale} stroke="#ffffffff" strokeWidth="1.5" />
                    <text x={centerX - 230} y={baselineY - hole.upperDev * visualScale + 5} fontSize="14" fill="#ffffffff">{(hole.upperDev >= 0 ? '+' : '') + hole.upperDev.toFixed(3)}</text>
                    <text x={centerX - 230} y={baselineY - hole.lowerDev * visualScale + 5} fontSize="14" fill="#ffffffff">{(hole.lowerDev >= 0 ? '+' : '') + hole.lowerDev.toFixed(3)}</text>
                  </g>

                  <g>
                    <text x={centerX + 250} y={baselineY - -80} fontSize="16" fontWeight="bold" fill="#ff0000bb">Shaft</text>
                    <rect x={centerX + 30} y={baselineY - shaft.upperDev * visualScale} width="120"
                      height={Math.abs(shaft.lowerDev - shaft.upperDev) * visualScale} fill="#B01515" fillOpacity="0.6" stroke="#B01515" strokeWidth="2" />
                    <line x1={centerX + 160} y1={baselineY - shaft.upperDev * visualScale} x2={centerX + 180} y2={baselineY - shaft.upperDev * visualScale} stroke="#B01515" strokeWidth="1.5" />
                    <line x1={centerX + 160} y1={baselineY - shaft.lowerDev * visualScale} x2={centerX + 180} y2={baselineY - shaft.lowerDev * visualScale} stroke="#B01515" strokeWidth="1.5" />
                    <line x1={centerX + 170} y1={baselineY - shaft.upperDev * visualScale} x2={centerX + 170} y2={baselineY - shaft.lowerDev * visualScale} stroke="#B01515" strokeWidth="1.5" />
                    <text x={centerX + 190} y={baselineY - shaft.upperDev * visualScale + 5} fontSize="14" fill="#ffffffff">{(shaft.upperDev >= 0 ? '+' : '') + shaft.upperDev.toFixed(3)}</text>
                    <text x={centerX + 190} y={baselineY - shaft.lowerDev * visualScale + 5} fontSize="14" fill="#ffffffff">{(shaft.lowerDev >= 0 ? '+' : '') + shaft.lowerDev.toFixed(3)}</text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Hole Deviations | Écarts Alésage</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Upper Deviation (ES) | Écart Supérieur</span>
                    <span className="text-white font-mono font-semibold">{(hole.upperDev >= 0 ? '+' : '') + hole.upperDev.toFixed(3)} mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Lower Deviation (EI) | Écart Inférieur</span>
                    <span className="text-white font-mono font-semibold">{(hole.lowerDev >= 0 ? '+' : '') + hole.lowerDev.toFixed(3)} mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Tolerance Field (IT) | Champ de Tolérance</span>
                    <span className="text-white font-mono font-semibold">{hole.tolerance.toFixed(3)} mm</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="text-white/70 text-sm mb-2">Limits of Size | Cotes Limites</div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/70 text-sm">Min Size | Cote Min</span>
                      <span className="text-white font-mono">{hole.minSize.toFixed(3)} mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Max Size | Cote Max</span>
                      <span className="text-white font-mono">{hole.maxSize.toFixed(3)} mm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Shaft Deviations | Écarts Arbre</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Upper Deviation (es) | Écart Supérieur</span>
                    <span className="text-white font-mono font-semibold">{(shaft.upperDev >= 0 ? '+' : '') + shaft.upperDev.toFixed(3)} mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Lower Deviation (ei) | Écart Inférieur</span>
                    <span className="text-white font-mono font-semibold">{(shaft.lowerDev >= 0 ? '+' : '') + shaft.lowerDev.toFixed(3)} mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Tolerance Field (IT) | Champ de Tolérance</span>
                    <span className="text-white font-mono font-semibold">{shaft.tolerance.toFixed(3)} mm</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="text-white/70 text-sm mb-2">Limits of Size | Cotes Limites</div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white/70 text-sm">Min Size | Cote Min</span>
                      <span className="text-white font-mono">{shaft.minSize.toFixed(3)} mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Max Size | Cote Max</span>
                      <span className="text-white font-mono">{shaft.maxSize.toFixed(3)} mm</span>
                    </div>
                  </div>
                </div>
              </div>

              {fit && (
                <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 mb-10 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Maximum Clearance | Jeu Maximum</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Maximum Clearance | Jeu Max</span>
                      <span className="text-green-400 font-mono font-semibold">{(fit.maxClearance >= 0 ? '+' : '') + fit.maxClearance.toFixed(3)} mm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">Minimum Clearance | Jeu Min</span>
                      <span className="text-green-400 font-mono font-semibold">{(fit.minClearance >= 0 ? '+' : '') + fit.minClearance.toFixed(3)} mm</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ISO286Calculator;