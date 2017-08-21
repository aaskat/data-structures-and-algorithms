youtube: https://www.youtube.com/watch?v=f8hXR_Hvybo,
wiki: https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D0%BC

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
