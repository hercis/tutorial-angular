import { Component, Input, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input({ required: true }) avatar!: string
  //@Input({ required: true }) name!: string
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  select = output<input>(); // not a Signal

  imagePath = computed(() => 'assets/users/' + this.avatar());

  /*get imagePath() {
    return 'assets/users/' + this.avatar;
  }*/

  onSelectUser() {
    console.log('Click');
    this.select.emit(this.id());
  }
}
