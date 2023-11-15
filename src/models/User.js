export class User {

  constructor({ id, isActive, balance, avatar, firstName, lastName, genderale }){
    this.id         = id; 
    this.isActive   = isActive;
    this.balance    = balance;
    this.avatar     = avatar;
    this.firstName  = firstName;
    this.lastName   = lastName;
    this.genderale  = genderale;
  }
}