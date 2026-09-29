import { useState } from 'react'

export function SearchForm({ initialQuery, onSearch }) {
  const [draft, setDraft] = useState(initialQuery)

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(draft)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="course-search">Buscar por curso ou tópico</label>
      <div>
        <input
          id="course-search"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ex.: React"
        />
        <button type="submit">Buscar</button>
      </div>
    </form>
  )
}

