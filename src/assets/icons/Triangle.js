import React from 'react';
import PropTypes from 'prop-types';

const SIZE = 70;

const Triangle = ({
  style,
  height,
  width,
  text,
  textColor,
  textSize,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox={`${-style.strokeWidth} ${-style.strokeWidth} ${SIZE + (style.strokeWidth * 2)} ${SIZE + (style.strokeWidth * 2)}`}
  >
    <g>
      {
        style.outlineWidth && style.outline
        && (
          <polygon
            id="triangle-outline"
            fill={style.outline}
            points={`${SIZE / 2},0 ${SIZE},${SIZE} 0,${SIZE}`}
          />
        )
      }
      <polygon
        id="triangle-path"
        style={style}
        points={`${
          SIZE / 2
        },${
          Math.sqrt(5) * ((style.outlineWidth + (style.strokeWidth / 2)) || 0)
        } ${
          SIZE - ((((style.outlineWidth + (style.strokeWidth / 2)) || 0) / 2) * (1 + Math.sqrt(5)))
        },${
          SIZE - ((style.outlineWidth + (style.strokeWidth / 2)) || 0)
        } ${
          ((((style.outlineWidth + (style.strokeWidth / 2)) || 0) / 2) * (1 + Math.sqrt(5)))
        },${
          SIZE - ((style.outlineWidth + (style.strokeWidth / 2)) || 0)
        }`} // source: https://math.stackexchange.com/questions/3165912/get-coordinates-to-draw-a-triangle-inside-another-triangle
      />
      <text
        x={SIZE / 2}
        y={SIZE / 2}
        textAnchor="middle"
        alignmentBaseline="central"
        fontSize={textSize}
        fill={textColor}
      >
        {text}
      </text>
    </g>
  </svg>
);

Triangle.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Triangle.defaultProps = {
  style: {
    strokeWidth: 0,
  },
  height: SIZE,
  width: SIZE,
  text: '',
  textColor: '#fff',
  textSize: 16,
};

export default Triangle;
