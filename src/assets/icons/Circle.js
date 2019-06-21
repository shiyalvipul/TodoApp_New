import React from 'react';
import PropTypes from 'prop-types';

const SIZE = 70;

const Circle = ({
  style,
  width,
  text,
  // textPosition,
  textColor,
  textSize,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={width}
    width={width}
    viewBox={`${-style.strokeWidth} ${-style.strokeWidth} ${SIZE + (style.strokeWidth * 2)} ${SIZE + (style.strokeWidth * 2)}`}
  >
    <g>
      {
        style.outlineWidth && style.outline
        && (
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={SIZE / 2}
            fill={style.outline || '#333'}
          />
        )
      }
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={(SIZE / 2) - (style.outlineWidth + (style.strokeWidth / 2))}
        style={style}
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

Circle.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Circle.defaultProps = {
  style: {},
  width: SIZE,
  text: '',
  textColor: '#fff',
  textSize: 16,
};

export default Circle;
