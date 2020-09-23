const faker = require('faker');
const User = require('../models/User');

function getRandomId(idArray) {
  const rnd = Math.floor(Math.random() * Math.floor(idArray.length));
  return idArray[rnd];
}

exports.seed = async function(knex) {
  userIds = [];
  await User.query().then(users => {
    users.forEach(user => {
      userIds.push(user.id);
    });
  });

  console.log('NEXT');
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
        {name: faker.commerce.productName(), content: faker.commerce.productDescription(), user_id: getRandomId(userIds)},
      ]);
    });
};
