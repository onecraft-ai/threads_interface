# ThreadsHelper

ThreadsHelper is a powerful browser extension that enhances your Threads experience with advanced features and improved workflow.

## Features

- **Enhanced Interface**: Improved user interface with additional functionality
- **Productivity Tools**: Advanced tools to boost your productivity on Threads
- **Analytics Dashboard**: Detailed analytics and insights for your Threads activity  
- **Smart Automation**: Automate routine tasks and streamline your workflow
- **Multi-language Support**: Available in English and Russian

## Getting Started

### Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page (general extension info)
│   ├── promo/          # Promo page (AI features details)
│   └── layout.tsx      # Root layout
├── components/
│   ├── providers/      # Context providers
│   └── ui/            # UI components
└── lib/
    └── i18n.ts        # Internationalization
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **i18n** - Internationalization support

## Browser Support

- Chrome
- Firefox  
- Edge

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

- Website: [threadshelper.com](https://threadshelper.com)
- Email: support@threadshelper.com
