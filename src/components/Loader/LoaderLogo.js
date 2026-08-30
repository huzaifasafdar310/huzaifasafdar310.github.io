import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="loader-container" id={this.props.id || "logo"}>
        <svg
          className="raw_logo"
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme.imageHighlight || "#001C55"} />
              <stop offset="50%" stopColor={theme.text || "#0A192F"} />
              <stop
                offset="100%"
                stopColor={theme.imageHighlight || "#55198b"}
              />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Animated Tech Hexagon */}
          <polygon
            className="loader-hexagon outer"
            points="250,20 375,85 375,215 250,280 125,215 125,85"
            stroke={theme.body || "#ffffff"}
            strokeWidth="3.5"
            fill="none"
          />

          {/* Inner Glowing Hexagon */}
          <polygon
            className="loader-hexagon inner"
            points="250,38 357,96 357,204 250,262 143,204 143,96"
            stroke={theme.body || "#ffffff"}
            strokeWidth="2"
            fill="none"
          />

          {/* Monogram HA (Huzaifa Ali) */}
          <g className="loader-monogram">
            {/* Letter H */}
            <path
              className="loader-letter h-left"
              d="M 205 105 L 205 175"
              stroke={theme.body || "#ffffff"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="loader-letter h-right"
              d="M 235 105 L 235 175"
              stroke={theme.body || "#ffffff"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="loader-letter h-cross"
              d="M 205 140 L 235 140"
              stroke={theme.body || "#ffffff"}
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Letter A */}
            <path
              className="loader-letter a-left"
              d="M 265 175 L 280 105"
              stroke={theme.body || "#ffffff"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="loader-letter a-right"
              d="M 280 105 L 295 175"
              stroke={theme.body || "#ffffff"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="loader-letter a-cross"
              d="M 270 152 L 290 152"
              stroke={theme.body || "#ffffff"}
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Glowing Center Core */}
          <circle
            cx="250"
            cy="140"
            r="64"
            stroke={theme.body || "#ffffff"}
            strokeWidth="1.5"
            strokeDasharray="4 8"
            opacity="0.4"
            className="loader-spin"
          />

          {/* Full Name & Title */}
          <text
            x="250"
            y="238"
            textAnchor="middle"
            className="loader-name"
            fill={theme.body || "#ffffff"}
          >
            &lt; HUZAIFA ALI /&gt;
          </text>

          <text
            x="250"
            y="258"
            textAnchor="middle"
            className="loader-subtitle"
            fill={theme.body || "#ffffff"}
            opacity="0.85"
          >
            AI &amp; BACKEND DEVELOPER
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
