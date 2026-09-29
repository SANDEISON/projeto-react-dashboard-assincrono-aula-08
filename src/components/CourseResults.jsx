export function CourseResults({ courses, status, error }) {
  if (status === 'loading') {
    return <p className="state-message" role="status">Carregando cursos...</p>
  }

  if (status === 'error') {
    return <p className="state-message error" role="alert">{error}</p>
  }

  if (courses.length === 0) {
    return <p className="state-message">Nenhum curso encontrado para esta busca.</p>
  }

  return (
    <ul className="course-list">
      {courses.map((course) => (
        <li key={course.id}>
          <p>{course.topic}</p>
          <h2>{course.title}</h2>
          <span>{course.lessons} aulas</span>
        </li>
      ))}
    </ul>
  )
}

