// Mock
const userData = {
  _id: '1234345678910111213',
  email: 't.maier@gingco.net',
  username: 'Thomas',
  password: '$2a$10$OOXyjzvKxrHCz1wADGQneuH8Mea6tsp.LVBwUAAeE0CKKuN.7EG.m',
  meta: {
    createdAt: new Date(2019, 2, 15),
    status: 'active',
    code: '670373'
  },
  activities: [
    {
      meta: {
        completed: false
      },
      game: {
        _id: '98765432101112131',
        title: 'Adventskalender',
        description: 'Viel Spaß beim ersten digitalen Adventskalender!',
        meta: {
          servePuzzlesDaily: false,
          startDate: new Date(2019, 1, 15)
        },
        levels: [
          {
            stages: [
              {
                title: 'Wo ist das?',
                comment: 'Zum Einstieg ein relativ leichtes Rätsel für dich.',
                clue: 'Es befindet sich irgendwo in unserer Wohnung.',
                type: 'picture',
                puzzle: {
                  task: '/assets/images/badezimmer.jpeg',
                  solution: 'Badezimmer',
                  hint: ''
                }
              },
              {
                title: 'Was ist die Antwort?',
                comment: 'Das sollte ja kein Problem für dich sein.',
                clue: '',
                type: 'text',
                puzzle: {
                  task: 'Was ist rot, rund und gesund?',
                  solution: 'Apfel',
                  hint: ''
                }
              }
            ]
          },
          {
            stages: [
              {
                title: 'Errätst du den Code?',
                comment: 'Richtige Kombination führt zu einem neuer Hinweis.',
                clue: 'Setze die richtigen Felder, dann bekommst du den nächsten Hinweis.',
                type: 'matrix',
                puzzle: {
                  task: '6,4',
                  solution: '11, 24, 33, 52',
                  hint: 'Unter dem Kühlschrank'
                }
              }
            ]
          }
        ]
      },
      achievements: [
        {
          forLevels: ['Badezimmer', '']
        },
        {
          forLevels: ['']
        }
      ]
    }
  ]
}

export default userData