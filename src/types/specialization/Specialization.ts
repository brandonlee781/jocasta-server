import { objectType } from 'nexus';

export const Specialization = objectType({
  name: 'Specialization',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.skills({ type: 'Skill' });
    t.model.career({ type: 'Career' });
    t.model.talents({ type: 'Talent' });
    t.model.talentTree({ type: 'TalentTreeNode', ordering: { row: true } });
  },
});
