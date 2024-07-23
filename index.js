// Write your classes here
// Parent class Tree
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method to provide a general definition of trees
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Child class Deciduous that extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor to assign species
      this.name = name;
    }
  
    // Static method to provide a specific definition for Deciduous trees
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Child class Evergreen that extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor to assign species
      this.name = name;
    }
  
    // Static method to provide a specific definition for Evergreen trees
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Testing the classes
  
  // Creating instances of Deciduous and Evergreen
  const oak = new Deciduous('Oak', 'Mighty Oak');
  const pine = new Evergreen('Pine', 'Tall Pine');
  
  // Accessing the static methods
  console.log(Tree.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.
  console.log(Deciduous.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  console.log(Evergreen.definition()); // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  
  // Accessing properties from instances
  console.log(oak.species); // Oak
  console.log(oak.name); // Mighty Oak
  console.log(pine.species); // Pine
  console.log(pine.name); // Tall Pine
  