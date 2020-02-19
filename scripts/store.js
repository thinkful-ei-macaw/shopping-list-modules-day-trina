import item from './item.js';

 let items = [];
 let hideCheckedItems = false;

 function findById(id){
  return this.items.find(item => item.id === id);
 }

 function addItem(name){
   try {
    item.validateName(name);
    this.items.push(item.create(name))
   }
   catch (error){
    console.log(`Cannot add item ${error.message}`)
   }
 };

//is this right???
 function findAndToggleChecked(id){
  let toggle = this.findById(id);
  toggle.checked = !toggle.checked;
 }

 function findAndUpdateName(id, newName){
  try {
    item.validateName(newName);
    this.findById(id);
  }
  catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
 }

 function findAndDelete(id){
  this.items = this.items.filter(item => item.id !== id);
 }

 function toggleCheckedItemsFilter (){
   this.hideCheckedItems = !this.hideCheckedItems;
 }



 export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedItemsFilter
  };
