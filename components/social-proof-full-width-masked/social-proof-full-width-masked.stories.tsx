import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { SocialProofFullWidthMasked } from "./social-proof-full-width-masked"

const logos = [
    {
        name: "Odeaolabs",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/odeao-labs.svg",
    },
    {
        name: "Kintsugi",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/kintsugi.svg",
    },
    {
        name: "Stackedlab",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/stacked-lab.svg",
    },
    {
        name: "Magnolia",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
    },
    {
        name: "Powersurge",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
    },
    {
        name: "Warpspeed",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
    },
    {
        name: "Leapyear",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/leapyear.svg",
    },
    {
        name: "Easytax",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/easy-tax.svg",
    },
    {
        name: "Sisyphus",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/sisyphus.svg",
    },
    {
        name: "Catalog",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/catalog.svg",
    },
];

const meta = {
	title: "Components/Social Proof Full Width Masked",
	component: SocialProofFullWidthMasked,
	args: {
		content: "Trusted by 4,000+ companies",
		logos: logos,
	},
} satisfies Meta<typeof SocialProofFullWidthMasked>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        backgroundColor: ""
    },

    play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByText("Trusted by 4,000+ companies")).toBeInTheDocument()
		await expect(canvas.getAllByRole("img", { name: "Layers" }).length).toBeGreaterThan(0)
	}
}

export const CustomContent: Story = {
	args: {
		content: "Powering the world's best teams",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByText("Powering the world's best teams")).toBeInTheDocument()
	},
}

export const NoLogos: Story = {
	args: {
		logos: undefined,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByText("Trusted by 4,000+ companies")).toBeInTheDocument()
		await expect(canvas.queryByRole("img")).not.toBeInTheDocument()
	},
}

export const FallbackContent: Story = {
	args: {
		content: undefined,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByText("Trusted by 4,000+ companies")).toBeInTheDocument()
	},
}
