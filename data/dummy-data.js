import Category from './../models/category';
import Meal from './../models/meal';

export const CATEGORIES = [
    new Category('c1', 'Włoskie', '#f5428d'),
    new Category('c2', 'Szybkie', '#f54242'),
    new Category('c3', 'Lekkie', '#f5a442'),
    new Category('c4', 'Hamburgery', '#f5d142'),
    new Category('c5', 'Niemieckie', '#368dff'),
    new Category('c6', 'Wegańskie', '#41d95d'),
    new Category('c7', 'Sniadanie', '#9eecff'),
    new Category('c8', 'Indyjskie', '#b9ffb0'),
    new Category('c9', 'Chinskie', '#ffc7ff'),
    new Category('c10', 'Evangelion', '#47fced')
];

export const MEALS = [
    new Meal(
        'd1',
        ['c1', 'c2'],
        'Spaghetti z pomidorami',
        'https://najsmaczniejsze.pl/wp-content/uploads/2009/04/spagetti-po-bolonsku.jpg',
        20,
        ['4 łyżki oliwy', '1 cebula', '4 ząbki czosnku', '500g mięsa mielonego', '1/2 szklanki białego wina', '400g pomidorów w puszce', '1 łyżeczka cukru', '1 łyżeczka soli', '1/2 łyżeczki pieprzu', '1/2 łyżeczki oregano', '1/2 łyżeczki tymianku', '1/2 łyżeczki bazylia'],
        ['Oliwę rozgrzać w garnku, dodać cebulę i czosnek i podsmażyć na małym ogniu przez 5 minut.', 'Mięso dodać do garnka i podsmażyć przez 5 minut.', 'Wino dodać do garnka i wymieszać.', 'Pomidory dodać do garnka i wymieszać.', 'Dodać cukier, sól, pieprz, oregano, tymianek i bazylia.', 'Gotować przez 10 minut, aż sos zgęstnieje.'],
        false,
        true,
        true,
        true
    ),
    new Meal(
        'd2',
        ['c2'],
        'Szybkie pierogi',
        'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/7033/desktop/pierogi-z-miesem-wieprzowym.jpg.webp',
        10,
        ['500g mąki', '1 jajko', '1 łyżka oleju', '1/2 łyżeczki soli', '1/2 łyżeczki cukru', '1/2 szklanki wody'],
        ['Zagnieść mąkę z jajkiem, olejem, solą i cukrem.', 'Dodać wodę i zagnieść ciasto.', 'Ciasto odstawić na 30 minut w chłodnym miejscu.', 'Ciasto rozwałkować i naciąć na kawałki.', 'Kawałki ciasta uformować na pierogi.', 'Gotować przez 10 minut.'],
        false,
        false,
        false,
        false
    ),
    new Meal(
        'd3',
        ['c10'],
        'Kawa z puszki',
        'https://i.pinimg.com/564x/d6/b1/6b/d6b16b96d6eed5c1df861f334398fe31.jpg',
        5,
        ['1 puszka kawy', '1 puszka mleka', '1 puszka cukru'],
        ['Wszystko wymieszać i wypić.'],
        false,
        false,
        false,
        false
    ),

];
