import Card from "react-bootstrap/Card";

export const PostItem = ({ id, title, desc, author, image, timestamp }) => {
  return (
    <>
      <Card key={id}>
        <Card.Img variant="top" src={image} />
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text>{timestamp}</Card.Text>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </>
  );
};
