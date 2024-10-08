import { Component } from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component';

@Component({
  selector: 'app-root',
  template: `<app-wishlist></app-wishlist>`,
  standalone: true,
  imports: [WishlistComponent]
})
export class AppComponent { }
