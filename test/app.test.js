const store = require('../store');
const app = require('../modules/app/app');

describe('pets endpoints', () => {
  describe('get /cats endpoint', () => {
    it('responds with 200 and both a dog and object', () => {
      return supertest(app).get('/pets').expect(200).expect((res) => {
        expect(res.body).to.eql({
          nextCat: {
            age: 2,
            breed: 'Bengal',
            description: 'Orange bengal cat with black stripes lounging on concrete.',
            gender: 'Female',
            imageURL:
              'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Steve French',
            story: 'Thrown on the street'
          },
          nextDog: {
            age: 3,
            breed: 'Golden Retriever',
            description: 'A smiling golden-brown golden retreiver listening to music.',
            gender: 'Male',
            imageURL:
              'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Zim',
            story: 'Owner Passed away'
          }
        });
      });
    });

    it('responds with 200 deleted', () => {
      return supertest(app).delete('/pets').send({ type: 'dogs' }).expect(204);
    });
  });
});
describe('people endpoints', () => {
  describe('get /people endpoint', () => {
    it('responds with 200 and an array of all the people', () => {
      return supertest(app).get('/people').expect(200).expect((res) => {
        console.log(res.body);
        expect(res.body).to.eql([ 'Randy Lahey', 'Trevor Cory', 'Jim Lahey' ]);
      });
    });

    it('responds with 201 created', () => {
      return supertest(app).post('/people').send({ name: 'test' }).expect(201);
    });
  });
});
