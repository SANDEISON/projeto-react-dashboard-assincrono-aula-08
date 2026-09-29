import { useEffect, useState } from 'react'
import { fetchCourses } from '../services/courseService.js'

export function useCourses(query) {
  const [courses, setCourses] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadCourses() {
      setStatus('loading')
      setError('')

      try {
        const result = await fetchCourses(query, { signal: controller.signal })
        setCourses(result)
        setStatus('success')
      } catch (caughtError) {
        if (caughtError.name === 'AbortError') return
        setError('Não foi possível carregar os cursos.')
        setStatus('error')
      }
    }

    loadCourses()
    return () => controller.abort()
  }, [query])

  return { courses, status, error }
}

