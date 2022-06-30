import { Component } from '@angular/core';
import ePub from 'epubjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  book;
  renderizacao;
  displayed;

  constructor() {
    this.book = ePub('https://s3.amazonaws.com/epubjs/books/alice.epub');
    // this.book = ePub('../../assets/ebook/A Profecia Dark - Anthony E. Zuiker.epub');
    this.renderizacao = this.book.renderTo('area',{width: 1200, height: 400});
    this.displayed = this.renderizacao.display();
  }

  next() {
    return this.renderizacao.next();
  }

  previous() {
    return this.renderizacao.prev();
  }
}
