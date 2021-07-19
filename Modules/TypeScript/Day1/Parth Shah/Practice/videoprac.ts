function GetAllBooks()
{

    let books  : any = [{title : 'abc',author:'Parth shah', availaible: true},
    {title : 'xyz',author:'Hari shah', availaible: false}

];
/* var navo = 'Parth shah';
var demo = books.find(c=>c.author == navo);
console.log(demo);
return books; */

}


function Logs(books)
{
    let numberOfBooks = books.length;
    let firstAvailaible = '';
    for(let currentBook of books) {

        if(currentBook.availaible) {
            firstAvailaible = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('Avaiaible books :', firstAvailaible);
}
 

let allBooks = GetAllBooks();
Logs(allBooks);
