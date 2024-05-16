import Row from "react-bootstrap/esm/Row";
import { BreadCrumbNav } from "./Components/BreadCrumbNav";
import { Header } from "./Components/Header";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { Footer } from "./Components/Footer";
import { MapPoa } from "./Components/MapPoa";

export function Abrigos() {
  return (
    <>
      <Header />
      <BreadCrumbNav />
      <main>
        <Container>
          <Row className="mb-5 align-items-center ">
            <Col xs={12} lg={6}>
              <h1 className="mb-5">Bem-vindo ao nosso Mapa de Abrigos!</h1>
              <p>
                Navegue pela cidade e encontre os abrigos que estão oferecendo
                suporte às vítimas das enchentes gaúchas. Nossa ferramenta
                interativa mostra a localização de cada abrigo, permitindo que
                você encontre o mais próximo de você ou da área de necessidade.
              </p>
              <p>
                Ao clicar nos ícones de abrigo, você terá acesso a informações
                importantes sobre cada abrigo, incluindo os materiais essenciais
                que estão sendo solicitados. Isso permite que você faça doações
                direcionadas, garantindo que as necessidades específicas de cada
                abrigo sejam atendidas.
              </p>
              <p>
                Junte-se a nós nesta missão de solidariedade e apoio às
                comunidades afetadas pelas enchentes. Se cada um fizer sua
                parte, podemos fazer uma diferença significativa na vida
                daqueles que precisam de ajuda.
              </p>
            </Col>
            <Col xs={12} style={{ height: "50vh" }} lg={6}>
              <MapPoa />
            </Col>
          </Row>
          <Footer />
        </Container>
      </main>
    </>
  );
}
