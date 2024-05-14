import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export function BreadcrumbNav() {
  return (
    <Container>
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item style={{ cursor: "pointer" }} active href="#">
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item active>Abrigos</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}
