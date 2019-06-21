import React from 'react';
import PropTypes from 'prop-types';

const SIZE = 70;

const Square = ({
  style,
  width,
  text,
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
          <rect
            x="0"
            y="0"
            height={SIZE}
            width={SIZE}
            fill={style.outline}
          />
        )
      }
      <rect
        x={(style.outlineWidth + (style.strokeWidth / 2))}
        y={(style.outlineWidth + (style.strokeWidth / 2))}
        height={SIZE - ((style.outlineWidth + (style.strokeWidth / 2)) * 2)}
        width={SIZE - ((style.outlineWidth + (style.strokeWidth / 2)) * 2)}
        style={style}
      />
      <text
        x="35"
        y="35"
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

Square.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Square.defaultProps = {
  style: {},
  width: SIZE,
  text: '',
  textColor: '#fff',
  textSize: 16,
};

export default Square;
