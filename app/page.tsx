const appDocument = `<!doctype html><html><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" /><link rel="stylesheet" href="/stream-world/assets/index-Dgv8W721.css" /></head><body><div id="root"></div><script type="module" src="/stream-world/assets/index-DnYvfXUf.js"></script></body></html>`

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#050505' }}>
      <iframe
        title="Stream World"
        srcDoc={appDocument}
        style={{ border: 0, display: 'block', height: '100vh', width: '100%' }}
      />
    </main>
  )
}
