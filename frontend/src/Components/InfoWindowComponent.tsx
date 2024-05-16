import { InfoWindow } from "@vis.gl/react-google-maps";
import { Shelter, Need } from "./MapPoa";
import Card from "react-bootstrap/esm/Card";
import { ListGroup } from "react-bootstrap";
interface InfoProps {
  shelters: Shelter[];
  needs: Need[];
  selectedShelterId: string | null;
  onClose: () => void;
}

export function InfoWindowComponent({
  shelters,
  selectedShelterId,
  onClose,
  needs,
}: InfoProps) {
  return (
    // Exibe a InfoWindow apenas se estiver selecionado um ShelterId e se ele for igual ao ID do abrigo percorrido,
    <>
      {selectedShelterId &&
        shelters.map((shelter) =>
          shelter.id === selectedShelterId ? (
            <InfoWindow
              key={shelter.id}
              position={{
                lat: parseFloat(shelter.latitude),
                lng: parseFloat(shelter.longitude),
              }}
              onCloseClick={onClose}
            >
              <Card style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>{shelter.name}</Card.Title>
                  <Card.Text
                    className={
                      shelter.isAvailable ? "text-success" : "text-danger"
                    }
                  >
                    {shelter.isAvailable ? "Disponível" : "Lotado"}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    {!shelter.petFriendly && "Não "}Aceita Animais
                  </ListGroup.Item>
                  <ListGroup.Item>Telefone: {shelter.phone}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Text>
                    <h3 className="fs-6">Necessidades:</h3>
                    <div>
                      <ul style={{ marginLeft: 3, paddingLeft: 0 }}>
                        {needs.map((need) => {
                          return selectedShelterId === need.shelterId ? (
                            <li key={need.id}>{need.name}</li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </InfoWindow>
          ) : null
        )}
    </>
  );
}
