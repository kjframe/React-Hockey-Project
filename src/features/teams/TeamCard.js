import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const TeamCard = ({ team }) => {
    const { image, name } = team;
    return (
        <Card>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default TeamCard;