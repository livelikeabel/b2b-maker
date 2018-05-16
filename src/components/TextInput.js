/**
 * node module import
 */
import React from 'react';
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind';
import { pick } from 'lodash/fp';

/**
 * src module import
 */

/**
 * relative path import
 */
import css from './TextInput.scss';

const cx = classnames.bind(css);

const pickInputProps = pick([
  'type',
  'name',
  'value',
  'placeholder',
  'onChange',
  'disabled',
  'maxLength',
]);

const moduleName = 'TextInput';

const TextInput = props => {
  const inputProps = pickInputProps(props);
  const { buttonComponent, className, inputClassName } = props;

  return (
    <div className={cx(`${moduleName}`, className)} style={props.style}>
      <input
        type="text"
        {...inputProps}
        className={cx(`${moduleName}-input`, inputClassName, {
          [`${moduleName}-input--haveButton`]: !!buttonComponent,
        })}
      />
      {buttonComponent}
    </div>
  );
};

TextInput.propTypes = {};
TextInput.defaultProps = {
  buttonComponent: null,
};

export default TextInput;
