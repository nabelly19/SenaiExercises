import Alert from 'react-bootstrap/Alert';

function Alerts() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Não tem, não existe, não há</Alert.Heading>
      <p>
        Fica tranquileba
      </p>
      <hr />
      <p className="mb-0">
        Fica tranquileba aqui !
      </p>
    </Alert>
  );
}

export default Alerts;