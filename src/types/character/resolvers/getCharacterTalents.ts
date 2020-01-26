import { TalentTreeNode, Character } from '@prisma/photon';
import { Context } from '../../../context';

export async function getCharacterTalent(
  character: Character,
  args: any,
  { photon }: Context
): Promise<TalentTreeNode[]> {
  const talents = await photon.characterTalents.findMany({
    include: { talent: true },
    where: { character: { id: character.id } },
  });
  return talents.map(tal => tal.talent);
}
