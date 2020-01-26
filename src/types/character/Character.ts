import { objectType } from 'nexus';
import { getCharacterSkill } from './resolvers/getCharacterSkills';
import { getCharacterTalent } from './resolvers/getCharacterTalents';

export const Character = objectType({
  name: 'Character',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.system();
    t.model.career();
    t.model.species();
    t.model.specializations({ type: 'Specialization' });
    t.model.characteristics({ type: 'Characteristic' });
    t.model.derivedAttributes({ type: 'DerivedAttribute' });
    t.field('skills', {
      type: 'CharacterSkills',
      list: true,
      resolve: getCharacterSkill,
    });
    t.field('talents', {
      type: 'TalentTreeNode',
      list: true,
      resolve: getCharacterTalent,
    });
    t.model.gear({ type: 'Gear' });
    t.model.weapons({ type: 'Weapon' });
    t.model.armor({ type: 'Armor' });
    t.model.encumberance({ type: 'Threshold' });
    t.model.experience({ type: 'Experience' });
    t.model.resources();
    t.model.credits();
    t.model.injuries();
    t.model.background();
    t.model.description();
    t.model.motivation();
    t.model.duties({ type: 'Duty' });
    t.model.imageUrl();
    t.model.notes();
    t.model.user({ type: 'User' });
  },
});

export const CharacterSkills = objectType({
  name: 'CharacterSkills',
  definition(t) {
    t.id('id');
    t.field('skillId', { type: 'Int' });
    t.field('name', { type: 'String' });
    t.field('characteristic', { type: 'CharacteristicName' });
    t.field('type', { type: 'SkillType' });
    t.field('career', { type: 'Boolean' });
    t.field('rank', { type: 'Int' });
  },
});

export const CharacterTalent = objectType({
  name: 'CharacterTalent',
  definition(t) {
    t.model.id();
    t.model.talent({ type: 'TalentTreeNode' });
  },
});
