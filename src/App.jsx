import { useState } from 'react'
import { CourseResults } from './components/CourseResults.jsx'
import { RenderInspector } from './components/RenderInspector.jsx'
import { SearchForm } from './components/SearchForm.jsx'
import { useCourses } from './hooks/useCourses.js'

export default function App() {
  const [query, setQuery] = useState('')
  const { courses, status, error } = useCourses(query)

  return (
    <main className="page-shell">
      <header>
        <p className="eyebrow">Front-End Frameworks · Aula 08</p>
        <h1>Catálogo assíncrono de cursos</h1>
        <p>
          Observe renderização, efeito, dependências, limpeza e estados de uma
          operação assíncrona.
        </p>
      </header>

      <RenderInspector query={query} status={status} />
      <SearchForm initialQuery={query} onSearch={setQuery} />
      <CourseResults courses={courses} status={status} error={error} />
    </main>
  )
}

