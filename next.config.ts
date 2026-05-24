/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        // Auto-inject shared SCSS helpers (no :root, no CSS output) into every module.
        // globals.scss handles the actual :root block and is imported once in layout.tsx.
        additionalData: `@import "@/styles/variables"; @import "@/styles/mixins"; @import "@/styles/_mediaQueries";`,
    },
};

module.exports = nextConfig;
