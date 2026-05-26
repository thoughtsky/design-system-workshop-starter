import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Design Tokens/Tailwind Theme",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-4 bg-background text-foreground sm:grid-cols-2">
      <div className="rounded-lg border border-border bg-primary p-4 text-primary-foreground">
        <p className="text-sm font-medium">Primary</p>
        <p className="text-lg font-semibold">bg-primary text-primary-foreground</p>
      </div>
      <div className="rounded-lg border border-border bg-secondary p-4 text-secondary-foreground">
        <p className="text-sm font-medium">Secondary</p>
        <p className="text-lg font-semibold">bg-secondary text-secondary-foreground</p>
      </div>
      <div className="rounded-lg border border-border bg-background p-4 text-foreground">
        <p className="text-sm font-medium">Surface</p>
        <p className="text-lg font-semibold">bg-background text-foreground</p>
      </div>
      <div className="rounded-lg border border-border bg-background p-4 text-foreground">
        <p className="text-sm font-medium">Border</p>
        <p className="text-lg font-semibold">border-border</p>
      </div>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex max-w-3xl flex-wrap gap-4 bg-background text-foreground">
      <div className="rounded-sm border border-border bg-secondary px-4 py-2 text-secondary-foreground">
        rounded-sm
      </div>
      <div className="rounded-md border border-border bg-secondary px-4 py-2 text-secondary-foreground">
        rounded-md
      </div>
      <div className="rounded-lg border border-border bg-secondary px-4 py-2 text-secondary-foreground">
        rounded-lg
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="max-w-3xl space-y-4 bg-background font-sans text-foreground">
      <div>
        <p className="text-sm font-medium">Small text</p>
        <p className="text-sm">text-sm font-medium</p>
      </div>
      <div>
        <p className="text-base font-medium">Base text</p>
        <p className="text-base">text-base font-medium</p>
      </div>
      <div>
        <p className="text-lg font-semibold">Large text</p>
        <p className="text-lg">text-lg font-semibold</p>
      </div>
      <div>
        <p className="text-2xl font-semibold">Display text</p>
        <p className="text-base text-secondary-foreground">text-2xl font-semibold</p>
      </div>
    </div>
  ),
};
