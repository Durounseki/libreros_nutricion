import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/$planes-de-entrenamiento')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/servicios/$planes-de-entrenamiento"!</div>
}
