import { SpecializationCreateInput, Photon } from '@prisma/photon';
import * as SPECS from './constants/specializations';
import * as CAREERS from './constants/career';
import * as SKILLS from './constants/skills';

export const specializations: SpecializationCreateInput[] = [
  {
    id: SPECS.DRIVER,
    name: 'Driver',
    career: { connect: { id: CAREERS.ACE } },
    skills: {
      connect: [
        { id: SKILLS.COOL },
        { id: SKILLS.GUNNERY },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.PILOTING_PLANETARY },
      ],
    },
  },
  {
    id: SPECS.GUNNER,
    name: 'Gunner',
    career: { connect: { id: CAREERS.ACE } },
    skills: {
      connect: [
        { id: SKILLS.DISCIPLINE },
        { id: SKILLS.GUNNERY },
        { id: SKILLS.RANGED_HEAVY },
        { id: SKILLS.RESILIENCE },
      ],
    },
  },
  {
    id: SPECS.PILOT,
    name: 'Pilot',
    career: { connect: { id: CAREERS.ACE } },
    skills: {
      connect: [
        { id: SKILLS.ASTROGATION },
        { id: SKILLS.GUNNERY },
        { id: SKILLS.PILOTING_PLANETARY },
        { id: SKILLS.PILOTING_SPACE },
      ],
    },
  },
  {
    id: SPECS.COMMODORE,
    name: 'Commodore',
    career: { connect: { id: CAREERS.COMMANDER } },
    skills: {
      connect: [
        { id: SKILLS.ASTROGATION },
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.EDUCATION },
        { id: SKILLS.OUTER_RIM },
      ],
    },
  },
  {
    id: SPECS.SQUADRON_LEADER,
    name: 'Squadron Leader',
    career: { connect: { id: CAREERS.COMMANDER } },
    skills: {
      connect: [
        { id: SKILLS.GUNNERY },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.PILOTING_PLANETARY },
        { id: SKILLS.PILOTING_SPACE },
      ],
    },
  },
  {
    id: SPECS.TACTICIAN,
    name: 'Tactician',
    career: { connect: { id: CAREERS.COMMANDER } },
    skills: {
      connect: [
        { id: SKILLS.BRAWL },
        { id: SKILLS.DISCIPLINE },
        { id: SKILLS.LEADERSHIP },
        { id: SKILLS.RANGED_HEAVY },
      ],
    },
  },
  {
    id: SPECS.AMBASSADOR,
    name: 'Ambassador',
    career: { connect: { id: CAREERS.DIPLOMAT } },
    skills: {
      connect: [
        { id: SKILLS.CHARM },
        { id: SKILLS.DISCIPLINE },
        { id: SKILLS.CORE_WORLDS },
        { id: SKILLS.NEGOTIATION },
      ],
    },
  },
  {
    id: SPECS.AGITATOR,
    name: 'Agitator',
    career: { connect: { id: CAREERS.DIPLOMAT } },
    skills: {
      connect: [
        { id: SKILLS.COERCION },
        { id: SKILLS.DECEPTION },
        { id: SKILLS.UNDERWORLD },
        { id: SKILLS.STREETWISE },
      ],
    },
  },
  {
    id: SPECS.QUARTERMASTER,
    name: 'Quartermaster',
    career: { connect: { id: CAREERS.DIPLOMAT } },
    skills: {
      connect: [
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.NEGOTIATION },
        { id: SKILLS.SKULLDUGGERY },
        { id: SKILLS.VIGILANCE },
      ],
    },
  },
  {
    id: SPECS.MECHANIC,
    name: 'Mechanic',
    career: { connect: { id: CAREERS.ENGINEER } },
    skills: {
      connect: [
        { id: SKILLS.BRAWL },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.PILOTING_SPACE },
        { id: SKILLS.SKULLDUGGERY },
      ],
    },
  },
  {
    id: SPECS.SABOTEUR,
    name: 'Saboteur',
    career: { connect: { id: CAREERS.ENGINEER } },
    skills: {
      connect: [
        { id: SKILLS.COORDINATION },
        { id: SKILLS.MECHANICS },
        { id: SKILLS.SKULLDUGGERY },
        { id: SKILLS.STEALTH },
      ],
    },
  },
  {
    id: SPECS.SCIENTIST,
    name: 'Scientist',
    career: { connect: { id: CAREERS.ENGINEER } },
    skills: {
      connect: [
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.EDUCATION },
        { id: SKILLS.LORE },
        { id: SKILLS.MEDICINE },
      ],
    },
  },
  {
    id: SPECS.COMMANDO,
    name: 'Commando',
    career: { connect: { id: CAREERS.SOLDIER } },
    skills: {
      connect: [
        { id: SKILLS.BRAWL },
        { id: SKILLS.MELEE },
        { id: SKILLS.RESILIENCE },
        { id: SKILLS.SURVIVAL },
      ],
    },
  },
  {
    id: SPECS.MEDIC,
    name: 'Medic',
    career: { connect: { id: CAREERS.SOLDIER } },
    skills: {
      connect: [
        { id: SKILLS.XENOLOGY },
        { id: SKILLS.MEDICINE },
        { id: SKILLS.RESILIENCE },
        { id: SKILLS.VIGILANCE },
      ],
    },
  },
  {
    id: SPECS.SHARPSHOOTER,
    name: 'Sharpshooter',
    career: { connect: { id: CAREERS.SOLDIER } },
    skills: {
      connect: [
        { id: SKILLS.COOL },
        { id: SKILLS.PERCEPTION },
        { id: SKILLS.RANGED_LIGHT },
        { id: SKILLS.RANGED_HEAVY },
      ],
    },
  },
  {
    id: SPECS.INFILTRATOR,
    name: 'Infiltrator',
    career: { connect: { id: CAREERS.SPY } },
    skills: {
      connect: [
        { id: SKILLS.DECEPTION },
        { id: SKILLS.MELEE },
        { id: SKILLS.SKULLDUGGERY },
        { id: SKILLS.STREETWISE },
      ],
    },
  },
  {
    id: SPECS.SCOUT,
    name: 'Scout',
    career: { connect: { id: CAREERS.SPY } },
    skills: {
      connect: [
        { id: SKILLS.ATHLETICS },
        { id: SKILLS.MEDICINE },
        { id: SKILLS.PILOTING_PLANETARY },
        { id: SKILLS.SURVIVAL },
      ],
    },
  },
  {
    id: SPECS.SLICER,
    name: 'Slicer',
    career: { connect: { id: CAREERS.SPY } },
    skills: {
      connect: [
        { id: SKILLS.COMPUTERS },
        { id: SKILLS.EDUCATION },
        { id: SKILLS.UNDERWORLD },
        { id: SKILLS.STEALTH },
      ],
    },
  },
  {
    id: 19,
    name: 'Recruit',
    skills: {
      connect: [
        { id: SKILLS.ATHLETICS },
        { id: SKILLS.DISCIPLINE },
        { id: SKILLS.SURVIVAL },
        { id: SKILLS.VIGILANCE },
      ],
    },
  },
  {
    id: 20,
    name: 'Force-Sensitive Emergent',
  },
];

export default async function(photon: Photon): Promise<void> {
  for (const spec of specializations) {
    await photon.specializations.upsert({
      where: { id: spec.id },
      update: spec,
      create: spec,
    });
    console.log(`${spec.name} added to database`); // eslint-disable-line
  }
}
