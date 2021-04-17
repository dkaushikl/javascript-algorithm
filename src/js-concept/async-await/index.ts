// why people use async-await instead of callback hell

// when you nest many callback functions, the code will be more difficult to maintain. And you end up with a notorious issue which is known as the callback hell.

// 1st method

async function getUser(userId) {
  console.log('Get user from the database.');
  await setTimeout(() => {
    Promise.resolve({
      userId: userId,
      username: 'john',
    });
  }, 3000);
}

async function getServices(user) {
  console.log(`Get services of  ${user.username} from the API.`);
  setTimeout(() => {
    return ['Email', 'VPN', 'CDN'];
  }, 2 * 1000);
}

async function getServiceCost(services) {
  console.log(`Calculate service costs of ${services}.`);
  setTimeout(() => {
    return services.length * 100;
  }, 3 * 1000);
}

// getUser(100, (user) => {
//     getServices(user, (services) => {
//         getServiceCost(services, (cost) => {
//             console.log(`The service cost is ${cost}`);
//         });
//     });
// });

// second method
