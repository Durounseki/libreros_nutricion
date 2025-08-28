import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/precios')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/precios"!</div>
}
