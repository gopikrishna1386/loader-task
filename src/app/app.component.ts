import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  showOffcanvas:boolean = false;
  progress = 0;
  interval: any;
  isContentVisible: boolean = false;

  toggleContent() {
    this.showOffcanvas = !this.showOffcanvas;
  }
  startMigration() {
    this.showOffcanvas = true; 
    this.progress = 0;

    // Start progress bar incrementing
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        clearInterval(this.interval); // Stop the interval when progress is 100
        this.showOffcanvas = false; // Hide offcanvas
        setInterval(()=>{
          alert('Migration process completed!'); // Show alert on completion
        },500);

      }
    }, 500);
  }

  toggleOffcanvas() {
    this.showOffcanvas = !this.showOffcanvas; // Toggle between hide and show
  }
}
