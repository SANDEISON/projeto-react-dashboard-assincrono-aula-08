# Catálogo assíncrono de cursos - Aula 08

Projeto didático sobre ciclo de renderização, `useEffect`, operações assíncronas e revisão para a 1ª avaliação.

## Executar

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra a URL mostrada pelo Vite, normalmente `http://localhost:5173`.

```bash
npm run build
npm run preview
```

## Mapa dos tópicos

| Tópico | Arquivo | Evidência |
| --- | --- | --- |
| Gatilho de renderização | `App.jsx` | `setQuery` agenda uma nova renderização. |
| Render e commit | `RenderInspector.jsx` | O contador de renders muda durante render; o título muda depois do commit. |
| Efeito | `useCourses.js` | `useEffect` sincroniza o componente com o serviço assíncrono. |
| Dependência | `useCourses.js` | O efeito executa quando `query` muda. |
| Limpeza | `useCourses.js` | O retorno aborta a operação anterior. |
| `async`/`await` | `useCourses.js` | A função interna aguarda `fetchCourses`. |
| Estados da requisição | `useCourses.js` | `loading`, `success` e `error` orientam a interface. |
| Estado vazio | `CourseResults.jsx` | Lista vazia recebe uma mensagem específica. |
| Formulário controlado | `SearchForm.jsx` | Estado local controla o rascunho da busca. |
| Serviço isolado | `courseService.js` | Simulação assíncrona separada da interface. |

## Experimentos guiados

1. Abra o console e observe os renders em modo de desenvolvimento.
2. Pesquise por `React`; acompanhe loading, sucesso e a lista filtrada.
3. Faça duas buscas rapidamente; a limpeza cancela a operação anterior.
4. Remova `[query]` das dependências e explique por que a lista fica desatualizada.
5. Remova o retorno do efeito e discuta a condição de corrida.
6. Mova o filtro para o render e avalie se ainda existe sincronização externa.
7. Troque o serviço simulado por `fetch()` quando a turma iniciar a Aula 10.

## Revisão para a 1ª avaliação

- JSX e componentes: identifique a árvore iniciada em `main.jsx`.
- Props: siga `status`, `error` e `courses` até `CourseResults`.
- Eventos e formulários: siga o envio de `SearchForm` até `setQuery`.
- Estado: diferencie `draft`, `query`, `courses` e `status`.
- Imutabilidade: nenhum estado recebe mutação direta.
- Listas e keys: cada curso usa `course.id`.
- Renderização condicional: loading, erro, vazio e sucesso usam saídas diferentes.
- `useEffect`: identifique setup, dependências e cleanup.

## Publicar no GitHub

```bash
git init -b main
git add .
git commit -m "feat: adiciona projeto da aula 08"
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Referências

- https://react.dev/learn/render-and-commit
- https://react.dev/learn/synchronizing-with-effects
- https://react.dev/learn/you-might-not-need-an-effect
- https://react.dev/reference/react/useEffect
- https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/docs/Web/API/AbortController

