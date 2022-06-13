import { TEAMS } from "../../app/shared/TEAMS";

export const selectAllTeams = () => {
    return TEAMS;
};

export const selectRandomTeam = () => {
    return TEAMS[Math.floor(TEAMS.length * Math.random())];
};