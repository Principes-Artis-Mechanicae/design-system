import type { Meta, StoryObj } from "@storybook/react";
import { RadioItem } from "../components/form/Radio";

const meta = {
    title: "Form/Radio",
    component: RadioItem,
} satisfies Meta<typeof RadioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
    args: {
        children: "온라인 미팅",
        name: "group",
    },
};
