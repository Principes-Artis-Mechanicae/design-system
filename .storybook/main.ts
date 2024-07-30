import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../stories/**/*.story.@(js|jsx|mjs|ts|tsx)",
    ],

    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    docs: {},

    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve?.alias,
            "@": path.resolve(__dirname, "../packages"),
        };
        return config;
    },
};
export default config;
