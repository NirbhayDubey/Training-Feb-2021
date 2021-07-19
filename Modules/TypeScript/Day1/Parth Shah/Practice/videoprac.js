function GetAllBooks() {
    var books = [{ title: 'abc', author: 'Parth shah', availaible: true },
        { title: 'xyz', author: 'Hari shah', availaible: false }
    ];
    var navo = 'Parth shah';
    var demo = books.find(function (c) { return c.author == navo; });
    console.log(demo);
    return books;
}
function Logs(books) {
    var numberOfBooks = books.length;
    var firstAvailaible = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.availaible) {
            firstAvailaible = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('Avaiaible books :', firstAvailaible);
}
var allBooks = GetAllBooks();
Logs(allBooks);
