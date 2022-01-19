const db = require('./connection');
const { Job } = require('../models');

db.once('open', async () => {
//   await Category.deleteMany();

//   const Jobs = await Category.insertMany([
//     { name: 'Part Time' },
//     { name: 'Full time' },
//     { name: 'Part time & Full time' },
//   ]);


//   await Jobs.deleteMany();

  const jobsNames = await Job.insertMany([
    {
    jobTitle: 'Cashier',
    employer:'Target',
    description:
        'Target Cashiers are entry-level employees responsible for handling cash registers and providing customer service. Typical duties listed on a Target Cashier resume are greeting customers, collecting payments, managing returns and refunds, answering to customer inquiries, and stocking shelves.',
    jobId: "categories[0]._id",
    HourlyPay: 15,
    },
    {
      jobTitle: 'Barista',
      employer:'Starbucks',
      description:
        'Baristas at Starbucks take orders and make coffee, tea, and other drinks to customer specifications. Starbucks baristas may also operate cash registers and credit card machines. Baristas may field customer complaints or questions, as well.',
      jobId: "categories[0]._id",
      HourlyPay: 21,
    },
    {
      jobTitle: 'Stocker',
      employer:'Menards',
      jobId: 'categories[1]._id',
      description:
        'Our Stockers play an important role in the Customer Experience by stocking merchandise on the sales floor and ensuring our shelves and displays are full, faced and ready for our Customers!',
      HourlyPay: 15,
    },
    {
      jobTitle: 'Customer Service Representative',
      employer:'Goodwill',
      jobId: 'categories[1]._id',
      description:
        'Serves customers by providing product and service information and resolving product and service problems. Attracts potential customers by answering product and service questions and suggesting information about other products and services.',
      HourlyPay: 17,
    },
    {
      jobTitle: 'Janitor',
      employer:'Bee Line Support, Inc',
      jobId: 'categories[1]._id',
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      HourlyPay: 21,
    },
    {
      jobTitle: 'Airplane Cleaner',
      employer:'Hiram freelance Inc.',
      jobId: 'categories[2]._id',
      description:
        'An aircraft cleaner cleans and restocks the interior areas of a commercial aircraft. In this career, your responsibilities include cleaning all areas of the passenger cabin, lavatories, galleys, and overhead compartments.',
      HourlyPay: 15,
    },
    {
      jobTitle: 'Baking Assistant',
      employer:'Jeff and Jeff Baking',
      jobId: 'categories[2]._id',
      description:
        'Weigh, sift, measure and mix baking ingredients; prepare and bake breads, rolls, cookies, pies, cakes, biscuits, puddings, cobblers, brownies and other baked good items. Accurately and appropriately utilize the various bakery equipment and if needed, assist with training and monitoring others in its safe usage.',
      HourlyPay: 17.50,
    },
    {
      jobTitle: 'Grocery Shopper',
      employer:'Amazon',
      jobId: 'categories[3]._id',
      description:
        'As a personal grocery shopper, your job is to buy and deliver food and other products for customers. ... You help customers with order selection procedures, review orders with customers, safely handle and bag products, record any variances, maintain records, and communicate with call centers or store support.',
      HourlyPay: 15.35,
    },
    {
      jobTitle: 'Dog Handler',
      employer:'Ron Doggy Day Care',
      jobId: 'categories[4]._id',
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      HourlyPay: 12.50,
    },
    {
      jobTitle: 'Slibrarian',
      employer:'Northwestern University',
      jobId: 'categories[4]._id',
      description:
        'Librarians are responsible for organizing and managing all resources in the library. They have the following responsibilities: Assist library visitors in conducting research and locating resources. Organize all library resources so they are easy to locate. ... Evaluate library inventory needs and place orders.',
      HourlyPay: 2.99,
    },
  ]);

  console.log('Jobs seeded');

  process.exit();
});