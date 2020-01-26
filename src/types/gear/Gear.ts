import { objectType } from 'nexus';

export const Gear = objectType({
  name: 'Gear',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.quantity();
    t.model.encumberance();
    t.model.description();
    t.model.rarity();
  },
});

export const Attachment = objectType({
  name: 'Attachment',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.hardPoints();
    t.model.base();
    t.model.modifications();
  },
});

export const Weapon = objectType({
  name: 'Weapon',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.quantity();
    t.model.encumberance();
    t.model.description();
    t.model.rarity();
    t.model.hardPoints();
    t.model.condition();
    t.model.attachments({ type: 'Attachment' });
    t.model.make();
    t.model.range();
    t.model.skill();
    t.model.damage();
    t.model.critical();
  },
});

export const Armor = objectType({
  name: 'Armor',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.quantity();
    t.model.encumberance();
    t.model.description();
    t.model.rarity();
    t.model.hardPoints();
    t.model.condition();
    t.model.attachments({ type: 'Attachment' });
    t.model.defense({ type: 'DefenseAttribute' });
    t.model.soak();
    t.model.wearing();
  },
});
