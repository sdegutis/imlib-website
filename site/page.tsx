const pages = {
  'About': { href: '/index.html', icon: 'home' },
  'Getting Started': { href: '/getting-started.html', icon: 'rocket' },
  'Demos': { href: '/demos.html', icon: 'app-window' },
} as const;

export function Page(attrs: { which: keyof typeof pages }, children: any) {
  return <>
    {`<!doctype html>`}
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body>
        <nav>
          <ul>
            {Object.entries(pages).map(([title, { href, icon }]) => <li>
              <a href={href} class={title === attrs.which ? 'current' : ''}>
                <i class={`ti ti-${icon}`} /> {title}
              </a>
            </li>)}
          </ul>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  </>;
}
