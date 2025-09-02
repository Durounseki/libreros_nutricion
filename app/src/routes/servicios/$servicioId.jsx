import { createFileRoute } from "@tanstack/react-router";
import ServicioLayout from "../../components/ServicioLayout";
import serviciosData from "../../data/serviciosData";
import styles from "./Servicio.module.css";

export const Route = createFileRoute("/servicios/$servicioId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { servicioId } = Route.useParams();
  const service = serviciosData[servicioId];

  return <ServicioLayout service={service} styles={styles} />;
}
