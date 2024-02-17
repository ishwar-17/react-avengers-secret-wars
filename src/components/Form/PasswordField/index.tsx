import { ComponentProps, useState } from 'react';
import { TextField, TextFieldProps } from '..';
import { Visibility, VisibilityOff } from '../../Icons';
import classNames from 'classnames';
import styles from './index.module.css';

type MuiProps = Partial<Omit<ComponentProps<typeof TextField>, "hideErrorIcon" | "hideSuccessIcon">>;

export type PasswordFieldProps = MuiProps & TextFieldProps;

const PasswordField = ({
    disabled,
    ...props
}: PasswordFieldProps) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const passwordIconClass = classNames(!disabled && styles.passwordIcon);

    const togglePasswordVisibility = () => {
        if (!disabled) {
            setVisiblePassword((prevVisible) => !prevVisible);
        }
    };
    
    const adornments = {
        end: (
            <>
                {visiblePassword ? (
                    <VisibilityOff
                        onClick={togglePasswordVisibility}
                        className={passwordIconClass}
                    />
                ) : (
                    <Visibility
                        onClick={togglePasswordVisibility}
                        className={passwordIconClass}
                    />
                )}
            </>
        )
    };

    return (
        <TextField
            {...props}
            disabled={disabled}
            type={visiblePassword ? 'text' : 'password'}
            endAdornment={adornments.end}
        />
    );
};

export default PasswordField;
