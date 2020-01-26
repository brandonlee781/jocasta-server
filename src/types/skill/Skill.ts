import { objectType } from 'nexus';

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.characteristic();
    t.model.type();
    t.model.careers({ type: 'Career', ordering: { id: true, name: true } });
  },
});
