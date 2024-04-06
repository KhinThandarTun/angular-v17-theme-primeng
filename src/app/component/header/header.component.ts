import { Component, OnInit, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule,FormsModule,ToolbarModule,ButtonModule,InputSwitchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  checked:boolean = true;
  selectTheme:string = 'dark';
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
      this.themeService.setTheme(this.selectTheme);
  }

  onThemeChange(theme:string):void{
    this.selectTheme = theme;
    this.themeService.setTheme(theme);
  }
}
