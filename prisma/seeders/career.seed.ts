import { CareerCreateInput, Photon } from '@prisma/photon';
import * as CAREERS from './constants/career';
import * as SKILLS from './constants/skills';

const careers: CareerCreateInput[] = [
  {
    id: CAREERS.ACE,
    name: 'Ace',
    skills: {
      connect: [
        { id: SKILLS.ASTROGATION },
        { id: SKILLS.COOL },
        { id: SKILLS.GUNNERY },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.PERCEPTION },
        { id: SKILLS.PILOTING_PLANETARY },
        { id: SKILLS.PILOTING_SPACE },
        { id: SKILLS.RANGED_LIGHT },
      ],
    },
  },
  {
    id: CAREERS.COMMANDER,
    name: 'Commander',
    skills: {
      connect: [
        { id: SKILLS.COERCION },
        { id: SKILLS.COOL },
        { id: SKILLS.DISCIPLINE },
        { id: SKILLS.WARFARE },
        { id: SKILLS.LEADERSHIP },
        { id: SKILLS.PERCEPTION },
        { id: SKILLS.RANGED_LIGHT },
        { id: SKILLS.VIGILANCE },
      ],
    },
  },
  {
    id: CAREERS.DIPLOMAT,
    name: 'Diplomat',
    skills: {
      connect: [
        { id: SKILLS.CHARM },
        { id: SKILLS.DECEPTION },
        { id: SKILLS.CORE_WORLDS },
        { id: SKILLS.LORE },
        { id: SKILLS.OUTER_RIM },
        { id: SKILLS.XENOLOGY },
        { id: SKILLS.LEADERSHIP },
        { id: SKILLS.NEGOTIATION },
      ],
    },
  },
  {
    id: CAREERS.ENGINEER,
    name: 'Engineer',
    skills: {
      connect: [
        { id: SKILLS.ATHLETICS },
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.EDUCATION },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.PERCEPTION },
        { id: SKILLS.PILOTING_SPACE },
        { id: SKILLS.RANGED_LIGHT },
        { id: SKILLS.VIGILANCE },
      ],
    },
  },
  {
    id: CAREERS.SOLDIER,
    name: 'Soldier',
    skills: {
      connect: [
        { id: SKILLS.ATHLETICS },
        { id: SKILLS.BRAWL },
        { id: SKILLS.WARFARE },
        { id: SKILLS.MEDICINE },
        { id: SKILLS.MELEE },
        { id: SKILLS.RANGED_LIGHT },
        { id: SKILLS.RANGED_HEAVY },
        { id: SKILLS.SURVIVAL },
      ],
    },
  },
  {
    id: CAREERS.SPY,
    name: 'Spy',
    skills: {
      connect: [
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.COOL },
        { id: SKILLS.COORDINATION },
        { id: SKILLS.DECEPTION },
        { id: SKILLS.WARFARE },
        { id: SKILLS.PERCEPTION },
        { id: SKILLS.SKULLDUGGERY },
        { id: SKILLS.STEALTH },
      ],
    },
  },
];

export default async function(photon: Photon): Promise<void> {
  for (const career of careers) {
    await photon.careers.upsert({
      where: { id: career.id },
      update: career,
      create: career,
    });
    console.log(`${career.name} added to database`); // eslint-disable-line
  }
}
