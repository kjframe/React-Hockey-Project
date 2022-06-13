import { Col, Row } from 'reactstrap';
import TeamCard from './TeamCard';
import { selectAllTeams } from './teamsSlice';

const TeamsList = ({ setTeamId }) => {
    const teams = selectAllTeams();

    return (
        <Row className='ms-auto'>
            {teams.map((team) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={team.id}
                        onClick={() => setTeamId(team.id)}
                    >
                        <TeamCard team={team} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default TeamsList;