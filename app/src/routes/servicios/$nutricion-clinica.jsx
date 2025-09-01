import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/$nutricion-clinica')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/servicios/$nutricion-clinica"!</div>
}
