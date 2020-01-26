import { objectType } from 'nexus';

export const Talent = objectType({
  name: 'Talent',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.page();
    t.model.description();
    t.model.ranked();
    t.model.activation();
    t.model.force();
    t.model.specializations({ type: 'Specialization' });
  },
});
