import { queryType } from 'nexus';
import { getUserId } from '../utils';

export const Query = queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.photon.users.findOne({
          where: {
            id: userId,
          },
        });
      },
    });
    t.crud.character();
    t.crud.characters();
    t.crud.career();
    t.crud.careers();
    t.crud.skill();
    t.crud.skills({ filtering: { type: true } });
    t.crud.talent();
    t.crud.talents({
      filtering: { name: true },
    });
    t.crud.user();
  },
});
