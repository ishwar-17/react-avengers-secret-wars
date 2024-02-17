import type { Meta, StoryObj } from '@storybook/react';
import PasswordField, { PasswordFieldProps } from '.';

const meta = {
  title: "Components/Form/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryContainer = (props: PasswordFieldProps) => {
  return (
    <PasswordField
      {...props}
    />
  );
};

const storiesArgTypes = {
  argTypes: {
    variant: {
      name: "variant",
      control: {
        type: "radio",
        labels: {
          outlined: "outlined",
          filled: "filled"
        },
      },
      options: ["outlined", "filled"],
    },
    shape: {
      name: "shape",
      control: {
        type: "radio",
        labels: {
          normal: "normal",
          rounded: "rounded",
          pill: "pill"
        },
      },
      options: ["normal", "rounded", "pill"],
    },
  }
};

export const Default: Story = {
  render: StoryContainer,
  args: {
    id: "default",
    label: "Password",
    type: 'password',
    name: "password",
    variant:"outlined",
    placeholder: "Enter the password",
    shape: 'rounded',
  },
  ...storiesArgTypes
}