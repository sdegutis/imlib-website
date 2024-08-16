const pages = {
  'About': '/index.html',
  'Getting Started': '/getting-started.html',
} as const;

export function Page(attrs: { which: keyof typeof pages }, children: any) {
  return <>
    {`<!doctype html>`}
    <html>
      <head />
      <body>
        <nav>
          <ul>
            {Object.entries(pages).map(([title, href]) => <li>
              <a href={href} class={title === attrs.which ? 'current' : ''}>{title}</a>
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
