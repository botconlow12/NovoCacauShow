/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Verifica se o código está sendo executado no navegador
    if (typeof window !== 'undefined') {
      import('disable-devtool')
        .then(({ default: disableDevtool }) => {
          // Configuração para o disable-devtool
          const config = {
            interval: 500,
            disableMenu: true,
            disableSelect: true,
            disableCopy: true,
            disableCut: true,
            disablePaste: false,
            clearLog: true,
            clearIntervalWhenDevOpenTrigger: true,
            detectors: [
              0, // RegToString
              4, // FuncToString
              6, // DebugLib
            ],
            ondevtoolopen: (type: number, next: () => void) => {
              alert('Atenção: Ferramentas de desenvolvedor detectadas!')
              next()
            },
            rewriteHTML: '<html><body><h1></h1></body></html>',
            disableIframeParents: true,
          }

          disableDevtool(config)
        })
        .catch((error) => {
          console.error('Erro ao carregar disable-devtool:', error)
        })

      // Verifica o userAgent e redireciona se necessário
      if (
        !navigator.userAgent.match(
          /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/,
        ) &&
        window.innerWidth > 768
      ) {
        window.location.href = 'https://www.youtube.com/watch?v=HxMZUcsdn3k'
      }

      // Definindo uma variável global
      ;(window as any).hasMobileFirstExtension = true
    }
  }, [])

  return <Component {...pageProps} />
}
