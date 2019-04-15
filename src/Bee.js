var Bee = function () {
  //inherit Grub properties
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// set the subclasses prototype to Grubs prototype
// previous constructor was overwritten.  set it back to Bee
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


// - You will typically want to instantiate when you see repeated 
  // states and behavior in your code.
// - By creating Classes and Subclasses, we can reduce repetition 
  // and keep our code neat and organized.
// - Whenever we create a Class operator using Pseudoclassical 
  // Instantiation, the Object.create() and return this steps are 
  // implied.
// - Subclasses inherit properties from the Classes they call, 
  // but Classes cannot inherit their Subclass properties.
// - When creating a Subclass, we must remember to call the Class 
  // we are inheriting, and reset the Subclass.prototype & 
  // Subclass.prototype.constructors.