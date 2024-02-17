import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import Switch, { SwitchProps } from '.';

const meta = {
  title: "Components/Form/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        {...props}
        checked={checked || props.checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
};

const storiesArgTypes = {
	argTypes: {
        label: {
            name: "label",
            control: {
                type: "radio",
                labels: {
                    "": "Without",
                    label: "With"
                }
            },
            options: ["", "label"],
            mapping: {
                label: "Eligbble",
            },
        },
    }
};

export const Default: Story = {
    render: StoryContainer,
    args: {
      id: "default",
      name: 'default',
      required: false,
      disabled: false,
      checked: false,
      disableRipple: false,
      color: 'primary',
      inputProps: {
        'aria-label': 'controlled'
      },
      "data-testid": "test-switch",
      onChange: (e: ChangeEvent<HTMLInputElement>) => { alert(e.target.checked)},
    },
    ...storiesArgTypes
};
