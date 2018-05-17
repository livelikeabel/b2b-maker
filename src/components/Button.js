/**
 * node module import
 */
import React from 'react';
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind';

/**
 * src module import
 */

/**
 * relative path import
 */
import css from './Button.scss';

const cx = classnames.bind(css);
const moduleName = 'Button';

/**
 * @readonly
 * @enum {string}
 */
/**
 *
 * @param {*} props
 * @param {enum} props.color
 */
const Button = ({
  children,
  className,
  Tag = 'button',
  color = 'normal',
  ...restProps
}) => (
  <Tag
    role="button"
    className={cx(`${moduleName}`, `${moduleName}--${color}`, className)}
    {...restProps}
  >
    {children}
  </Tag>
);

Button.propTypes = {};

export default Button;
