import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "body", "caption", "label"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    variant: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    variant: "h3",
  },
};

export const Body: Story = {
  args: {
    children: "Body text for paragraphs and general content.",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "Caption text for secondary information",
    variant: "caption",
  },
};

export const Label: Story = {
  args: {
    children: "Label text",
    variant: "label",
  },
};

export const CustomWeight: Story = {
  args: {
    children: "Bold body text",
    variant: "body",
    weight: "bold",
  },
};
