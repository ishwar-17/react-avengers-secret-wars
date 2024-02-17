import { Switch as SwitchMUI, FormControlLabel } from '@mui/material';
import { ChangeEvent, ReactNode, ComponentProps } from 'react';

type SwitchMuiProps = Partial<Omit<ComponentProps<typeof SwitchMUI>, "color" | "size">>;

type SwitchInputProps = {
    'aria-label'?: string;
}

export type SwitchProps = SwitchMuiProps & {
    className?: string;
    id: string;
    name: string;
    checked: boolean;
    disableRipple: boolean;
    color: 'primary' | 'secondary' | 'success';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    label?: ReactNode;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    inputProps?: SwitchInputProps;
    "data-testid"?: string;
}

const SwitchComponent = ({
    className,
    id,
    name,
    checked = false,
    disableRipple = true,
    color = 'primary',
    onChange,
    required = false,
    disabled = false,
    label = '',
    inputProps,
    "data-testid": dataTestId
}: SwitchProps) => {
    const commonSwitchProps = {
        className,
        id,
        name,
        checked,
        disableRipple,
        color,
        onChange,
        inputProps,
        "data-testid": dataTestId
    };

    if (label) {
        return (
            <FormControlLabel
                control={<SwitchMUI {...commonSwitchProps} />}
                required={required}
                disabled={disabled}
                data-testid={`form-control-${dataTestId}`}
                label={label}
            />
        );
    }

    return (
        <SwitchMUI
            {...commonSwitchProps}
            required={required}
            disabled={disabled}
        />
    );
};

export default SwitchComponent;
