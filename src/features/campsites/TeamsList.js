import { TEAMS } from '../../app/shared/TEAMS';
import { Col, Row } from 'reactstrap';
import TeamCard from './TeamCard';

const TeamsList = () => {
    return (
        <Row className='ms-auto'>
            {TEAMS.map((team) => {
                return (
                    <Col md='5' className='m-4' key={team.id}>
                        <TeamCard team={team} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default TeamsList;