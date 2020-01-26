import { Career, Skill } from '@prisma/photon';
import { Context } from '../../../context';

export async function getSkillCareer(
  skill: Skill,
  args: any,
  { photon }: Context
): Promise<Career> {
  return {
    id: 1,
    name: 'null',
  };
}
