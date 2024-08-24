import {
  Component,
  computed,
  input,
  Input,
  InputSignal,
  Signal,
  Output,
  EventEmitter,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { type User } from '../models/user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input({ required: true }) user!: User;
  user: InputSignal<User> = input.required<User>();
  selected: InputSignal<boolean> = input.required<boolean>();
  // get imagePath() {
  //   return 'assets/users/' + this.user.avatar;
  // }
  imagePath: Signal<string> = computed(
    () => 'assets/users/' + this.user().avatar
  );
  // @Output() select: EventEmitter<string> = new EventEmitter<string>();
  select: OutputEmitterRef<string> = output<string>();

  onSelectUser() {
    // this.select.emit(this.user.id);
    this.select.emit(this.user().id);
  }
}
