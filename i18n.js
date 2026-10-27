/* Idiomas del sitio (ES / EN / FR).
   El español es el texto original de las páginas; aquí se traduce por coincidencia exacta de texto.
   Para añadir o cambiar un texto: edita el HTML en español y agrega su traducción en los diccionarios. */
(function () {
  "use strict";
  var LANGS = ["es", "en", "fr"];
  var KEY = "mtq-lang";
  var D = {
    en: {
      "M Taquito — Restaurante y Bar Mexicano en Longueuil": "M Taquito — Mexican Restaurant & Bar in Longueuil",
      "Inicio": "Home",
      "Menú": "Menu",
      "Galería": "Gallery",
      "Reservas": "Reservations",
      "Contacto": "Contact",
      "Pedir en línea": "Order online",
      "Abrir menú de navegación": "Open navigation menu",
      "Explora": "Explore",
      "Visítanos": "Visit us",
      "Restaurante y bar mexicano en Longueuil. Tacos, birria, burritos y salsas de la casa. Ven a comer o pide en línea.": "Mexican restaurant and bar in Longueuil. Tacos, birria, burritos and house salsas. Come eat with us or order online.",
      "© 2026 M Taquito. Todos los derechos reservados.": "© 2026 M Taquito. All rights reserved.",
      "Sitio de práctica — datos de contacto con fines de demostración.": "Practice site — contact details are for demonstration purposes only.",
      "Sitio de práctica — verifica dirección y teléfono antes de publicar.": "Practice site — verify the address and phone number before publishing.",
      "Sitio de práctica — verifica todos los datos con el negocio real antes de publicar.": "Practice site — verify all details with the actual business before publishing.",
      "Cerrar": "Close",
      "Ver más grande": "View larger",
      "Logo de M Taquito: sombrero, chile rojo y bigote": "M Taquito logo: sombrero, red chili pepper and mustache",
      "Sabores de México, en el corazón de Longueuil": "Flavors of Mexico, in the heart of Longueuil",
      "Auténtico, casero y": "Authentic, homemade and",
      "hecho para compartir": "made for sharing",
      "Tacos al pastor, carnitas, chorizo y pollo, birria con consomé, tostadas de camarón y salsas de la casa. Ven a comer a Longueuil o pide en línea.": "Tacos al pastor, carnitas, chorizo and chicken, birria with consommé, shrimp tostadas and house salsas. Come eat with us in Longueuil or order online.",
      "Reservar mesa": "Book a table",
      "Ver el menú": "View the menu",
      "Cerrado los lunes": "Closed on Mondays",
      "Ubicación": "Location",
      "o resérvalo en línea": "or book online",
      "De la plancha a tu mesa": "From the grill to your table",
      "Tacos, tostadas y birria, recién hechos.": "Tacos, tostadas and birria, freshly made.",
      "Tacos al pastor con cebolla y cilantro": "Tacos al pastor with onion and cilantro",
      "Charola de tacos junto a tostadas de camarón": "Tray of tacos next to shrimp tostadas",
      "Pizzabirria en caja con consomé M Taquito": "Pizzabirria in a box with M Taquito consommé",
      "Lo que nos distingue": "What sets us apart",
      "Cocina mexicana, ambiente de barrio.": "Mexican cooking, neighborhood vibe.",
      "Carnes para tus tacos": "Meats for your tacos",
      "Al pastor, carnitas, chorizo y pollo, con cebolla, cilantro y limón.": "Al pastor, carnitas, chorizo and chicken, with onion, cilantro and lime.",
      "Salsas de la casa": "House salsas",
      "Roja, verde y de chile de árbol, para ponerle el picante que quieras.": "Red, green and chile de árbol, so you can add as much heat as you like.",
      "Birria con queso fundido y consomé para mojar.": "Birria with melted cheese and consommé for dipping.",
      "¿Antojo de tacos? Pide desde casa.": "Craving tacos? Order from home.",
      "Ordena en línea para recoger o a domicilio. Tu pedido se hace directo en nuestra plataforma segura de pedidos.": "Order online for pickup or delivery. Your order is placed directly on our secure ordering platform.",
      "Nuestro lugar": "Our place",
      "Un rincón de México en Longueuil.": "A corner of Mexico in Longueuil.",
      "Murales de patios mexicanos, sillas de colores, una barra con Jarritos y un altar de Día de Muertos. Ven a comer, o pide en línea y llévatelo a casa.": "Murals of Mexican courtyards, colorful chairs, a bar with Jarritos and a Day of the Dead altar. Come eat with us, or order online and take it home.",
      "Ver la galería": "View the gallery",
      "Mural de arcos y patios mexicanos en el comedor": "Mural of arches and Mexican courtyards in the dining room",
      "Altar de Día de Muertos junto a las mesas": "Day of the Dead altar next to the tables",
      "M Taquito: restaurante y bar mexicano en Longueuil, Quebec. Tacos, birria, burritos y pedidos en línea.": "M Taquito: Mexican restaurant and bar in Longueuil, Quebec. Tacos, birria, burritos and online ordering.",
      "Menú — M Taquito": "Menu — M Taquito",
      "Nuestro menú": "Our menu",
      "De la comida callejera a la mesa familiar.": "From street food to the family table.",
      "Precios en dólares canadienses. Pregunta a tu mesero por las opciones sin gluten y los platillos del día. Toca una foto para verla más grande.": "Prices in Canadian dollars. Ask your server about gluten-free options and the dishes of the day. Tap a photo to see it larger.",
      "Categorías del menú": "Menu categories",
      "Tacos": "Tacos",
      "Burritos": "Burritos",
      "Nachos y entradas": "Nachos and starters",
      "Platos fuertes": "Main dishes",
      "Menú infantil": "Kids' menu",
      "Bebidas": "Drinks",
      "Postres": "Desserts",
      "Extras": "Extras",
      "Charola de tacos con tres salsas": "Tray of tacos with three salsas",
      "— orden de 4, con salsa a elección, cilantro, cebolla y limón": "— order of 4, with your choice of salsa, cilantro, onion and lime",
      "Pollo": "Chicken",
      "Camarón": "Shrimp",
      "Res con queso fundido": "Beef with melted cheese",
      "Vegetariano": "Vegetarian",
      "vegetariano": "vegetarian",
      "Nopal con queso": "Nopal with cheese",
      "Doble tortilla de 6\", queso mozzarella, tu elección de carne": "Double 6\" tortilla, mozzarella cheese, your choice of meat",
      "Burrito cortado con nachos y limonada rosa": "Cut burrito with nachos and pink lemonade",
      "— Burroland: tortilla de harina de 12\", frijoles, arroz y crema, con lechuga, tomate, salsa mil islas, nachos, crema y queso": "— Burroland: 12\" flour tortilla, beans, rice and cream, with lettuce, tomato, Thousand Island dressing, nachos, cream and cheese",
      "Pollo, cubierto de guacamole": "Chicken, topped with guacamole",
      "Res molida": "Ground beef",
      "Burrito de pollo o res": "Chicken or beef burrito",
      "Burrito vegetariano": "Vegetarian burrito",
      "Pimiento, cebolla y nopales": "Bell pepper, onion and nopales",
      "Burrito de jamón y tocino": "Ham and bacon burrito",
      "Pollo o res": "Chicken or beef",
      "18 pulgadas, 3 carnes, cubierto de salsa roja, verde y queso fundido, con nachos": "18 inches, 3 meats, topped with red salsa, green salsa and melted cheese, with nachos",
      "Nachos con tomate, pimientos, cebolla y queso, bañados en salsa roja": "Nachos with tomato, bell peppers, onion and cheese, topped with red salsa",
      "Nachos locos con queso fundido, tomate y pimientos": "Nachos locos with melted cheese, tomato and bell peppers",
      "Nachos con tres salsas": "Nachos with three salsas",
      "Guacamole, salsa y crema agria": "Guacamole, salsa and sour cream",
      "Tortilla frita, aguacate, crema agria y queso": "Fried tortilla, avocado, sour cream and cheese",
      "Guacamole tradicional": "Traditional guacamole",
      "Tostadas con guacamole y pico de gallo": "Tostadas with guacamole and pico de gallo",
      "Camarones a la parrilla": "Grilled shrimp",
      "Con arroz, ensalada y limón": "With rice, salad and lime",
      "Res a la parrilla con arroz, ensalada, papas y tortillas": "Grilled beef with rice, salad, potatoes and tortillas",
      "Enchiladas verdes, rojas o de mole": "Green, red or mole enchiladas",
      "3 piezas de pollo, con arroz y ensalada": "3 pieces of chicken, with rice and salad",
      "Zarape con jarra Dos XX": "Zarape with a Dos XX pitcher",
      "15 tacos variados, para compartir": "15 assorted tacos, to share",
      "15 tacos con queso": "15 tacos with cheese",
      "15 tacos variados": "15 assorted tacos",
      "3 piezas de pollo, crema, queso y arroz": "3 pieces of chicken, cream, cheese and rice",
      "Gorditas de chicharrón o de queso": "Gorditas with chicharrón or cheese",
      "Pollo, camarón o res con verduras y 3 tortillas": "Chicken, shrimp or beef with vegetables and 3 tortillas",
      "3 piezas con consomé para mojar": "3 pieces with consommé for dipping",
      "Quesabirrias con consomé y cebolla": "Quesabirrias with consommé and onion",
      "Tortilla de harina, queso, birria y consomé": "Flour tortilla, cheese, birria and consommé",
      "Pizzabirria en caja con consomé": "Pizzabirria in a box with consommé",
      "Res, pollo o papa, con arroz y tortilla de 10\"": "Beef, chicken or potato, with rice and 10\" tortilla",
      "Tortilla de 10\" con al pastor y queso fundido": "10\" tortilla with al pastor and melted cheese",
      "Res o cerdo con cebolla, pimientos, tocino, jamón y queso, 5 tortillas": "Beef or pork with onion, bell peppers, bacon, ham and cheese, 5 tortillas",
      "Chilaquiles verdes o rojos con bistec": "Green or red chilaquiles with steak",
      "Estamos preparando esta sección. Mientras tanto, pregunta a tu mesero o": "We're preparing this section. In the meantime, ask your server or",
      "consulta el menú en línea": "check the online menu",
      "Cócteles": "Cocktails",
      "Vaso": "Glass",
      "Jarra": "Pitcher",
      "Cervezas y micheladas": "Beers and micheladas",
      "Cerveza de barril": "Draft beer",
      "Michelada de 750 ml": "750 ml Michelada",
      "Con Miguelito, pimienta, sal y limón verde": "With Miguelito, pepper, salt and lime",
      "Aguas frescas": "Aguas frescas",
      "Agua de mango": "Mango water",
      "Preparada con mangos reales y leche": "Made with real mangoes and milk",
      "Bebida de arroz con un toque de canela y vainilla": "A rice drink with a touch of cinnamon and vanilla",
      "Agua de tamarindo": "Tamarind water",
      "Refrescos Jarritos": "Jarritos sodas",
      "Sabores disponibles": "Available flavors",
      "Mango": "Mango",
      "Fresa": "Strawberry",
      "Piña": "Pineapple",
      "Tamarindo": "Tamarind",
      "Mandarina": "Mandarin",
      "Limón verde": "Lime",
      "Limonadas": "Lemonades",
      "Durazno": "Peach",
      "Sandía": "Watermelon",
      "Maracuyá": "Passion fruit",
      "Refrescos": "Sodas",
      "Refrescos y bebidas embotelladas": "Sodas and bottled drinks",
      "Marcas disponibles": "Available brands",
      "Coca-Cola de dieta": "Diet Coca-Cola",
      "Pepsi de dieta": "Diet Pepsi",
      "Pastel de queso": "Cheesecake",
      "Disponible en cuatro sabores": "Available in four flavors",
      "Natural": "Plain",
      "Caramelo": "Caramel",
      "Frambuesa": "Raspberry",
      "Chocolate": "Chocolate",
      "Postre de banana con helado de tres sabores (fresa, chocolate y vainilla), acompañado de chocolate y cerezas": "Banana dessert with three-flavor ice cream (strawberry, chocolate and vanilla), served with chocolate and cherries",
      "Dos churros acompañados de caramelo y chocolate": "Two churros served with caramel and chocolate",
      "Flan tradicional": "Traditional flan",
      "Salsas": "Salsas",
      "Salsa roja": "Red salsa",
      "Salsa verde": "Green salsa",
      "Salsa de chile de árbol": "Chile de árbol salsa",
      "suave": "mild",
      "media": "medium",
      "muy picante": "very hot",
      "¿Ya sabes qué quieres?": "Know what you want?",
      "Platillos y precios de tacos, entradas, especialidades y burritos verificados con el sitio oficial.": "Dishes and prices for tacos, starters, specialties and burritos verified against the official website.",
      "Tacos, burritos, nachos, platos fuertes y más del menú de M Taquito, restaurante mexicano en Longueuil.": "Tacos, burritos, nachos, main dishes and more from the M Taquito menu, a Mexican restaurant in Longueuil.",
      "Galería — M Taquito": "Gallery — M Taquito",
      "Así se ve y así se come.": "This is how it looks, and how it's enjoyed.",
      "Nuestro local, la cocina y los platillos de la casa. Toca una foto para verla más grande.": "Our place, our kitchen and the dishes of the house. Tap a photo to see it larger.",
      "La fachada": "The storefront",
      "El mural de arcos": "The arches mural",
      "Tostadas de camarón": "Shrimp tostadas",
      "Tacos y tostadas": "Tacos and tostadas",
      "Altar de Día de Muertos": "Day of the Dead altar",
      "Burrito y limonada": "Burrito and lemonade",
      "Charola con tres salsas": "Tray with three salsas",
      "El mural de la calavera": "The skull mural",
      "Tostadas con guacamole": "Tostadas with guacamole",
      "El comedor": "The dining room",
      "Tacos de pollo": "Chicken tacos",
      "Birria en la plancha": "Birria on the grill",
      "Armando tacos": "Assembling tacos",
      "Tostada de camarón": "Shrimp tostada",
      "Tacos y salsas": "Tacos and salsas",
      "Pizzabirria para llevar": "Takeout pizzabirria",
      "Fotos del local, la cocina y los platillos de M Taquito en Longueuil.": "Photos of the restaurant, the kitchen and the dishes at M Taquito in Longueuil.",
      "Reservas — M Taquito": "Reservations — M Taquito",
      "Guárdanos un lugar en la mesa.": "Save us a spot at the table.",
      "Teléfono": "Phone",
      "¿Grupo grande o evento privado? Llámanos al": "Large group or private event? Call us at",
      "Reserva tu mesa en M Taquito, restaurante mexicano en Longueuil.": "Book your table at M Taquito, a Mexican restaurant in Longueuil.",
      "Contacto — M Taquito": "Contact — M Taquito",
      "Te esperamos en Longueuil.": "We look forward to seeing you in Longueuil.",
      "Dirección": "Address",
      "Servicios": "Services",
      "Para llevar y pedidos en línea": "Takeout and online orders",
      "Lunes": "Monday",
      "Cerrado": "Closed",
      "Domingo": "Sunday",
      "16:00 – 22:00": "4:00 pm – 10:00 pm",
      "Fachada de M Taquito Restaurant Bar de noche": "M Taquito Restaurant Bar storefront at night",
      "Mapa de ubicación de M Taquito": "Map showing the location of M Taquito",
      "Dirección, teléfono y horario de M Taquito, restaurante mexicano en Longueuil, Quebec.": "Address, phone and hours of M Taquito, a Mexican restaurant in Longueuil, Quebec.",
      "Horario": "Hours",
      "Mar–Dom 16:00–22:00": "Tue–Sun 4:00–10:00 pm",
      "Martes – Viernes": "Tuesday – Friday",
      "Sábado": "Saturday",
      "También puedes pedir en": "You can also order on",
      "Pedir en Uber Eats": "Order on Uber Eats",
      "Pedir en DoorDash": "Order on DoorDash",
      "Pedir en SkipTheDishes": "Order on SkipTheDishes",
      "Facebook de M Taquito": "M Taquito on Facebook",
      "Instagram de M Taquito": "M Taquito on Instagram",
      "Síguenos": "Follow us",
      "Redes sociales": "Social media",
      "Pedidos a domicilio": "Delivery orders",
      "Cómo llegar": "Get directions",
      "Reserva tu mesa en línea con nuestro formulario. Para grupos de más de 10 personas, mejor llámanos directamente.": "Book your table online with our reservation form. For groups of more than 10 people, please call us directly.",
      "Reserva tu mesa en línea": "Book your table online",
      "Llena nuestro formulario de reservas en línea.": "Fill out our online reservation form.",
      "Reservar en línea": "Book online",
      "El formulario se abre en una pestaña nueva.": "The form opens in a new tab.",
      "Mini burrito de huevo": "Mini egg burrito",
      "Con huevo, queso, pollo y arroz": "With egg, cheese, chicken and rice",
      "Mini burrito de pollo": "Mini chicken burrito",
      "Con pollo, queso, frijoles y arroz": "With chicken, cheese, beans and rice",
      "Mini sopa azteca": "Mini sopa azteca",
      "Sopa azteca con tortilla, omelette frito, queso crema y aguacate": "Sopa azteca with tortilla, fried omelette, cream cheese and avocado",
      "Mini taquitos": "Mini taquitos",
      "Dos taquitos de pollo o carne, acompañados de queso y arroz": "Two chicken or beef taquitos, served with cheese and rice",
      "Mini quesadillas": "Mini quesadillas",
      "Dos quesadillas de pollo preparadas con tortilla de harina y queso, acompañadas de arroz": "Two chicken quesadillas made with a flour tortilla and cheese, served with rice",
      "Nuggets de pollo": "Chicken nuggets",
      "4 nuggets": "4 nuggets",
      "6 nuggets": "6 nuggets",
      "Jugo de manzana": "Apple juice"
  },
    fr: {
      "M Taquito — Restaurante y Bar Mexicano en Longueuil": "M Taquito — Restaurant et bar mexicain à Longueuil",
      "Inicio": "Accueil",
      "Menú": "Menu",
      "Galería": "Galerie",
      "Reservas": "Réservations",
      "Contacto": "Contact",
      "Pedir en línea": "Commander en ligne",
      "Abrir menú de navegación": "Ouvrir le menu de navigation",
      "Explora": "Explorer",
      "Visítanos": "Rendez-nous visite",
      "Restaurante y bar mexicano en Longueuil. Tacos, birria, burritos y salsas de la casa. Ven a comer o pide en línea.": "Restaurant et bar mexicain à Longueuil. Tacos, birria, burritos et salsas maison. Venez manger ou commandez en ligne.",
      "© 2026 M Taquito. Todos los derechos reservados.": "© 2026 M Taquito. Tous droits réservés.",
      "Sitio de práctica — datos de contacto con fines de demostración.": "Site d'essai — coordonnées à titre de démonstration seulement.",
      "Sitio de práctica — verifica dirección y teléfono antes de publicar.": "Site d'essai — vérifiez l'adresse et le téléphone avant la publication.",
      "Sitio de práctica — verifica todos los datos con el negocio real antes de publicar.": "Site d'essai — vérifiez tous les renseignements auprès de l'entreprise avant la publication.",
      "Cerrar": "Fermer",
      "Ver más grande": "Agrandir",
      "Logo de M Taquito: sombrero, chile rojo y bigote": "Logo de M Taquito : sombrero, piment rouge et moustache",
      "Sabores de México, en el corazón de Longueuil": "Les saveurs du Mexique, au cœur de Longueuil",
      "Auténtico, casero y": "Authentique, maison et",
      "hecho para compartir": "fait pour être partagé",
      "Tacos al pastor, carnitas, chorizo y pollo, birria con consomé, tostadas de camarón y salsas de la casa. Ven a comer a Longueuil o pide en línea.": "Tacos al pastor, carnitas, chorizo et poulet, birria avec consommé, tostadas aux crevettes et salsas maison. Venez manger à Longueuil ou commandez en ligne.",
      "Reservar mesa": "Réserver une table",
      "Ver el menú": "Voir le menu",
      "Cerrado los lunes": "Fermé le lundi",
      "Ubicación": "Emplacement",
      "o resérvalo en línea": "ou réservez en ligne",
      "De la plancha a tu mesa": "De la plaque à votre table",
      "Tacos, tostadas y birria, recién hechos.": "Tacos, tostadas et birria, fraîchement préparés.",
      "Tacos al pastor con cebolla y cilantro": "Tacos al pastor à l'oignon et à la coriandre",
      "Charola de tacos junto a tostadas de camarón": "Plateau de tacos à côté de tostadas aux crevettes",
      "Pizzabirria en caja con consomé M Taquito": "Pizzabirria en boîte avec consommé M Taquito",
      "Lo que nos distingue": "Ce qui nous distingue",
      "Cocina mexicana, ambiente de barrio.": "Cuisine mexicaine, ambiance de quartier.",
      "Carnes para tus tacos": "Viandes pour vos tacos",
      "Al pastor, carnitas, chorizo y pollo, con cebolla, cilantro y limón.": "Al pastor, carnitas, chorizo et poulet, avec oignon, coriandre et lime.",
      "Salsas de la casa": "Salsas maison",
      "Roja, verde y de chile de árbol, para ponerle el picante que quieras.": "Rouge, verte et au chile de árbol, pour relever vos plats à votre goût.",
      "Birria con queso fundido y consomé para mojar.": "Birria au fromage fondu avec consommé pour tremper.",
      "¿Antojo de tacos? Pide desde casa.": "Une envie de tacos? Commandez de chez vous.",
      "Ordena en línea para recoger o a domicilio. Tu pedido se hace directo en nuestra plataforma segura de pedidos.": "Commandez en ligne pour le ramassage ou la livraison. Votre commande se fait directement sur notre plateforme de commande sécurisée.",
      "Nuestro lugar": "Notre restaurant",
      "Un rincón de México en Longueuil.": "Un coin du Mexique à Longueuil.",
      "Murales de patios mexicanos, sillas de colores, una barra con Jarritos y un altar de Día de Muertos. Ven a comer, o pide en línea y llévatelo a casa.": "Murales de patios mexicains, chaises colorées, un bar avec des Jarritos et un autel du Jour des morts. Venez manger, ou commandez en ligne et emportez-le chez vous.",
      "Ver la galería": "Voir la galerie",
      "Mural de arcos y patios mexicanos en el comedor": "Murale d'arches et de patios mexicains dans la salle à manger",
      "Altar de Día de Muertos junto a las mesas": "Autel du Jour des morts à côté des tables",
      "M Taquito: restaurante y bar mexicano en Longueuil, Quebec. Tacos, birria, burritos y pedidos en línea.": "M Taquito : restaurant et bar mexicain à Longueuil, Québec. Tacos, birria, burritos et commandes en ligne.",
      "Menú — M Taquito": "Menu — M Taquito",
      "Nuestro menú": "Notre menu",
      "De la comida callejera a la mesa familiar.": "De la cuisine de rue à la table familiale.",
      "Precios en dólares canadienses. Pregunta a tu mesero por las opciones sin gluten y los platillos del día. Toca una foto para verla más grande.": "Prix en dollars canadiens. Demandez à votre serveur les options sans gluten et les plats du jour. Touchez une photo pour l'agrandir.",
      "Categorías del menú": "Catégories du menu",
      "Tacos": "Tacos",
      "Burritos": "Burritos",
      "Nachos y entradas": "Nachos et entrées",
      "Platos fuertes": "Plats principaux",
      "Menú infantil": "Menu enfant",
      "Bebidas": "Boissons",
      "Postres": "Desserts",
      "Extras": "Extras",
      "Charola de tacos con tres salsas": "Plateau de tacos avec trois salsas",
      "— orden de 4, con salsa a elección, cilantro, cebolla y limón": "— commande de 4, avec salsa au choix, coriandre, oignon et lime",
      "Pollo": "Poulet",
      "Camarón": "Crevettes",
      "Res con queso fundido": "Bœuf au fromage fondu",
      "Vegetariano": "Végétarien",
      "vegetariano": "végétarien",
      "Nopal con queso": "Nopal au fromage",
      "Doble tortilla de 6\", queso mozzarella, tu elección de carne": "Double tortilla de 6 po, fromage mozzarella, viande au choix",
      "Burrito cortado con nachos y limonada rosa": "Burrito coupé avec nachos et limonade rose",
      "— Burroland: tortilla de harina de 12\", frijoles, arroz y crema, con lechuga, tomate, salsa mil islas, nachos, crema y queso": "— Burroland : tortilla de farine de 12 po, haricots, riz et crème, avec laitue, tomate, sauce mille-îles, nachos, crème et fromage",
      "Pollo, cubierto de guacamole": "Poulet, nappé de guacamole",
      "Res molida": "Bœuf haché",
      "Burrito de pollo o res": "Burrito au poulet ou au bœuf",
      "Burrito vegetariano": "Burrito végétarien",
      "Pimiento, cebolla y nopales": "Poivron, oignon et nopales",
      "Burrito de jamón y tocino": "Burrito au jambon et au bacon",
      "Pollo o res": "Poulet ou bœuf",
      "18 pulgadas, 3 carnes, cubierto de salsa roja, verde y queso fundido, con nachos": "18 pouces, 3 viandes, nappé de salsa rouge, de salsa verte et de fromage fondu, avec nachos",
      "Nachos con tomate, pimientos, cebolla y queso, bañados en salsa roja": "Nachos avec tomate, poivrons, oignon et fromage, nappés de salsa rouge",
      "Nachos locos con queso fundido, tomate y pimientos": "Nachos locos au fromage fondu, tomate et poivrons",
      "Nachos con tres salsas": "Nachos aux trois salsas",
      "Guacamole, salsa y crema agria": "Guacamole, salsa et crème sure",
      "Tortilla frita, aguacate, crema agria y queso": "Tortilla frite, avocat, crème sure et fromage",
      "Guacamole tradicional": "Guacamole traditionnel",
      "Tostadas con guacamole y pico de gallo": "Tostadas au guacamole et pico de gallo",
      "Camarones a la parrilla": "Crevettes grillées",
      "Con arroz, ensalada y limón": "Avec riz, salade et lime",
      "Res a la parrilla con arroz, ensalada, papas y tortillas": "Bœuf grillé avec riz, salade, pommes de terre et tortillas",
      "Enchiladas verdes, rojas o de mole": "Enchiladas vertes, rouges ou au mole",
      "3 piezas de pollo, con arroz y ensalada": "3 morceaux de poulet, avec riz et salade",
      "Zarape con jarra Dos XX": "Zarape avec pichet de Dos XX",
      "15 tacos variados, para compartir": "15 tacos assortis, à partager",
      "15 tacos con queso": "15 tacos au fromage",
      "15 tacos variados": "15 tacos assortis",
      "3 piezas de pollo, crema, queso y arroz": "3 morceaux de poulet, crème, fromage et riz",
      "Gorditas de chicharrón o de queso": "Gorditas au chicharrón ou au fromage",
      "Pollo, camarón o res con verduras y 3 tortillas": "Poulet, crevettes ou bœuf avec légumes et 3 tortillas",
      "3 piezas con consomé para mojar": "3 pièces avec consommé pour tremper",
      "Quesabirrias con consomé y cebolla": "Quesabirrias avec consommé et oignon",
      "Tortilla de harina, queso, birria y consomé": "Tortilla de farine, fromage, birria et consommé",
      "Pizzabirria en caja con consomé": "Pizzabirria en boîte avec consommé",
      "Res, pollo o papa, con arroz y tortilla de 10\"": "Bœuf, poulet ou pomme de terre, avec riz et tortilla de 10 po",
      "Tortilla de 10\" con al pastor y queso fundido": "Tortilla de 10 po avec al pastor et fromage fondu",
      "Res o cerdo con cebolla, pimientos, tocino, jamón y queso, 5 tortillas": "Bœuf ou porc avec oignon, poivrons, bacon, jambon et fromage, 5 tortillas",
      "Chilaquiles verdes o rojos con bistec": "Chilaquiles verts ou rouges avec bifteck",
      "Estamos preparando esta sección. Mientras tanto, pregunta a tu mesero o": "Nous préparons cette section. En attendant, demandez à votre serveur ou",
      "consulta el menú en línea": "consultez le menu en ligne",
      "Cócteles": "Cocktails",
      "Vaso": "Verre",
      "Jarra": "Pichet",
      "Cervezas y micheladas": "Bières et micheladas",
      "Cerveza de barril": "Bière en fût",
      "Michelada de 750 ml": "Michelada de 750 ml",
      "Con Miguelito, pimienta, sal y limón verde": "Avec du Miguelito, du poivre, du sel et de la lime",
      "Aguas frescas": "Aguas frescas",
      "Agua de mango": "Eau de mangue",
      "Preparada con mangos reales y leche": "Préparée avec de vraies mangues et du lait",
      "Bebida de arroz con un toque de canela y vainilla": "Boisson de riz avec une touche de cannelle et de vanille",
      "Agua de tamarindo": "Eau de tamarin",
      "Refrescos Jarritos": "Boissons gazeuses Jarritos",
      "Sabores disponibles": "Saveurs offertes",
      "Mango": "Mangue",
      "Fresa": "Fraise",
      "Piña": "Ananas",
      "Tamarindo": "Tamarin",
      "Mandarina": "Mandarine",
      "Limón verde": "Lime",
      "Limonadas": "Limonades",
      "Durazno": "Pêche",
      "Sandía": "Melon d'eau",
      "Maracuyá": "Fruit de la passion",
      "Refrescos": "Boissons gazeuses",
      "Refrescos y bebidas embotelladas": "Boissons gazeuses et boissons embouteillées",
      "Marcas disponibles": "Marques offertes",
      "Coca-Cola de dieta": "Coca-Cola diète",
      "Pepsi de dieta": "Pepsi diète",
      "Pastel de queso": "Gâteau au fromage",
      "Disponible en cuatro sabores": "Offert en quatre saveurs",
      "Natural": "Nature",
      "Caramelo": "Caramel",
      "Frambuesa": "Framboise",
      "Chocolate": "Chocolat",
      "Postre de banana con helado de tres sabores (fresa, chocolate y vainilla), acompañado de chocolate y cerezas": "Dessert à la banane avec crème glacée à trois saveurs (fraise, chocolat et vanille), accompagné de chocolat et de cerises",
      "Dos churros acompañados de caramelo y chocolate": "Deux churros accompagnés de caramel et de chocolat",
      "Flan tradicional": "Flan traditionnel",
      "Salsas": "Salsas",
      "Salsa roja": "Salsa rouge",
      "Salsa verde": "Salsa verte",
      "Salsa de chile de árbol": "Salsa au chile de árbol",
      "suave": "douce",
      "media": "moyenne",
      "muy picante": "très piquante",
      "¿Ya sabes qué quieres?": "Vous savez ce que vous voulez?",
      "Platillos y precios de tacos, entradas, especialidades y burritos verificados con el sitio oficial.": "Plats et prix des tacos, entrées, spécialités et burritos vérifiés avec le site officiel.",
      "Tacos, burritos, nachos, platos fuertes y más del menú de M Taquito, restaurante mexicano en Longueuil.": "Tacos, burritos, nachos, plats principaux et plus encore au menu de M Taquito, restaurant mexicain à Longueuil.",
      "Galería — M Taquito": "Galerie — M Taquito",
      "Así se ve y así se come.": "Voilà à quoi ça ressemble, et comment on le savoure.",
      "Nuestro local, la cocina y los platillos de la casa. Toca una foto para verla más grande.": "Notre restaurant, notre cuisine et les plats de la maison. Touchez une photo pour l'agrandir.",
      "La fachada": "La façade",
      "El mural de arcos": "La murale d'arches",
      "Tostadas de camarón": "Tostadas aux crevettes",
      "Tacos y tostadas": "Tacos et tostadas",
      "Altar de Día de Muertos": "Autel du Jour des morts",
      "Burrito y limonada": "Burrito et limonade",
      "Charola con tres salsas": "Plateau avec trois salsas",
      "El mural de la calavera": "La murale de la calavera",
      "Tostadas con guacamole": "Tostadas au guacamole",
      "El comedor": "La salle à manger",
      "Tacos de pollo": "Tacos au poulet",
      "Birria en la plancha": "Birria sur la plaque",
      "Armando tacos": "Préparation des tacos",
      "Tostada de camarón": "Tostada aux crevettes",
      "Tacos y salsas": "Tacos et salsas",
      "Pizzabirria para llevar": "Pizzabirria à emporter",
      "Fotos del local, la cocina y los platillos de M Taquito en Longueuil.": "Photos du restaurant, de la cuisine et des plats de M Taquito à Longueuil.",
      "Reservas — M Taquito": "Réservations — M Taquito",
      "Guárdanos un lugar en la mesa.": "Gardez-nous une place à table.",
      "Teléfono": "Téléphone",
      "¿Grupo grande o evento privado? Llámanos al": "Grand groupe ou événement privé? Appelez-nous au",
      "Reserva tu mesa en M Taquito, restaurante mexicano en Longueuil.": "Réservez votre table chez M Taquito, restaurant mexicain à Longueuil.",
      "Contacto — M Taquito": "Contact — M Taquito",
      "Te esperamos en Longueuil.": "Nous vous attendons à Longueuil.",
      "Dirección": "Adresse",
      "Servicios": "Services",
      "Para llevar y pedidos en línea": "À emporter et commandes en ligne",
      "Lunes": "Lundi",
      "Cerrado": "Fermé",
      "Domingo": "Dimanche",
      "16:00 – 22:00": "16 h – 22 h",
      "Fachada de M Taquito Restaurant Bar de noche": "Façade du M Taquito Restaurant Bar la nuit",
      "Mapa de ubicación de M Taquito": "Carte de l'emplacement de M Taquito",
      "Dirección, teléfono y horario de M Taquito, restaurante mexicano en Longueuil, Quebec.": "Adresse, téléphone et heures de M Taquito, restaurant mexicain à Longueuil, Québec.",
      "Horario": "Horaires",
      "Mar–Dom 16:00–22:00": "Mar–dim 16 h–22 h",
      "Martes – Viernes": "Mardi – vendredi",
      "Sábado": "Samedi",
      "También puedes pedir en": "Vous pouvez aussi commander sur",
      "Pedir en Uber Eats": "Commander sur Uber Eats",
      "Pedir en DoorDash": "Commander sur DoorDash",
      "Pedir en SkipTheDishes": "Commander sur SkipTheDishes",
      "Facebook de M Taquito": "M Taquito sur Facebook",
      "Instagram de M Taquito": "M Taquito sur Instagram",
      "Síguenos": "Suivez-nous",
      "Redes sociales": "Réseaux sociaux",
      "Pedidos a domicilio": "Commandes à domicile",
      "Cómo llegar": "Obtenir l'itinéraire",
      "Reserva tu mesa en línea con nuestro formulario. Para grupos de más de 10 personas, mejor llámanos directamente.": "Réservez votre table en ligne avec notre formulaire. Pour les groupes de plus de 10 personnes, appelez-nous directement.",
      "Reserva tu mesa en línea": "Réservez votre table en ligne",
      "Llena nuestro formulario de reservas en línea.": "Remplissez notre formulaire de réservation en ligne.",
      "Reservar en línea": "Réserver en ligne",
      "El formulario se abre en una pestaña nueva.": "Le formulaire s'ouvre dans un nouvel onglet.",
      "Mini burrito de huevo": "Mini burrito aux œufs",
      "Con huevo, queso, pollo y arroz": "Avec œuf, fromage, poulet et riz",
      "Mini burrito de pollo": "Mini burrito au poulet",
      "Con pollo, queso, frijoles y arroz": "Avec poulet, fromage, haricots et riz",
      "Mini sopa azteca": "Mini sopa azteca",
      "Sopa azteca con tortilla, omelette frito, queso crema y aguacate": "Sopa azteca avec tortilla, omelette frite, fromage à la crème et avocat",
      "Mini taquitos": "Mini taquitos",
      "Dos taquitos de pollo o carne, acompañados de queso y arroz": "Deux taquitos au poulet ou au bœuf, accompagnés de fromage et de riz",
      "Mini quesadillas": "Mini quesadillas",
      "Dos quesadillas de pollo preparadas con tortilla de harina y queso, acompañadas de arroz": "Deux quesadillas au poulet préparées avec une tortilla de farine et du fromage, accompagnées de riz",
      "Nuggets de pollo": "Croquettes de poulet",
      "4 nuggets": "4 croquettes",
      "6 nuggets": "6 croquettes",
      "Jugo de manzana": "Jus de pomme"
  }
  };
  var PREFIX = {"en": {"Ampliar: ": "Enlarge: ", "Ver más grande: ": "View larger: "}, "fr": {"Ampliar: ": "Agrandir : ", "Ver más grande: ": "Agrandir : "}};

  var lang = "es";
  var textOrig = new WeakMap();
  var attrOrig = new WeakMap();
  var ATTRS = ["alt", "aria-label", "placeholder", "title"];

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function tr(es) {
    if (lang === "es") return es;
    var k = norm(es), d = D[lang];
    if (Object.prototype.hasOwnProperty.call(d, k)) return d[k];
    var pre = PREFIX[lang];
    for (var p in pre) {
      if (Object.prototype.hasOwnProperty.call(pre, p) && k.indexOf(p) === 0) {
        var rest = k.slice(p.length);
        return pre[p] + (Object.prototype.hasOwnProperty.call(d, rest) ? d[rest] : rest);
      }
    }
    return es;
  }

  function chosen() {
    var q = /[?&]lang=(es|en|fr)\b/.exec(location.search);
    if (q) return q[1];
    try {
      var s = localStorage.getItem(KEY);
      if (LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    var n = ((navigator.language || "es") + "").slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) > -1 ? n : "es";
  }

  function applyText() {
    var w = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.closest("[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return n.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(function (n) {
      var orig = textOrig.get(n);
      if (orig === undefined) { orig = n.textContent; textOrig.set(n, orig); }
      var core = norm(orig), t = tr(core);
      var out = t !== core ? orig.match(/^\s*/)[0] + t + orig.match(/\s*$/)[0] : orig;
      if (n.textContent !== out) n.textContent = out;
    });
  }

  function applyAttrs() {
    document.querySelectorAll("[alt],[aria-label],[placeholder],[title]").forEach(function (el) {
      if (el.closest("[data-i18n-skip]")) return;
      var saved = attrOrig.get(el);
      if (!saved) { saved = {}; attrOrig.set(el, saved); }
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        if (saved[a] === undefined) saved[a] = el.getAttribute(a);
        var t = tr(saved[a]);
        if (el.getAttribute(a) !== t) el.setAttribute(a, t);
      });
    });
    var md = document.querySelector('meta[name="description"]');
    if (md) {
      if (md.__es === undefined) md.__es = md.getAttribute("content");
      md.setAttribute("content", tr(md.__es));
    }
  }

  function paintSwitch() {
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("is-active", on);
    });
  }

  function set(l, persist) {
    if (LANGS.indexOf(l) < 0) l = "es";
    lang = l;
    document.documentElement.lang = l;
    applyText();
    applyAttrs();
    paintSwitch();
    if (persist) { try { localStorage.setItem(KEY, l); } catch (e) {} }
    document.dispatchEvent(new CustomEvent("mtq-lang", { detail: l }));
  }

  window.MT = {
    t: function (es, vars) {
      var s = tr(es);
      if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
      return s;
    },
    lang: function () { return lang; },
    set: function (l) { set(l, true); }
  };

  document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { set(b.getAttribute("data-lang"), true); });
  });
  set(chosen(), false);
})();
