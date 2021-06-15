const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const enchiladas = {
    id: 1,
    name: 'Chicken Enchiladas',
    in_stock : true,
    description: 'Blue corn tortillas with pulled chicken, chile verde sauce, cotija cheese, and fresh cilantro',
    category: 'Mexican',
   difficulty: 'easy'
};

const spaghetti = {
    id: 2,
    name: 'Spaghetti with Pork Meatballs',
    in_stock : false,
    description: 'Handmade spaghetti noodles with classic red sauce, pork meatball kit, fresh basil, and parmigiano reggiano',
    category: 'Italian',
    difficulty: 'medium'
};

const burgers = {
    id: 3,
    name: 'Bison Cheeseburgers',
    in_stock : true,
    description: 'Grass fed bison patties with brioche buns, smoked gouda cheese, and quick pickle kit',
    category: 'American',
    difficulty: 'medium'
};

const ramen = {
    id: 4,
    name: 'Spicy Shoyu Ramen',
    in_stock : false,
    description: 'Gourmet Instant Ramen kit with pork belly, chili oil, and eggs',
    category: 'Japanese',
    difficulty: 'hard'
};

const sushi = {
    id: 5,
    name: 'Spicy Tuna Rolls',
    in_stock : true,
    description: 'Sushi rolling kit (includes bamboo mat), albacore belly tuna, rice, nori, hot sauce, black sesame seeds, scallions',
    category: 'Japanese',
    difficulty: 'hard'
};

const pizza = {
    id: 6,
    name: 'Pepperoni Pizza',
    in_stock : true,
    description: 'Detroit style deep dish pizza, includes dough kit, sauce, buffalo mozzarella, and aged pepperoni',
    category: 'American/Italian',
    difficulty: 'easy'
};

const tacos = {
    id: 7,
    name: 'Veggie Tacos',
    in_stock : false,
    description: 'Corn tortillas, fire-roasted salsa, zuchinni, nopalitos, mushrooms, lime, and fresh cilantro',
    category: 'Mexican',
    difficulty: 'medium'
};

const meals = [
    enchiladas,
    spaghetti, 
    burgers,
    ramen,
    sushi,
    pizza,
    tacos
]

    it('meals responds with all meals data', async(done) => {
        const response = await request.get('/meals');

        expect(response.body).toEqual(meals);
        done();
    });

    // it('meals/:id responds with a single meal', async(done) => {
    //     const response = await request.get('/meals/3');

    //     expect(response.body).toEqual(burgers);
    //     (done);
    // })npm tes

