arr = [3, 1, 3, 2, 13, 2, 14, 25, 45] 

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
} 

function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){
        
        min = i;

        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
