import {
  CharacteristicName,
  SkillType,
  SkillCreateInput,
  Photon,
} from '@prisma/photon';
import * as SKILLS from './constants/skills';

export const skills: SkillCreateInput[] = [
  {
    id: SKILLS.ASTROGATION,
    name: 'Astrogation',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.General,
  },
  {
    id: SKILLS.ATHLETICS,
    name: 'Athletics',
    characteristic: CharacteristicName.Brawn,
    type: SkillType.General,
  },
  {
    id: SKILLS.BRAWL,
    name: 'Brawl',
    characteristic: CharacteristicName.Brawn,
    type: SkillType.Combat,
  },
  {
    id: SKILLS.CHARM,
    name: 'Charm',
    characteristic: CharacteristicName.Presence,
    type: SkillType.General,
  },
  {
    id: SKILLS.COERCION,
    name: 'Coercion',
    characteristic: CharacteristicName.Willpower,
    type: SkillType.General,
  },
  {
    id: SKILLS.COMPUTERS,
    name: 'Computers',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.General,
  },
  {
    id: SKILLS.COOL,
    name: 'Cool',
    characteristic: CharacteristicName.Presence,
    type: SkillType.General,
  },
  {
    id: SKILLS.COORDINATION,
    name: 'Coordination',
    characteristic: CharacteristicName.Agility,
    type: SkillType.General,
  },
  {
    id: SKILLS.CORE_WORLDS,
    name: 'Core Worlds',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.DECEPTION,
    name: 'Deception',
    characteristic: CharacteristicName.Cunning,
    type: SkillType.General,
  },
  {
    id: SKILLS.DISCIPLINE,
    name: 'Discipline',
    characteristic: CharacteristicName.Willpower,
    type: SkillType.General,
  },
  {
    id: SKILLS.EDUCATION,
    name: 'Education',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.GUNNERY,
    name: 'Gunnery',
    characteristic: CharacteristicName.Agility,
    type: SkillType.Combat,
  },
  {
    id: SKILLS.LEADERSHIP,
    name: 'Leadership',
    characteristic: CharacteristicName.Presence,
    type: SkillType.General,
  },
  {
    id: SKILLS.LORE,
    name: 'Lore',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.MECHANICS,
    name: 'Mechanics',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.General,
  },
  {
    id: SKILLS.MEDICINE,
    name: 'Medicine',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.General,
  },
  {
    id: SKILLS.MELEE,
    name: 'Melee',
    characteristic: CharacteristicName.Brawn,
    type: SkillType.Combat,
  },
  {
    id: SKILLS.NEGOTIATION,
    name: 'Negotiation',
    characteristic: CharacteristicName.Presence,
    type: SkillType.General,
  },
  {
    id: SKILLS.OUTER_RIM,
    name: 'Outer Rim',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.PERCEPTION,
    name: 'Perception',
    characteristic: CharacteristicName.Cunning,
    type: SkillType.General,
  },
  {
    id: SKILLS.PILOTING_PLANETARY,
    name: 'Piloting (Planetary)',
    characteristic: CharacteristicName.Agility,
    type: SkillType.General,
  },
  {
    id: SKILLS.PILOTING_SPACE,
    name: 'Piloting (Space)',
    characteristic: CharacteristicName.Agility,
    type: SkillType.General,
  },
  {
    id: SKILLS.RANGED_HEAVY,
    name: 'Ranged (Heavy)',
    characteristic: CharacteristicName.Agility,
    type: SkillType.Combat,
  },
  {
    id: SKILLS.RANGED_LIGHT,
    name: 'Ranged (Light)',
    characteristic: CharacteristicName.Agility,
    type: SkillType.Combat,
  },
  {
    id: SKILLS.RESILIENCE,
    name: 'Resilience',
    characteristic: CharacteristicName.Brawn,
    type: SkillType.General,
  },
  {
    id: SKILLS.SKULLDUGGERY,
    name: 'Skullduggery',
    characteristic: CharacteristicName.Cunning,
    type: SkillType.General,
  },
  {
    id: SKILLS.STEALTH,
    name: 'Stealth',
    characteristic: CharacteristicName.Agility,
    type: SkillType.General,
  },
  {
    id: SKILLS.STREETWISE,
    name: 'Streetwise',
    characteristic: CharacteristicName.Cunning,
    type: SkillType.General,
  },
  {
    id: SKILLS.SURVIVAL,
    name: 'Survival',
    characteristic: CharacteristicName.Cunning,
    type: SkillType.General,
  },
  {
    id: SKILLS.UNDERWORLD,
    name: 'Underworld',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.VIGILANCE,
    name: 'Vigilance',
    characteristic: CharacteristicName.Willpower,
    type: SkillType.General,
  },
  {
    id: SKILLS.WARFARE,
    name: 'Warfare',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
  {
    id: SKILLS.XENOLOGY,
    name: 'Xenology',
    characteristic: CharacteristicName.Intellect,
    type: SkillType.Knowledge,
  },
];

export default async function(photon: Photon): Promise<void> {
  for (const skill of skills) {
    await photon.skills.upsert({
      where: { id: skill.id },
      update: skill,
      create: skill,
    });
    console.log(`${skill.name} added to database`); // eslint-disable-line
  }
}
