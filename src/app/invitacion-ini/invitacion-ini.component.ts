import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invitacion-ini',
  imports: [ CommonModule ],
  templateUrl: './invitacion-ini.component.html',
  styleUrl: './invitacion-ini.component.scss'
})
export class InvitacionIniComponent {
  gifVisible = false;

  currentStep = 1;

  randomGifUrl: string = '';


  ngOnInit() {
    if (this.currentStep === 3) {
      this.getRandomGif();
    }
  }
  
  nextStep() {
    if (this.currentStep < 7) {
      this.currentStep++;
    }
  }

  onYesClick() {
    this.currentStep = 8
  }

  onNoClick() {
    this.currentStep = 7; 
  }

  reintentar(){
    this.currentStep  = 6;
  }

  repetir(){
    this.currentStep = 1;
  }

  gifUrls = [
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam9kZHNyYmJnZGRjYnpvYjluejhzMzM4dDhhb2xsZ2RmamVwNDdjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3VOwswl0LLlvgjGUM5/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDQ1cXptN2piZGkxOXo5YnZiNnUwdTVpY3Q3ZnRpa2J2Zmc2OWIzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0QqZfsK8q4KxUvNMxZ/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd28weG5nbHNvaDlnbXkyMnRuNjZqMzE3MjY1MXhtZHI1ZTFleDIxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8c1SH3KQGyWOBa9XvK/giphy.gif'
  ];
  

  getRandomGif() {
    const randomIndex = Math.floor(Math.random() * this.gifUrls.length);
    return this.gifUrls[randomIndex];
  }

}
