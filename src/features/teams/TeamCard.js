import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const TeamCard = ({ team }) => {
    const { image, name } = team;
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg  width='100%' src={image} alt={name} variant="top" />
            <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </CardText>
            </CardBody>
        </Card>
    );
};

export default TeamCard;