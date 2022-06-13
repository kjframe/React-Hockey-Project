import { TEAMS } from "../../app/shared/TEAMS";

export const selectAllteams = () => {
    return TEAMS;
};

export const selectRandomTeam = () => {
    return TEAMS[Math.floor(TEAMS.length * Math.random())];
};