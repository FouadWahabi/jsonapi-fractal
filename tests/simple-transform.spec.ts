import { serialize } from '../src/index'

describe('transform', () => {
  it('Do simple transformation', () => {
    const entity = {
      firstName: "Joe",
      lastName: "Doe",
      homeAddress: {
        id: 1
      },
      images: [
        1,
        { id: 2 }
      ]
    };

    const serialized = serialize(entity, 'users', {
      relationships: ['homeAddress', 'images'],
      changeCase: 'kebabCase'
    });

    expect(serialized).toEqual({
      data: {
        type: "users",
        attributes: {
          'first-name': 'Joe',
          'last-name': 'Doe'
        },
        relationships: {
          'home-address': {
            data: {
              type: 'home-address',
              id: 1
            }
          },
          images: {
            data: [
              { type: 'images', id: 1 },
              { type: 'images', id: 2 }
            ]
          }
        }
      }
    })
  })
});
