import { createFileRoute } from "@tanstack/react-router";
import ServicioLayout from "../../components/ServicioLayout";
import serviciosData from "../../data/serviciosData";
import styles from "./Servicio.module.css";

export const Route = createFileRoute("/servicios/$cineantropometria")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ServicioLayout service={serviciosData.cineantropometria} styles={styles} />
  );
}
