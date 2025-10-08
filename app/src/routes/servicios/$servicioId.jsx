import { createFileRoute, notFound } from "@tanstack/react-router";
import ServicioLayout from "../../components/ServicioLayout";
import serviciosData from "../../data/serviciosData";
import styles from "./Servicio.module.css";

export const Route = createFileRoute("/servicios/$servicioId")({
  loader: async ({ params }) => {
    const service = serviciosData[params.servicioId];
    if (!service) {
      throw notFound();
    }
    return service;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const service = Route.useLoaderData();

  return <ServicioLayout service={service} styles={styles} />;
}
