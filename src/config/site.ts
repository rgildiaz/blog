interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Rafi Gil Diaz",
  description: "My personal website! Built with Next.js, Tailwind, and Contentlayer.",
  url: "https://example.com",
  ogImage: "https://example.com/og.jpg",
  links: {
    twitter: "https://twitter.com/ryzen_5_5600x",
    github: "https://github.com/rgildiaz",
  },
}