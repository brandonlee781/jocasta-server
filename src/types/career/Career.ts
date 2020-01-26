import { objectType } from 'nexus';

export const Career = objectType({
  name: 'Career',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.skills({ type: 'Skill' });
    t.model.specializations({
      type: 'Specialization',
      ordering: { id: true, name: true },
    });
  },
});
