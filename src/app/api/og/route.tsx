import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'Ann Chisom Sokwue'
  const subtitle = searchParams.get('subtitle') || 'AI Automation Engineer'
  const description =
    searchParams.get('description') ||
    'I build systems that run while you sleep.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              color: '#5eead4',
              fontSize: '18px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            {subtitle}
          </span>

          <span
            style={{
              backgroundColor: '#134e4a',
              color: '#5eead4',
              fontSize: '14px',
              padding: '6px 14px',
              borderRadius: '999px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ display: 'flex', fontSize: '10px' }}>o</span>
            <span style={{ display: 'flex' }}>Available for work</span>
          </span>
        </div>

        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            lineHeight: 1.05,
            color: '#ffffff',
            marginBottom: '32px',
            maxWidth: '900px',
            display: 'flex',
          }}
        >
          {description}
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#6b7280',
            marginTop: 'auto',
            display: 'flex',
          }}
        >
          {title} · annchisom.com
        </div>

        <div
          style={{
            position: 'absolute',
            right: '0',
            top: '80px',
            bottom: '80px',
            width: '4px',
            backgroundColor: '#5eead4',
            borderRadius: '2px',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}