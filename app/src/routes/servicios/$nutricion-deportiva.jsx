import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/$nutricion-deportiva')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/servicios/$nutricion-deportiva"!</div>
}
