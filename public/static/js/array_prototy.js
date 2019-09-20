/**根据数组对象中的某个键值对获取该对象 
 * param1 -- field name
 * param2 -- field value
 * return -- find out ? object in array : null; 
*/
if(!Array.prototype.getField){
    Array.prototype.getField = function(name,value){
        for(var i=0;i<this.length;i++){
            if(eval("this[i]." + name) == value){
                return this[i];
            }
        }
        return null;
    }
}

if(!Array.prototype.in_array){
    Array.prototype.in_array = function(seach){
        for(var i=0;i<this.length;i++){
            if(this[i] == search){
                return true;
            }
        }
        return false;
    }
}