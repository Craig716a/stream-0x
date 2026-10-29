import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'stream-world', 'index.html')
  const html = await readFile(filePath, 'utf8')
  const routedHtml = html.replace('<body>', '<body><script>history.replaceState(null, "", "/")</script>')
  return new NextResponse(routedHtml, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
