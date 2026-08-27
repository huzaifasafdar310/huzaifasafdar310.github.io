import React, { Component } from "react";

export default class CertificationsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="certBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.highlight} stopOpacity="0.4" />
            <stop
              offset="100%"
              stopColor={theme.imageHighlight}
              stopOpacity="0.1"
            />
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.imageHighlight} />
            <stop
              offset="100%"
              stopColor={theme.jacketColor || theme.imageHighlight}
            />
          </linearGradient>
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="15"
              floodOpacity="0.15"
            />
          </filter>
        </defs>

        {/* Certificate Card Base */}
        <rect
          x="120"
          y="60"
          width="460"
          height="320"
          rx="16"
          fill={theme.body}
          stroke={theme.highlight}
          strokeWidth="4"
          filter="url(#cardShadow)"
        />

        {/* Certificate Decorative Border */}
        <rect
          x="140"
          y="80"
          width="420"
          height="280"
          rx="8"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="8 4"
        />

        {/* Certificate Header Banner */}
        <path
          d="M 230 80 L 470 80 L 450 120 L 250 120 Z"
          fill="url(#ribbonGrad)"
        />
        <text
          x="350"
          y="106"
          fontFamily="'Inter', 'Segoe UI', sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="3"
          textAnchor="middle"
          fill="#ffffff"
        >
          VERIFIED CREDENTIAL
        </text>

        {/* Certificate Golden Seal / Badge */}
        <circle cx="350" cy="200" r="38" fill="#FFD700" opacity="0.9" />
        <circle cx="350" cy="200" r="32" fill="#FFA500" />
        <polygon
          points="350,175 358,192 377,192 362,203 368,220 350,209 332,220 338,203 323,192 342,192"
          fill="#ffffff"
        />

        {/* Ribbons under seal */}
        <polygon
          points="340,230 330,280 345,270 355,280 348,230"
          fill="url(#ribbonGrad)"
        />
        <polygon
          points="352,230 360,280 350,270 340,280 345,230"
          fill={theme.imageHighlight}
          opacity="0.8"
        />

        {/* Text Lines */}
        <rect
          x="180"
          y="295"
          width="340"
          height="8"
          rx="4"
          fill={theme.highlight}
        />
        <rect
          x="220"
          y="315"
          width="260"
          height="6"
          rx="3"
          fill={theme.highlight}
          opacity="0.7"
        />

        {/* Floating Icons & Stars */}
        <circle cx="90" cy="140" r="28" fill={theme.highlight} opacity="0.5" />
        <polygon
          points="90,125 94,136 106,136 96,143 100,154 90,147 80,154 84,143 74,136 86,136"
          fill={theme.imageHighlight}
        />

        <circle cx="610" cy="240" r="32" fill={theme.highlight} opacity="0.5" />
        <polygon
          points="610,222 615,235 628,235 617,243 621,256 610,248 599,256 603,243 592,235 605,235"
          fill={theme.imageHighlight}
        />

        {/* Checkmark Badge */}
        <circle cx="560" cy="110" r="22" fill="#10B981" />
        <path
          d="M 550 110 L 557 117 L 572 102"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Tech Nodes Floating */}
        <circle cx="130" cy="380" r="8" fill={theme.imageHighlight} />
        <line
          x1="130"
          y1="380"
          x2="190"
          y2="430"
          stroke={theme.highlight}
          strokeWidth="2"
        />
        <circle cx="190" cy="430" r="14" fill={theme.highlight} />

        <circle cx="570" cy="400" r="10" fill={theme.imageHighlight} />
        <line
          x1="570"
          y1="400"
          x2="510"
          y2="440"
          stroke={theme.highlight}
          strokeWidth="2"
        />
        <circle cx="510" cy="440" r="16" fill={theme.highlight} />
      </svg>
    );
  }
}
