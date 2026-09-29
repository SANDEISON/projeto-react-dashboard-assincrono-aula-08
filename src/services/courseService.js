const courses = [
  { id: 1, title: 'Fundamentos de React', topic: 'React', lessons: 8 },
  { id: 2, title: 'TypeScript aplicado', topic: 'TypeScript', lessons: 6 },
  { id: 3, title: 'Formulários acessíveis', topic: 'Acessibilidade', lessons: 5 },
  { id: 4, title: 'Estado e efeitos', topic: 'React', lessons: 7 },
  { id: 5, title: 'Git para projetos front-end', topic: 'Ferramentas', lessons: 4 },
]

export function fetchCourses(query, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const delay = window.setTimeout(() => {
      const normalized = query.trim().toLocaleLowerCase('pt-BR')
      const result = courses.filter((course) =>
        `${course.title} ${course.topic}`.toLocaleLowerCase('pt-BR').includes(normalized),
      )
      resolve(result)
    }, 700)

    signal?.addEventListener('abort', () => {
      window.clearTimeout(delay)
      reject(new DOMException('Operação cancelada', 'AbortError'))
    })
  })
}

