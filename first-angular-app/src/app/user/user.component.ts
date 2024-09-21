import { Component, Input, Output, input, signal, computed, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


// type User = {
//   id:string,
//   name:string,
//   avatar:string
// }


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 
export class UserComponent {
  //only public properties will be available to the template html file
  //In angular all the property variables have state.
    //selectedUser = signal(DUMMY_USERS[randomIndex]);
  
    @Input({required:true}) user!: User;
    @Input({required:true}) isSelected!:Boolean;
    @Output() selectedUser = new EventEmitter<string>();
    

    //avatar = input.required<string>()
    //name = input.required<string>()

    //computed() is used when a signal is computed and it returns a signal
    //imageUrl = computed(() => {return "assets/users/" + this.selectedUser().avatar;})

    get imageUrl(){
      return 'assets/users/' + this.user.avatar;
    }

    
   onSelectUser(){
      this.selectedUser.emit(this.user.id);
   }
}
