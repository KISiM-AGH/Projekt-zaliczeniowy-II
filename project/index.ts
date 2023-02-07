interface Book{
    title?: string;
    author?: string;
    year?: number;
}

class BooksDB{
    private db: Book[]=[];

    addBook=(title: string, author: string, year: number): Book =>{
        this.db.push({title, author, year});
        return this.db.at(-1) as Book;
    }

    print=()=>{
        console.table(this.db);
    }
}

const myDB=new BooksDB();
myDB.addBook("Thinking in Java", "Bruce Eckel", 2014);
myDB.print();
