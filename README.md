# Uwazi knowledge hub

Documentation portal implementing the Diátaxis framework
for the Uwazi knowledge hub.

## Prerequisites

- Node.js >= 20.0
- npm or yarn
- [Vale](https://vale.sh/) >= 3.14
- [rumdl](https://rumdl.dev) >= 0.1.95

## Installation

```bash
npm install
```

## Development

```bash
npm run start
```

This starts the development server at `http://localhost:3000`.

## Building

```bash
npm run build
```

This generates static content into the `build` directory.

## Scripts

- `npm run start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run lint:md` - Lint Markdown with rumdl
- `npm run lint:md:fix` - Fix Markdown with rumdl
- `npm run vale:test` - Run Vale prose lint tests

## Contributing

See the [contribution guides](docs/contribution-guides/index.mdx)
for documentation standards and contributor guidelines.

## Tech stack

- [Docusaurus](https://docusaurus.io/) - Documentation framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vale](https://vale.sh/) - Prose linting
- [rumdl](https://github.com/MarkdownTools/rumdl) - Markdown linting
