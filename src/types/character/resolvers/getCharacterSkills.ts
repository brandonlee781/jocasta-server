import {
  Character,
  CharacterSkill,
  Skill,
  CharacteristicName,
  SkillType,
} from '@prisma/photon';
import { Context } from '../../../context';

export interface CharacterSkillWithSkill extends CharacterSkill {
  skill: Skill;
}

export interface CharacterSkills {
  id: string;
  skillId: number;
  name: string;
  characteristic: CharacteristicName;
  type: SkillType;
  career: boolean;
  rank: number;
}

export async function getCharacterSkill(
  character: Character,
  args: {},
  { photon }: Context
): Promise<CharacterSkills[]> {
  const skills: CharacterSkillWithSkill[] = await photon.characterSkills.findMany(
    {
      include: { skill: true },
      where: { character: { id: character.id } },
    }
  );
  return skills.map((skill: CharacterSkillWithSkill) => {
    return {
      id: skill.id,
      skillId: skill.skill.id,
      name: skill.skill.name,
      characteristic: skill.skill.characteristic,
      type: skill.skill.type,
      career: skill.career,
      rank: skill.rank,
    };
  });
}
