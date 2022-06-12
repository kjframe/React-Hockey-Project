import admirals from '../assets/img/Admirals.jpg';
//Photo by Jonny Caspari on Unsplash
import colonels from '../assets/img/Colonels.PNG';
// Photo by LoboStudio Hamburg on Unsplash
import jonesboro from '../assets/img/Jonesboro.png';
// Photo by Jonathan Gallegos on Unsplash
import puck from '../assets/img/Puck-Norris.jpg';
// Photo by Jonathan Gallegos on Unsplash
import south from '../assets/img/South-Stars.PNG';

export const TEAMS = [
    {
        id: 0,
        name: 'Admirals Hockey Club',
        image: admirals,
        featured: true,
        description:
            'Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided.'
    },
    {
        id: 1,
        name: 'Colonels Hockey Club',
        image: colonels,
        featured: false,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'Jonesboro Red Knights',
        image: jonesboro,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Puck Norris Hockey Club',
        image: puck,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    },
    {
        id: 4,
        name: 'South Stars Hockey Club',
        image: south,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];