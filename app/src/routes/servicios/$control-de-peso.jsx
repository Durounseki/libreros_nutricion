import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/servicios/$control-de-peso')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/servicios/$control-de-peso"!</div>
}
