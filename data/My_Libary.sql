
CREATE DATABASE my_library;

USE my_library;

CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
author VARCHAR(255),
copyright DATE, 
genre VARCHAR(255),
synopsis TEXT(65535)
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE books;



INSERT INTO books (title, author) VALUES 
('Thebes', 'Paul Cartledge'),
('The Terracotta Warriors', 'Edward Burman'),
('HTML & CSS', 'Jon Duckett'),
('Javascript & JQuery', 'Jon Duckett'),
('I’ll Have What She’s Having', 'Erin Carlson'),
('Software Rights', 'Gerardo Con Diaz'),
('30-Second Physics', 'Brian Clegg'),
('30-Second Quantum Theory', 'Brian Clegg'),
('Blockchain Revolution', 'Don Tapscott'),
('Blockchain Basics', 'Daniel Drescher'),
('What It’s Like To Be A Bird', 'David Allen Sibley'),
('The Case of The Sulky Girl', 'Erle Stanley Gardner'),
('The Inner Life of Animals', 'Peter Wohlleben'),
('You Have The Right To Remain Innocent', 'James Duane'),
('The Science of Rapid Skill Acquisition', 'Peter Hollins'),
('The Storyteller’s Secret', 'Sejal Badani'),
('Emotional Intelligence', 'Daniel Goleman'),
('Penguin In Peril', 'Helen Hancocks'),
('When Life Gives You Pears', 'Jeannie Gaffigan'),
('The Lost City of The Monkey God', 'Douglas Preston'),
('The Blockchain And The New Architecture of Trust', 'Kevin Werbach'),
('An Object of Beauty', 'Steve Martin'),
('I Never Met A Metaphor I Didn’t Like', 'Dr. Mardy Grothe'),
('Delaware Politics', 'Daniel O. Hastings'),
('The Illustrated A Brief History Of Time', 'Stephen Hawking'),
('First Impressions', 'Betty Rosbottom'),
('How To Read A French Fry', 'Russ Parsons'),
('An Abundance of Katherines', 'John Green'),
('Zoning Rules!', 'William A. Fischel'),
('Lizzie Borden on Trial', 'Joseph A. Conforth'),
('Abandoned Civilisations', 'Kieron Connolly'),
('The Old-House Journal Compendium', 'Clem Baine'),
('Superior Beings', 'Nick Walters'),
('Festival of Death', 'Jonathan Morris'),
('Touched By An Angel', 'Jonathan Morris'),
('Fear of The Dark', 'Trevor Baxendale'),
('The English Way Of Death', 'Gareth Roberts'),
('Hunters Moon', 'Paul Finch'),
('Paradox Lost', 'George Mann'),
('Sands Of Time', 'Justin Richards'),
('Dead Of Winter', 'James Goss'),
('Corpse Marker', 'Chris Boucher'),
('Asylum', 'Peter Darvill-Evans'),
('Rags', 'Mick Lewis'),
('Psi-ence Fiction', 'Chris Boucher'),
('Amorality Tale', 'David Bishop'),
('The King of Terror', 'Keith Topping'),
('40 Stories Celebrating 40 Years of Star Wars', 'Ben Acker'),
('The Amateur Marriage', 'Anne Tyler'),
('Pride And Prejudice', 'Jane Austen'),
('This Side of Paradise', 'F. Scott Fitzgerald'),
('Crime and Punishment', 'Fyodor Dostoevsky'),
('Legends of The Outer Banks and Tar Heel Tidewater', 'Charles Harry Whedbee'),
('The Flaming Ship of Ocracoke & Other Tales of The Outer Banks', 'Charles Harry Whedbee'),
('The Complete Sherlock Holmes Volume 1', 'Sir Arthur Conan Doyle'),
('The Complete Sherlock Holmes Volume 2', 'Sir Arthur Conan Doyle'),
('The Beautiful And Damned', 'F. Scott Fitzgerald'),
('Monty Python’s Flying Circus Complete And Annotated', 'Luke Dempsey'),
('Javascript: The Definitive Guide', 'David Flannagan'),
('Love and Friendship and Other Youthful Writings', 'Jane Austen'),
('Anna Karenina', 'Leo Tolstoy'),
('Sense and Sensibility', 'Jane Austen'),
('UNIX Shell Programming', 'Lowell Jay Arthur'),
('UNIX for Programmers and Users', 'Graham Glass'),
('Photoshop CS6', 'Lesa Snider'),
('The Non-Designers Design Book', 'Robin Williams'),
('Adobe Photoshop CS6 On Demand', 'Steve Johnson'),
('The Art & Science of Java', 'Eric S. Roberts'),
('JavaScript Everywhere', 'Adam D. Scott'),
('Eloquent JavaScript', 'Marijn Haverbeke'),
('Legions of Rome', 'Stephen Dando-Collins'),
('Pax Romana', 'Adrian Goldswothy'),
('Constatine', 'Paul Stephenson'),
('Augustus', 'Adrian Goldsworthy'),
('InDesign CS3', 'Sandee Cohen'),
('Only In Delaware”', 'Celia Cohen'),
('In The Gloaming', 'Alice Elliot Dark'),
('Cry The Beloved Country', 'Alan Paton'),
('Water For Elephants',  'Sara Gruen'),
('The Velveteen Rabbit', 'Margery Williams'),
('The Complete Tales of Beatrix Potter', 'F. Warne & Co'),
('The Help', 'Kathryn Stockett'),
('The Street Of A Thousand Blossoms', 'Gail Tsukiyama'),
('Creating the French Look', 'Annie Sloan'),
('Pete The Cat Valentine’s Day is Cool', 'Kimberly Dean'),
('Strong Advice', 'Zuby Udezue');  



