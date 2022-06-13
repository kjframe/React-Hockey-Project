import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TeamDetail from '../features/teams/TeamDetail';
import TeamsList from '../features/teams/TeamsList';
import { selectTeamById } from '../features/teams/teamsSlice';

const TeamsDirectoryPage = () => {
    const [teamId, setTeamId] = useState(0);
    const selectedTeam = selectTeamById(teamId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7' >
                    <TeamsList setTeamId={setTeamId} />
                </Col>
                <Col sm='7' md='5'>
                    <TeamDetail team={selectedTeam} />
                </Col>
            </Row>
        </Container>
    );
};

export default TeamsDirectoryPage;