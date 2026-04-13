function Book(title, author, pages, read){
   if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=function(){
    console.log(`The book ${title} is written by ${author} with ${pages} pages. Read is ${read}`);

  } 
}

const book1= new Book("LeBron", "Curry", 100, true);
book1.info();