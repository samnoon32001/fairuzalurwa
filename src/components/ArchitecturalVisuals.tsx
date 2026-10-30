import React from 'react';

export const RiyadhSkylineHeroVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#051342] select-none ${className}`}
      aria-hidden="true"
    >
      {/* Twilight Horizon Atmospheric Glow in Brand Royal Blue & Crimson */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 80% at 75% 85%, rgba(227, 6, 19, 0.24) 0%, rgba(13, 44, 148, 0.45) 42%, rgba(8, 30, 104, 0.96) 78%, #040F36 100%)',
        }}
      />

      {/* Subtle Architectural Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 1440 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="brandGrid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.05" />
            <stop offset="60%" stopColor="#E30613" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="horizonGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#081E68" stopOpacity="0" />
            <stop offset="50%" stopColor="#E30613" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Perspective Architectural Lines */}
        <line x1="0" y1="680" x2="1440" y2="680" stroke="url(#horizonGlow)" strokeWidth="2" />
        <line x1="0" y1="720" x2="1440" y2="720" stroke="#60A5FA" strokeOpacity="0.18" strokeWidth="1" />
        <line x1="240" y1="0" x2="240" y2="800" stroke="url(#brandGrid)" strokeWidth="1" />
        <line x1="560" y1="0" x2="560" y2="800" stroke="url(#brandGrid)" strokeWidth="1" />
        <line x1="880" y1="0" x2="880" y2="800" stroke="url(#brandGrid)" strokeWidth="1" />
        <line x1="1200" y1="0" x2="1200" y2="800" stroke="url(#brandGrid)" strokeWidth="1" />
      </svg>

      {/* Detailed Riyadh Skyline Silhouette & Faceted Glass Towers */}
      <svg
        className="absolute bottom-0 inset-x-0 w-full h-[85%] opacity-90"
        viewBox="0 0 1440 680"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyTowerMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F2D8A" />
            <stop offset="100%" stopColor="#040E33" />
          </linearGradient>
          <linearGradient id="skyTowerAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E30613" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#0D2C94" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#051342" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="windowLights" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Distant City Layer */}
        <path
          d="M0 680V540H70V490H130V540H190V450H260V520H330V430H400V510H480V390H540V490H620V440H700V500H770V380H840V470H910V350H970V460H1040V390H1120V480H1190V420H1260V500H1340V460H1440V680H0Z"
          fill="#061752"
          opacity="0.7"
        />

        {/* Dynamic Aviation Swoop Trajectory Line Inspired by Fairuz Al Urwa Logo */}
        <path
          d="M420 580 Q 760 320 1180 95"
          stroke="#E30613"
          strokeWidth="2.5"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* KAFD Faceted Diamond Tower (Left-Center) */}
        <polygon
          points="640,680 640,250 695,175 750,250 750,680"
          fill="url(#skyTowerMain)"
          stroke="#60A5FA"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <polygon
          points="695,175 750,250 695,340 640,250"
          fill="url(#skyTowerAccent)"
          opacity="0.55"
        />
        <polygon
          points="695,340 750,250 750,480 695,540"
          fill="#092170"
          stroke="#60A5FA"
          strokeOpacity="0.2"
        />

        {/* Al Faisaliah Inspired Tapered Spire Tower */}
        <path
          d="M835 680L860 280L885 210L910 280L935 680H835Z"
          fill="url(#skyTowerMain)"
          stroke="#60A5FA"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
        <line x1="885" y1="145" x2="885" y2="210" stroke="#E30613" strokeWidth="2.5" />
        <circle cx="885" cy="245" r="14" fill="#E30613" fillOpacity="0.35" stroke="#93C5FD" strokeWidth="1.2" />

        {/* Kingdom Centre Inspired Iconic Arch Skyscraper */}
        <path
          d="M1010 680V170C1010 140 1025 120 1040 120H1052C1052 175 1076 215 1110 215C1144 215 1168 175 1168 120H1180C1195 120 1210 140 1210 170V680H1010Z"
          fill="url(#skyTowerMain)"
          stroke="#93C5FD"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        {/* Skybridge at Top of Kingdom Tower in Brand Crimson */}
        <rect
          x="1032"
          y="116"
          width="156"
          height="10"
          rx="2"
          fill="#E30613"
          fillOpacity="0.9"
        />
        {/* Illuminated Vertical Curtain Wall Strips on Kingdom Tower */}
        <line x1="1035" y1="130" x2="1035" y2="680" stroke="url(#windowLights)" strokeWidth="2" />
        <line x1="1185" y1="130" x2="1185" y2="680" stroke="url(#windowLights)" strokeWidth="2" />
        <line x1="1110" y1="220" x2="1110" y2="680" stroke="#60A5FA" strokeOpacity="0.22" strokeWidth="1" />

        {/* Modern KAFD Financial Tower (Far Right) */}
        <path
          d="M1255 680V265L1315 215L1365 265V680H1255Z"
          fill="#081E68"
          stroke="#60A5FA"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
        <line x1="1315" y1="215" x2="1315" y2="680" stroke="url(#windowLights)" strokeWidth="1.5" />

        {/* Foreground Architectural Podium & Horizon */}
        <rect x="0" y="655" width="1440" height="25" fill="#030B29" />
        <line x1="500" y1="655" x2="1440" y2="655" stroke="#E30613" strokeOpacity="0.65" strokeWidth="1.5" />
      </svg>

      {/* Measured Contrast Scrim for Unmistakable Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040E33]/95 via-[#081E68]/85 to-[#081E68]/45 rtl:bg-gradient-to-l" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040E33] via-transparent to-[#040E33]/40" />
    </div>
  );
};

export const InvestorKafdVisual: React.FC<{ className?: string; caption?: string; subcaption?: string }> = ({
  className = '',
  caption,
  subcaption,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#051342] border border-blue-400/25 shadow-xl ${className}`}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, #081E68 0%, #041038 55%, #0D2C94 100%)',
        }}
      />

      {/* Architectural SVG Composition */}
      <svg
        className="w-full h-full min-h-[360px] object-cover"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="kafdFacetA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#153BB8" />
            <stop offset="100%" stopColor="#06164E" />
          </linearGradient>
          <linearGradient id="kafdFacetB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E30613" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#081E68" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="kafdLightBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E30613" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Subtle Geometric Star Pattern in Sky */}
        <g opacity="0.15" stroke="#93C5FD" strokeWidth="1">
          <circle cx="620" cy="140" r="90" />
          <circle cx="620" cy="140" r="65" />
          <rect x="555" y="75" width="130" height="130" transform="rotate(45 620 140)" />
          <rect x="555" y="75" width="130" height="130" />
        </g>

        {/* Left Corporate Tower */}
        <polygon
          points="90,600 90,190 190,120 260,190 260,600"
          fill="url(#kafdFacetA)"
          stroke="#93C5FD"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <polygon points="190,120 260,190 190,600" fill="url(#kafdFacetB)" opacity="0.7" />
        <line x1="190" y1="120" x2="190" y2="600" stroke="url(#kafdLightBeam)" strokeWidth="2" />

        {/* Center Flagship Investor Tower */}
        <polygon
          points="290,600 310,95 420,45 510,115 530,600"
          fill="url(#kafdFacetA)"
          stroke="#93C5FD"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <polygon points="420,45 510,115 420,600" fill="url(#kafdFacetB)" />
        {/* Diagonal Structural Diagrid on Flagship Tower */}
        <g stroke="#93C5FD" strokeOpacity="0.25" strokeWidth="1">
          <line x1="310" y1="160" x2="512" y2="260" />
          <line x1="306" y1="240" x2="516" y2="340" />
          <line x1="302" y1="320" x2="520" y2="420" />
          <line x1="298" y1="400" x2="524" y2="500" />
          <line x1="510" y1="160" x2="306" y2="260" />
          <line x1="514" y1="240" x2="302" y2="340" />
          <line x1="518" y1="320" x2="298" y2="420" />
          <line x1="522" y1="400" x2="294" y2="500" />
        </g>
        <line x1="420" y1="45" x2="420" y2="600" stroke="url(#kafdLightBeam)" strokeWidth="2.5" />

        {/* Right Financial Tower */}
        <polygon
          points="555,600 555,210 645,155 725,215 725,600"
          fill="url(#kafdFacetA)"
          stroke="#93C5FD"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
        <polygon points="645,155 725,215 645,600" fill="#041038" opacity="0.65" />
        <line x1="645" y1="155" x2="645" y2="600" stroke="url(#kafdLightBeam)" strokeWidth="1.5" />

        {/* Foreground Plaza */}
        <rect x="0" y="545" width="800" height="55" fill="#030B29" />
        <line x1="0" y1="545" x2="800" y2="545" stroke="#E30613" strokeOpacity="0.75" strokeWidth="2" />
      </svg>

      {caption && (
        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#030B29] via-[#030B29]/90 to-transparent">
          <p className="text-xs tracking-wider text-[#FF6B72] font-semibold mb-1">{subcaption}</p>
          <p className="text-base font-semibold text-white">{caption}</p>
        </div>
      )}
    </div>
  );
};

export const ConsultancyInteriorVisual: React.FC<{
  className?: string;
  title?: string;
  subtitle?: string;
}> = ({ className = '', title, subtitle }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#081E68] border border-slate-200/80 shadow-sm ${className}`}
    >
      <svg
        className="w-full h-full min-h-[320px] object-cover"
        viewBox="0 0 800 560"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="archBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#081E68" />
            <stop offset="60%" stopColor="#0D2C94" />
            <stop offset="100%" stopColor="#041038" />
          </linearGradient>
          <linearGradient id="archAccent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E30613" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect width="800" height="560" fill="url(#archBg)" />

        {/* Contemporary Saudi Najdi & Modernist Archways */}
        <path
          d="M110 560V210C110 135 165 85 235 85C305 85 360 135 360 210V560H110Z"
          fill="#051342"
          stroke="url(#archAccent)"
          strokeWidth="2"
        />
        <path
          d="M440 560V210C440 135 495 85 565 85C635 85 690 135 690 210V560H440Z"
          fill="#051342"
          stroke="url(#archAccent)"
          strokeWidth="2"
        />

        {/* Inner Arch Window Skylines */}
        <path
          d="M140 520V220C140 160 182 118 235 118C288 118 330 160 330 220V520H140Z"
          fill="#0B257D"
          stroke="#93C5FD"
          strokeOpacity="0.25"
        />
        <path
          d="M470 520V220C470 160 512 118 565 118C618 118 660 160 660 220V520H470Z"
          fill="#0B257D"
          stroke="#93C5FD"
          strokeOpacity="0.25"
        />

        {/* Architectural Sunlight Rays */}
        <polygon points="235,118 330,520 140,520" fill="#60A5FA" fillOpacity="0.08" />
        <polygon points="565,118 660,520 470,520" fill="#E30613" fillOpacity="0.08" />

        {/* Minimalist Executive Desk Horizon */}
        <rect x="60" y="470" width="680" height="14" rx="2" fill="#E30613" fillOpacity="0.7" />
        <rect x="0" y="484" width="800" height="76" fill="#040E33" />
      </svg>

      {(title || subtitle) && (
        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#040E33] via-[#040E33]/85 to-transparent">
          {subtitle && <p className="text-xs text-[#FF6B72] font-semibold mb-1">{subtitle}</p>}
          {title && <p className="text-lg font-semibold text-white">{title}</p>}
        </div>
      )}
    </div>
  );
};
