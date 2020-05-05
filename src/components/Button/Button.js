import React from 'react';
import style from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>
    );
};

export default Button;