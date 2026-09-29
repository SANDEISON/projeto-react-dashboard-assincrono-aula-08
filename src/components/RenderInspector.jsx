import { useEffect, useRef } from 'react'

export function RenderInspector({ query, status }) {
  const renders = useRef(0)
  renders.current += 1

  useEffect(() => {
    document.title = query ? `Cursos: ${query}` : 'Catálogo de cursos'
    return () => {
      document.title = 'Aula 08 - useEffect e async'
    }
  }, [query])

  return (
    <aside className="inspector" aria-label="Painel de observação do ciclo de renderização">
      <strong>Laboratório de renderização</strong>
      <span>Renders desta instância: {renders.current}</span>
      <span>Busca comprometida: {query || 'todas'}</span>
      <span>Estado assíncrono: {status}</span>
    </aside>
  )
}

