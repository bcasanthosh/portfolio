import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:'Header',component:HeaderComponent},
    {path:'frontpage',component:FrontpageComponent},
    {path:'footer',component:FooterComponent}
];
