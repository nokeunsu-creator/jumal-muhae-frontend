// SVG → PNG 변환 스크립트 (Bubblewrap / Play Store 제출용)
// 사용: node scripts/generate-icons.js
//
// 사전 설치: npm install --save-dev sharp
//
// 생성물:
//   public/icons/icon-192.png
//   public/icons/icon-512.png
//   public/icons/icon-maskable-512.png

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const OUT = path.join(PUBLIC, 'icons')

const ICON_SVG = path.join(PUBLIC, 'icon.svg')
const FEATURE_SVG = path.join(PUBLIC, 'feature-graphic.svg')

async function main() {
  await fs.mkdir(OUT, { recursive: true })

  const iconSvg = await fs.readFile(ICON_SVG)

  // 일반 아이콘
  for (const size of [48, 72, 96, 144, 192, 512]) {
    await sharp(iconSvg).resize(size, size).png().toFile(path.join(OUT, `icon-${size}.png`))
    console.log(`✅ icon-${size}.png`)
  }

  // Maskable 아이콘 (safe zone 80% - 주변 padding)
  const maskable = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="#7C3AED"/>
    <g transform="translate(256 276) scale(0.7)" style="transform-origin: center;">
      <text text-anchor="middle" dominant-baseline="central" font-size="260">🎫</text>
    </g>
  </svg>`)
  await sharp(maskable).resize(512, 512).png().toFile(path.join(OUT, 'icon-maskable-512.png'))
  console.log('✅ icon-maskable-512.png')

  // Feature graphic
  const featureSvg = await fs.readFile(FEATURE_SVG)
  await sharp(featureSvg).resize(1024, 500).png().toFile(path.join(OUT, 'feature-graphic.png'))
  console.log('✅ feature-graphic.png')

  console.log('\n🎉 모든 이미지 생성 완료')
  console.log(`📂 ${OUT}`)
}

main().catch(err => { console.error(err); process.exit(1) })
