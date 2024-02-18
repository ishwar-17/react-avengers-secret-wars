import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta = {
  title: "Components/Form/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoryContainer = (props: any) => {
    return (
      <TextArea
        {...props}
      />
    );
};

export const Default: Story = {
    render: StoryContainer,
}