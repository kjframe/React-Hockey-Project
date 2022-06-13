import { Col, Row } from 'reactstrap';
import TeamCard from './TeamCard';
import { selectAllteams } from './teamsSlice';

const TeamsList = () => {
    const teams = selectAllteams();

    return (
        <Row className='ms-auto'>
            {teams.map((team) => {
                return (
                    <Col md='5' className='m-4' key={team.id}>
                        <TeamCard team={team} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default TeamsList;