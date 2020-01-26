import { objectType } from 'nexus';

export const DefenseAttribute = objectType({
  name: 'DefenseAttribute',
  definition(t) {
    t.model.id();
    t.model.ranged();
    t.model.melee();
  },
});

export const Threshold = objectType({
  name: 'Threshold',
  definition(t) {
    t.model.id();
    t.model.threshold();
    t.model.current();
  },
});

export const Characteristic = objectType({
  name: 'Characteristic',
  definition(t) {
    t.model.id();
    t.model.Brawn();
    t.model.Agility();
    t.model.Intellect();
    t.model.Cunning();
    t.model.Willpower();
    t.model.Presence();
  },
});

export const DerivedAttributes = objectType({
  name: 'DerivedAttribute',
  definition(t) {
    t.model.id();
    t.model.soak();
    t.model.wounds({ type: 'Threshold' });
    t.model.strain({ type: 'Threshold' });
    t.model.defense({ type: 'DefenseAttribute' });
  },
});

export const Experience = objectType({
  name: 'Experience',
  definition(t) {
    t.model.id();
    t.model.total();
    t.model.available();
  },
});

export const Duty = objectType({
  name: 'Duty',
  definition(t) {
    t.model.id();
    t.model.type();
    t.model.description();
    t.model.current();
  },
});
