import { rule, shield } from 'graphql-shield';
import { Photon } from '@prisma/photon';
import { getUserId } from '../utils';

const photon = new Photon();

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isCharacterOwner: rule()(async (parent, { where: { id } }, context) => {
    const userId = getUserId(context);
    const character = await photon.characters
      .findMany({
        include: { user: true },
        where: {
          id,
          user: { id: userId },
        },
      })
      .then(value => value[0]);
    return Boolean(character);
  }),
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },
  Mutation: {
    updateOneCharacter: rules.isCharacterOwner,
    deleteOneCharacter: rules.isCharacterOwner,
  },
});
