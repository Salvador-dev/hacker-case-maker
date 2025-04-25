import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hacker-case-maker';
  public generatedText: string = '';
  public text: string = '';

  generateText() {
    console.log(this.text);

    this.generatedText = this.text.toUpperCase().replace(/[OATUVSE ]/g, match => {
        const mapping: { [key: string]: string } = {
            'O': '0', 'A': '4', 'T': '7', 'U': 'V', 'V': 'U', 'S': '5', 'E': '3', 'G': '6', '6': 'G', ' ': '_'
        };
        return mapping[match] || match;
    });

    console.log(this.generatedText);
}


}
