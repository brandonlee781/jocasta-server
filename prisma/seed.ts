import { Photon, Range, WeaponSkill, GearCondition } from '@prisma/photon';

import { hash } from 'bcryptjs';
import seedSkills from './seeders/skills.seed';
import seedCareers from './seeders/career.seed';
import seedSpecs from './seeders/specialization.seed';
import seedTalents from './seeders/talent.seed';
import seedTalentTrees, {
  TalentTreeResponse,
} from './seeders/talent-tree.seed';

import * as SPECS from './seeders/constants/specializations';
import * as SKILLS from './seeders/constants/skills';

interface FindIdByNameInput {
  row: number;
  column: number;
  talent: string;
  specialization: string;
}

const photon = new Photon();

async function main(): Promise<void> {
  await seedSkills(photon);
  await seedCareers(photon);
  await seedSpecs(photon);
  await seedTalents(photon);
  const talentTreeNodes: TalentTreeResponse[] = await seedTalentTrees(photon);

  const findIdByName = ({
    row,
    column,
    talent,
    specialization,
  }: FindIdByNameInput): string => {
    const node = talentTreeNodes.find(
      (t: TalentTreeResponse) =>
        t.column === column &&
        t.row === row &&
        t.talent.name === talent &&
        t.specialization.name === specialization
    );
    return node ? node.id : '';
  };
  const hashedPassword = await hash('test123', 10);
  const newUser = {
    email: 'brandonlee781@gmail.com',
    password: hashedPassword,
    name: 'brandonlee781',
  };

  const user = await photon.users.upsert({
    where: { email: newUser.email },
    update: newUser,
    create: newUser,
  });

  console.log(user); // eslint-disable-line

  const character = await photon.characters.create({
    data: {
      name: 'Bran Highwind',
      system: 'AOR',
      species: 'Human',
      career: 'Spy',
      specializations: {
        connect: [{ id: SPECS.SLICER }, { id: SPECS.RECRUIT }],
      },
      characteristics: {
        create: {
          Brawn: 2,
          Agility: 2,
          Intellect: 5,
          Cunning: 3,
          Willpower: 2,
          Presence: 2,
        },
      },
      derivedAttributes: {
        create: {
          soak: 3,
          wounds: {
            create: {
              threshold: 12,
              current: 0,
            },
          },
          strain: {
            create: {
              threshold: 13,
              current: 0,
            },
          },
          defense: {
            create: {
              ranged: 1,
              melee: 1,
            },
          },
        },
      },
      skills: {
        create: [
          {
            skill: { connect: { id: SKILLS.ATHLETICS } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.COMPUTERS } },
            career: true,
            rank: 2,
          },
          {
            skill: { connect: { id: SKILLS.COOL } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.COORDINATION } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.DECEPTION } },
            career: true,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.DISCIPLINE } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.PERCEPTION } },
            career: true,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.SKULLDUGGERY } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.STEALTH } },
            career: true,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.STREETWISE } },
            career: false,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.SURVIVAL } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.VIGILANCE } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.BRAWL } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.MELEE } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.RANGED_LIGHT } },
            career: true,
            rank: 2,
          },
          {
            skill: { connect: { id: SKILLS.RANGED_HEAVY } },
            career: true,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.EDUCATION } },
            career: true,
            rank: 0,
          },
          {
            skill: { connect: { id: SKILLS.UNDERWORLD } },
            career: true,
            rank: 1,
          },
          {
            skill: { connect: { id: SKILLS.WARFARE } },
            career: true,
            rank: 0,
          },
        ],
      },
      talents: {
        create: [
          {
            // Codebreaker
            talent: {
              connect: {
                id: findIdByName({
                  row: 1,
                  column: 1,
                  talent: 'Codebreaker',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Grit
            talent: {
              connect: {
                id: findIdByName({
                  row: 1,
                  column: 2,
                  talent: 'Grit',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Bypass Security
            talent: {
              connect: {
                id: findIdByName({
                  row: 1,
                  column: 4,
                  talent: 'Bypass Security',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Defensive Slicing
            talent: {
              connect: {
                id: findIdByName({
                  row: 2,
                  column: 1,
                  talent: 'Defensive Slicing',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Natural Programmer
            talent: {
              connect: {
                id: findIdByName({
                  row: 3,
                  column: 1,
                  talent: 'Natural Programmer',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Defensive Slicing
            talent: {
              connect: {
                id: findIdByName({
                  row: 4,
                  column: 1,
                  talent: 'Defensive Slicing',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Skilled Slicer
            talent: {
              connect: {
                id: findIdByName({
                  row: 5,
                  column: 1,
                  talent: 'Skilled Slicer',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Master Slicer
            talent: {
              connect: {
                id: findIdByName({
                  row: 5,
                  column: 2,
                  talent: 'Master Slicer',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Mental Fortress
            talent: {
              connect: {
                id: findIdByName({
                  row: 5,
                  column: 3,
                  talent: 'Mental Fortress',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Dedication
            talent: {
              connect: {
                id: findIdByName({
                  row: 5,
                  column: 4,
                  talent: 'Dedication',
                  specialization: 'Slicer',
                }),
              },
            },
          },
          {
            // Basic Combat Training
            talent: {
              connect: {
                id: findIdByName({
                  row: 1,
                  column: 1,
                  talent: 'Basic Combat Training',
                  specialization: 'Recruit',
                }),
              },
            },
          },
          {
            // Second Wind
            talent: {
              connect: {
                id: findIdByName({
                  row: 2,
                  column: 1,
                  talent: 'Second Wind',
                  specialization: 'Recruit',
                }),
              },
            },
          },
        ],
      },
      gear: {
        create: [
          {
            name: 'Backpack',
            quantity: 1,
            encumberance: -4,
            description: 'Increase encumberance threshold by 4.',
            rarity: 0,
          },
          {
            name: 'Stimpack',
            quantity: 3,
            encumberance: 0,
            description:
              'Use a maneuver to heal 5 wounds to a living creature. Consumed on use.',
            rarity: 1,
          },
          {
            name: 'Comlink',
            quantity: 1,
            encumberance: 0,
            description:
              'Allows communication between other characters with comlinks.',
            rarity: 0,
          },
          {
            name: 'Datapad',
            quantity: 1,
            encumberance: 1,
            description:
              'Used to record, store, display, and organize almost any kind of data.',
            rarity: 1,
          },
          {
            name: 'Fusion Cutter',
            quantity: 1,
            encumberance: 2,
            description:
              'Creates a beam that can easily cut through durasteel, duraplast and even armored ship hulls.',
            rarity: 2,
          },
          {
            name: 'Scanner Goggles',
            quantity: 1,
            encumberance: 0,
            description:
              'When worn, allow the wearer to see normally in dark conditions.',
            rarity: 3,
          },
          {
            name: 'Slicer Gear',
            quantity: 1,
            encumberance: 2,
            description: '',
            rarity: 4,
          },
        ],
      },
      weapons: {
        create: [
          {
            name: 'Holdout Blaster',
            make: 'Blastech HSB-200',
            quantity: 1,
            encumberance: 1,
            description: 'Stun setting',
            rarity: 4,
            range: Range.Short,
            skill: WeaponSkill.RangedLight,
            damage: 5,
            critical: 4,
            hardPoints: 1,
            condition: GearCondition.NONE,
          },
        ],
      },
      armor: {
        create: [
          {
            name: 'Holdout Blaster',
            quantity: 1,
            encumberance: 0,
            description: 'Stun setting',
            rarity: 4,
            hardPoints: 0,
            condition: GearCondition.NONE,
            wearing: true,
            defense: {
              create: {
                ranged: 0,
                melee: 0,
              },
            },
            soak: 1,
          },
        ],
      },
      encumberance: {
        create: {
          current: 5,
          threshold: 11,
        },
      },
      credits: 59,
      background: `Bran's family owned their shipping company, based out of Corellia, for generations. It wasn't a huge venture, never owning more than a half dozen ships, but they were good at what they did and lived comfortably enough. Having spent years running Republic contracts the sudden rise of the Empire came as a bit of a surprise for Bran's father Thadam. What scared him most was that his business seemed to do even better in the New Order. Profits were up, but Thadam couldn't help but feel guilty. After a few years Thadam was approached by an old contact. Some goods needed to be moved quickly, and quietly for a group that would prefer to avoid Imperial contact. Thadam agreed and began moving Alliance goods under the table. With his conscience cleared and some more credits in his pocket, Thadam became adept at dealing with both sides.`,
      description: 'Early 20s, brown hair, green eyes.',
      duties: {
        create: [
          {
            type: 'Intelligence',
            description:
              "Bran is constantly on the hunt for any information related to his family. He knows as long as the work with both sides they risk everything, and knowing a threat is coming (or obfuscating their involvement) is the best way to keep them safe. That doesn't mean he only scours the holonet for info on his family. He'll take anything and everything he can get his hands on and either use it himself or pass it on to the Alliance command.",
            current: 0,
          },
        ],
      },
      motivation:
        "Bran see's the Empire's violence as something that must be stopped for the good of the galaxy. He knows his family has been put into danger for profits, but even if his father stopped smuggling for the Empire, they may still be imprisoned. As far as Bran is concerned the only way his family can truly be free is if the Empire falls. He will do whatever it takes to see that happen.",
      imageUrl: 'https://i.imgur.com/vVMVTJ2.jpg',
      user: { connect: { id: user.id } },
    },
  });

  console.log(character); // eslint-disable-line
}

main()
  .catch(e => console.error(e)) // eslint-disable-line
  .finally(async () => {
    await photon.disconnect();
  });
