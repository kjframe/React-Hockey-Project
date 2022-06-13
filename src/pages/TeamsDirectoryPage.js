import { Container, Row, Col, Button } from 'reactstrap';
import TeamDetail from '../features/teams/TeamDetail';
import TeamsList from '../features/teams/TeamsList';
import { selectRandomTeam } from '../features/teams/teamsSlice';

const TeamsDirectoryPage = () => {
    let selectedTeam = selectRandomTeam();

    const toggleTeam = () => {
        selectedTeam = selectRandomTeam();
        console.log(selectedTeam);
    }

    return (
        <Container>
            <Button onClick={() => toggleTeam()}>
                Select Random Team
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <TeamsList />
                </Col>
                <Col sm='7' md='5'>
                    <TeamDetail team={selectedTeam} />
                </Col>
            </Row>
        </Container>
    );
};

export default TeamsDirectoryPage;