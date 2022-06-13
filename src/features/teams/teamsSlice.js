import { TEAMS } from "../../app/shared/TEAMS";

export const selectAllTeams = () => {
    return TEAMS;
};

export const selectTeamById = (id) => {
    return TEAMS.find((team) => team.id === id);
};

//export const selectRandomTeam = () => {
//    return TEAMS[Math.floor(TEAMS.length * Math.random())];
//};