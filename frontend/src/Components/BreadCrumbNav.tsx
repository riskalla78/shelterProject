import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export function BreadCrumbNav() {
  return (
    <Container>
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item role="link" style={{ cursor: "pointer" }} active>
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item style={{ cursor: "pointer" }} active>
          Abrigos
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}
