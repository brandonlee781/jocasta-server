import { objectType } from 'nexus';

export const TalentTreeNode = objectType({
  name: 'TalentTreeNode',
  definition(t) {
    t.model.id();
    t.model.row();
    t.model.column();
    t.model.connections();
    t.model.talent({ type: 'Talent' });
  },
});
