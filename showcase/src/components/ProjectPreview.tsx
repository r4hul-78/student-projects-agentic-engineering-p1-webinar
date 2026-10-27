import React from 'react';

interface ProjectPreviewProps {
  type: 'calculator' | 'carbon' | 'countdown' | 'cafe' | 'aerocalc' | 'pomodoro';
  title: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type, title }) => {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16 / 10',
        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'var(--color-surface-subtle)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={`Visual preview for ${title}`}
    >
      {type === 'calculator' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#f0fcfc" />
          {/* Subtle grid */}
          <path d="M0 50h400M0 100h400M0 150h400M0 200h400M100 0v250M200 0v250M300 0v250" stroke="#ddf7f7" strokeWidth="1" />
          
          {/* Calculator Card */}
          <rect x="80" y="25" width="240" height="200" rx="14" fill="#ffffff" stroke="#c8e0e2" strokeWidth="1.5" />
          
          {/* Top Bar */}
          <rect x="95" y="38" width="210" height="38" rx="8" fill="#10363d" />
          <text x="105" y="52" fill="#8fbfc3" fontSize="10" fontFamily="monospace">25 + 15 * 2</text>
          <text x="295" y="68" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="end">55</text>
          
          {/* Keypad Buttons */}
          <rect x="95" y="85" width="45" height="26" rx="6" fill="#ddf7f7" stroke="#bfeff0" />
          <text x="117" y="102" fill="#124650" fontSize="11" fontWeight="bold" textAnchor="middle">AC</text>
          
          <rect x="150" y="85" width="45" height="26" rx="6" fill="#ddf7f7" stroke="#bfeff0" />
          <text x="172" y="102" fill="#124650" fontSize="11" fontWeight="bold" textAnchor="middle">DEL</text>
          
          <rect x="205" y="85" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="227" y="102" fill="#172b30" fontSize="11" fontWeight="bold" textAnchor="middle">±</text>
          
          <rect x="260" y="85" width="45" height="26" rx="6" fill="#124650" />
          <text x="282" y="102" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">÷</text>

          {/* Row 2 */}
          <rect x="95" y="118" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="117" y="135" fill="#172b30" fontSize="12" textAnchor="middle">7</text>
          <rect x="150" y="118" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="172" y="135" fill="#172b30" fontSize="12" textAnchor="middle">8</text>
          <rect x="205" y="118" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="227" y="135" fill="#172b30" fontSize="12" textAnchor="middle">9</text>
          <rect x="260" y="118" width="45" height="26" rx="6" fill="#1597a1" />
          <text x="282" y="135" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">×</text>

          {/* Row 3 */}
          <rect x="95" y="151" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="117" y="168" fill="#172b30" fontSize="12" textAnchor="middle">4</text>
          <rect x="150" y="151" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="172" y="168" fill="#172b30" fontSize="12" textAnchor="middle">5</text>
          <rect x="205" y="151" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="227" y="168" fill="#172b30" fontSize="12" textAnchor="middle">6</text>
          <rect x="260" y="151" width="45" height="26" rx="6" fill="#1597a1" />
          <text x="282" y="168" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">−</text>

          {/* Row 4 */}
          <rect x="95" y="184" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="117" y="201" fill="#172b30" fontSize="12" textAnchor="middle">1</text>
          <rect x="150" y="184" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="172" y="201" fill="#172b30" fontSize="12" textAnchor="middle">2</text>
          <rect x="205" y="184" width="45" height="26" rx="6" fill="#f6fafa" stroke="#c8e0e2" />
          <text x="227" y="201" fill="#172b30" fontSize="12" textAnchor="middle">3</text>
          <rect x="260" y="184" width="45" height="26" rx="6" fill="#20b4bc" />
          <text x="282" y="201" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">=</text>
        </svg>
      )}

      {type === 'carbon' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0c1e1c" />
          {/* Ambient glow */}
          <circle cx="200" cy="125" r="90" fill="#00ff87" fillOpacity="0.08" />
          
          {/* Main Card */}
          <rect x="50" y="30" width="300" height="190" rx="14" fill="#112926" stroke="#1d4d44" strokeWidth="1.5" />
          
          {/* Header */}
          <circle cx="75" cy="55" r="10" fill="#1a3d37" />
          <path d="M72 55c0-4 6-7 6-7s6 3 6 7a6 6 0 0 1-12 0z" fill="#00ff87" />
          <text x="93" y="60" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">EcoTrack · Campus Footprint</text>

          {/* Metric dial */}
          <rect x="75" y="80" width="250" height="60" rx="10" fill="#163832" stroke="#23544b" />
          <text x="95" y="105" fill="#a4d4cc" fontSize="11" fontFamily="sans-serif">Daily Footprint:</text>
          <text x="95" y="130" fill="#00ff87" fontSize="24" fontWeight="bold" fontFamily="monospace">8.32 <tspan fontSize="13" fill="#a4d4cc">kg CO₂/day</tspan></text>
          <rect x="235" y="96" width="75" height="24" rx="12" fill="#204d43" stroke="#00ff87" strokeWidth="1" />
          <text x="272" y="112" fill="#00ff87" fontSize="9" fontWeight="bold" textAnchor="middle">Sustainable Scholar</text>

          {/* Progress bar */}
          <text x="75" y="160" fill="#8bbab2" fontSize="10">Transit (30%) · Power (42%) · Food (28%)</text>
          <rect x="75" y="170" width="250" height="10" rx="5" fill="#204d43" />
          <rect x="75" y="170" width="75" height="10" rx="5" fill="#00ff87" />
          <rect x="152" y="170" width="105" height="10" fill="#20b4bc" />
          <rect x="259" y="170" width="66" height="10" rx="0 5 5 0" fill="#eab308" />
          
          {/* Quick preset badges */}
          <rect x="75" y="192" width="70" height="18" rx="9" fill="#1b423b" />
          <text x="110" y="204" fill="#a4d4cc" fontSize="9" textAnchor="middle">Dorm Walker</text>
          <rect x="152" y="192" width="72" height="18" rx="9" fill="#1b423b" />
          <text x="188" y="204" fill="#a4d4cc" fontSize="9" textAnchor="middle">Bus Commuter</text>
          <rect x="230" y="192" width="70" height="18" rx="9" fill="#1b423b" />
          <text x="265" y="204" fill="#a4d4cc" fontSize="9" textAnchor="middle">Car Commuter</text>
        </svg>
      )}

      {type === 'countdown' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0f172a" />
          
          {/* Grid lines */}
          <path d="M0 60h400M0 120h400M0 180h400M80 0v250M160 0v250M240 0v250M320 0v250" stroke="#1e293b" strokeWidth="1" />
          
          {/* Card */}
          <rect x="40" y="25" width="320" height="200" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          
          {/* Header */}
          <text x="60" y="55" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Hackathon Countdown Hub</text>
          <rect x="270" y="40" width="72" height="22" rx="11" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
          <circle cx="282" cy="51" r="3.5" fill="#ef4444" />
          <text x="292" y="55" fill="#fca5a5" fontSize="10" fontWeight="bold">URGENT</text>
          
          {/* Event title */}
          <text x="60" y="85" fill="#38bdf8" fontSize="12" fontWeight="600">Sillico Sapiens HackSprint '26</text>
          <text x="60" y="102" fill="#94a3b8" fontSize="10">Main Auditorium & Hybrid Stream</text>
          
          {/* Ticking boxes */}
          <g transform="translate(60, 115)">
            <rect x="0" y="0" width="60" height="58" rx="8" fill="#0f172a" stroke="#334155" />
            <text x="30" y="32" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">02</text>
            <text x="30" y="48" fill="#94a3b8" fontSize="9" textAnchor="middle">DAYS</text>

            <rect x="70" y="0" width="60" height="58" rx="8" fill="#0f172a" stroke="#334155" />
            <text x="100" y="32" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">14</text>
            <text x="100" y="48" fill="#94a3b8" fontSize="9" textAnchor="middle">HOURS</text>

            <rect x="140" y="0" width="60" height="58" rx="8" fill="#0f172a" stroke="#334155" />
            <text x="170" y="32" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">38</text>
            <text x="170" y="48" fill="#94a3b8" fontSize="9" textAnchor="middle">MINS</text>

            <rect x="210" y="0" width="60" height="58" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="240" y="32" fill="#38bdf8" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">54</text>
            <text x="240" y="48" fill="#7dd3fc" fontSize="9" textAnchor="middle">SECS</text>
          </g>
          
          <rect x="60" y="190" width="130" height="22" rx="6" fill="#334155" />
          <text x="125" y="205" fill="#e2e8f0" fontSize="10" textAnchor="middle">+ Add New Event</text>
        </svg>
      )}

      {type === 'cafe' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#fdfbf7" />
          
          {/* Header Bar */}
          <rect x="30" y="20" width="340" height="40" rx="8" fill="#2c1a14" />
          <circle cx="55" cy="40" r="10" fill="#d97706" />
          {/* Steaming cup */}
          <path d="M51 40h8v4a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4v-4z" fill="#ffffff" />
          <path d="M59 41h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" stroke="#ffffff" strokeWidth="1" />
          <text x="75" y="45" fill="#fdfbf7" fontSize="13" fontWeight="bold" fontFamily="serif">MSR Cafe & Bistro</text>
          
          {/* Cart badge */}
          <rect x="300" y="30" width="55" height="20" rx="10" fill="#d97706" />
          <text x="327" y="44" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Cart (3)</text>

          {/* Menu items grid */}
          <g transform="translate(30, 75)">
            {/* Card 1 */}
            <rect x="0" y="0" width="105" height="135" rx="10" fill="#ffffff" stroke="#e8ded4" strokeWidth="1.2" />
            <rect x="10" y="10" width="85" height="50" rx="6" fill="#eaddd0" />
            <circle cx="52" cy="35" r="14" fill="#78350f" fillOpacity="0.4" />
            <text x="12" y="75" fill="#2c1a14" fontSize="10" fontWeight="bold">Signature Cold Brew</text>
            <text x="12" y="90" fill="#854d0e" fontSize="9">₹180</text>
            <rect x="12" y="102" width="81" height="20" rx="4" fill="#2c1a14" />
            <text x="52" y="116" fill="#ffffff" fontSize="9" textAnchor="middle">+ Add to Cart</text>

            {/* Card 2 */}
            <rect x="117" y="0" width="105" height="135" rx="10" fill="#ffffff" stroke="#e8ded4" strokeWidth="1.2" />
            <rect x="127" y="10" width="85" height="50" rx="6" fill="#fef3c7" />
            <rect x="145" y="25" width="50" height="20" rx="4" fill="#d97706" />
            <text x="129" y="75" fill="#2c1a14" fontSize="10" fontWeight="bold">Toasted Panini</text>
            <text x="129" y="90" fill="#854d0e" fontSize="9">₹240</text>
            <rect x="129" y="102" width="81" height="20" rx="4" fill="#2c1a14" />
            <text x="169" y="116" fill="#ffffff" fontSize="9" textAnchor="middle">+ Add to Cart</text>

            {/* Card 3: Admin Console snippet */}
            <rect x="234" y="0" width="105" height="135" rx="10" fill="#1c1917" stroke="#44403c" strokeWidth="1.2" />
            <text x="244" y="24" fill="#f59e0b" fontSize="10" fontWeight="bold">Backoffice Console</text>
            <text x="244" y="38" fill="#a8a29e" fontSize="8">PIN: 1234 (#admin)</text>
            <rect x="244" y="48" width="85" height="24" rx="4" fill="#292524" />
            <text x="250" y="63" fill="#22c55e" fontSize="8">#MSR-4819 Preparing</text>
            <rect x="244" y="78" width="85" height="24" rx="4" fill="#292524" />
            <text x="250" y="93" fill="#38bdf8" fontSize="8">Res: Table 4 (Window)</text>
            <text x="286" y="122" fill="#f59e0b" fontSize="8" textAnchor="middle">Offline Polyfill Active</text>
          </g>
        </svg>
      )}

      {type === 'aerocalc' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0d1b2a" />
          
          {/* Ambient orbs */}
          <circle cx="120" cy="80" r="70" fill="#1e3a8a" fillOpacity="0.3" filter="blur(20px)" />
          <circle cx="280" cy="170" r="80" fill="#0891b2" fillOpacity="0.25" filter="blur(20px)" />

          {/* Calculator Card */}
          <rect x="70" y="25" width="260" height="200" rx="16" fill="#1e293b" fillOpacity="0.9" stroke="#334155" strokeWidth="1.5" />
          
          {/* Toolbar */}
          <circle cx="95" cy="45" r="7" fill="#0284c7" />
          <text x="110" y="49" fill="#e2e8f0" fontSize="12" fontWeight="bold">AeroCalc</text>
          {/* Sound wave icon */}
          <path d="M265 41v8m5-12v16m5-20v24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
          <text x="285" y="49" fill="#94a3b8" fontSize="9">Audio</text>

          {/* Display screen */}
          <rect x="85" y="65" width="230" height="48" rx="8" fill="#0f172a" stroke="#1e293b" />
          <text x="95" y="82" fill="#64748b" fontSize="10" fontFamily="monospace">1,250 × 4.5 + 80 =</text>
          <text x="305" y="103" fill="#38bdf8" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="end">5,705</text>
          
          {/* Buttons snippet */}
          <g transform="translate(85, 125)">
            <rect x="0" y="0" width="48" height="24" rx="6" fill="#334155" />
            <text x="24" y="16" fill="#f8fafc" fontSize="11" textAnchor="middle">AC</text>
            <rect x="60" y="0" width="48" height="24" rx="6" fill="#334155" />
            <text x="84" y="16" fill="#f8fafc" fontSize="11" textAnchor="middle">⌫</text>
            <rect x="120" y="0" width="48" height="24" rx="6" fill="#334155" />
            <text x="144" y="16" fill="#f8fafc" fontSize="11" textAnchor="middle">%</text>
            <rect x="180" y="0" width="48" height="24" rx="6" fill="#0284c7" />
            <text x="204" y="16" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">÷</text>

            <rect x="0" y="32" width="48" height="24" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="24" y="48" fill="#f8fafc" fontSize="11" textAnchor="middle">7</text>
            <rect x="60" y="32" width="48" height="24" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="84" y="48" fill="#f8fafc" fontSize="11" textAnchor="middle">8</text>
            <rect x="120" y="32" width="48" height="24" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="144" y="48" fill="#f8fafc" fontSize="11" textAnchor="middle">9</text>
            <rect x="180" y="32" width="48" height="24" rx="6" fill="#0284c7" />
            <text x="204" y="48" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">×</text>

            <rect x="0" y="64" width="108" height="24" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="54" y="80" fill="#f8fafc" fontSize="11" textAnchor="middle">0</text>
            <rect x="120" y="64" width="48" height="24" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="144" y="80" fill="#f8fafc" fontSize="11" textAnchor="middle">.</text>
            <rect x="180" y="64" width="48" height="24" rx="6" fill="#38bdf8" />
            <text x="204" y="80" fill="#0f172a" fontSize="13" fontWeight="bold" textAnchor="middle">=</text>
          </g>
        </svg>
      )}

      {type === 'pomodoro' && (
        <svg viewBox="0 0 400 250" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#0f172a" />
          
          {/* Subtle glow */}
          <circle cx="200" cy="125" r="90" fill="#6366f1" fillOpacity="0.15" filter="blur(25px)" />
          
          {/* Card outline */}
          <rect x="60" y="25" width="280" height="200" rx="14" fill="#1e1b4b" fillOpacity="0.7" stroke="#3730a3" strokeWidth="1.5" />
          
          {/* Header */}
          <text x="85" y="52" fill="#c7d2fe" fontSize="12" fontWeight="bold">StudyPomodoro · Focus Session</text>
          <rect x="255" y="40" width="65" height="18" rx="9" fill="#4338ca" />
          <text x="287" y="52" fill="#e0e7ff" fontSize="9" textAnchor="middle">Deep Work</text>

          {/* SVG Progress Gauge */}
          <circle cx="150" cy="130" r="50" stroke="#312e81" strokeWidth="8" />
          <circle cx="150" cy="130" r="50" stroke="#818cf8" strokeWidth="8" strokeDasharray="314" strokeDashoffset="78" strokeLinecap="round" />
          <text x="150" y="132" fill="#ffffff" fontSize="22" fontWeight="bold" fontFamily="monospace" textAnchor="middle">24:50</text>
          <text x="150" y="148" fill="#a5b4fc" fontSize="9" textAnchor="middle">FOCUS</text>

          {/* Side Info */}
          <g transform="translate(225, 95)">
            <text x="0" y="0" fill="#c7d2fe" fontSize="10" fontWeight="bold">Active Objective:</text>
            <rect x="0" y="8" width="95" height="22" rx="4" fill="#312e81" />
            <text x="8" y="22" fill="#e0e7ff" fontSize="9">Problem Set #3</text>
            
            <text x="0" y="48" fill="#a5b4fc" fontSize="9">Today's Streak:</text>
            <text x="0" y="64" fill="#818cf8" fontSize="15" fontWeight="bold">4 <tspan fontSize="10" fill="#c7d2fe">Intervals</tspan></text>
          </g>

          {/* Bottom presets */}
          <rect x="85" y="195" width="65" height="18" rx="9" fill="#4338ca" />
          <text x="117" y="207" fill="#ffffff" fontSize="9" textAnchor="middle">Standard 25/5</text>
          <rect x="160" y="195" width="80" height="18" rx="9" fill="#312e81" />
          <text x="200" y="207" fill="#a5b4fc" fontSize="9" textAnchor="middle">Deep Work 50/10</text>
          <rect x="250" y="195" width="70" height="18" rx="9" fill="#312e81" />
          <text x="285" y="207" fill="#a5b4fc" fontSize="9" textAnchor="middle">Harmonic Chime</text>
        </svg>
      )}

      {/* Illustrative fallback label per design.md rule 9 */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          backgroundColor: 'rgba(16, 54, 61, 0.75)',
          color: '#ddf7f7',
          padding: '2px 8px',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
          backdropFilter: 'blur(4px)',
        }}
      >
        Verified Visual Preview
      </div>
    </div>
  );
};
