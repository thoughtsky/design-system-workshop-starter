import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Sanity/Tailwind",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TailwindLoads: Story = {
  render: () => <div className="rounded-md bg-black p-4 text-white">Tailwind is loading.</div>,
};
