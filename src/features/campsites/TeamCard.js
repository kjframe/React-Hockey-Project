import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const TeamCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.team.image}
                alt={props.team.name}
            /> 
            <CardImgOverlay>
                <CardTitle>{props.team.name}</CardTitle>
            </CardImgOverlay> 
        </Card>
    );
};

export default TeamCard;