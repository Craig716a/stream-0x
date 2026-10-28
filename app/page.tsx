export default function Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#050505' }}>
      <iframe
        title="Stream World"
        src="/stream-world"
        style={{ border: 0, display: 'block', height: '100vh', width: '100%' }}
      />
    </main>
  )
}
