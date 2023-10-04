//exemplo de função bubblesort / seleção direta / inserção direta / quicksort


// A função bubblesort analisa a posição 0 com a posição 1, se a 0 for maior
// ele troca a posição 0 pela posição 1, e assim sucetivamente até o final do vetor, ordenando os valores
// [...Array(10)] gera um array com 10 undefineds
// .map() vai preencher todos os elementos do array de acordo com uma função
// ()=>Math.random()*18-9   é a função que retorna um número aleatório entre -9 e 9 (se você quiser inteiros use ()=>Math.floor(Math.random()*19-9))
var array = [...Array(10000)].map(()=>Math.random()*18-9);
console.log(array)

var vetor = [array];   
function bubbleSort () {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > vetor[i +1]) {
            let v1 = vetor[i]
            let v2 = vetor[i +1] 
            vetor[i] = v2
            vetor[i +1] = v1
        }
    }
}

for (let j = 0; j < vetor.length ; j++) {
    bubbleSort();
}
//Agora iremos analisar quanto tempo demorou de execução 
console.log(vetor)
console.time('bubbleSort...')
bubbleSort(vetor)
console.timeEnd('bubbleSort...')

//Seleção Direta: A ordenação por seleção é um algoritmo de ordenação baseado em se passar sempre o menor valor do vetor para a primeira posição (ou o maior dependendo da ordem requerida), depois o de segundo menor valor para a segunda posição, e assim é feito sucessivamente
var arr = [array];
for(let i = 0; i < arr.length; i++){
    let min = i
    let aux 
    for(let j = i + 1; j <= arr.length; j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }
    if (i != min) {
        aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
}
console.log(arr)
console.time(arr)
console.timeEnd(arr)

//Inserção direta: É um algoritmo que percorre um vetor de elementos da esquerda para a direita e à medida que avança, deixa os elementos mais à esquerda ordenados.
    var vetor = [array];
    function insercaodireta(vetor) {
        for(var i = 1; i< vetor.length; i++){
            for(var j=0; j< i; j++){
                if(vetor[i]< vetor[j]){
                    var aux = vetor[i];
                    for(var k = i; k > j; k--){
                        vetor[k] = vetor[k-1]
                    }
                    vetor[j] = aux
                }
            }
        }
    }
    console.log(vetor);
    // Passando o vetor para dentro da function insercaodireta e vendo o tempo de execução
    insercaodireta(vetor);
    console.time('insercaodireta...')
    insercaodireta(vetor)
    console.timeEnd('insercaodireta...')

    //quicksort: Quick Sort é um algoritmo eficiente de ordenação por divisão e conquista. Apesar de ser da mesma classe de complexidade do Merge Sort e do Heap Sort, o Quick Sort é na prática o mais veloz deles, pois suas constantes são menores.

    //quicksort: Nele se escolhe um elemento chamado de pivô, a partir disto é organizada a lista para que todos os números anteriores a ele sejam menores que ele, e todos os números posteriores a ele sejam maiores que ele. Ao final desse processo o número pivô já está em sua posição final.

    function quicksort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        var pivot = array[0];
        
        var left = []; 
        var right = [];
      
        for (var i = 1; i < array.length; i++) {
          array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
      
        return quicksort(left).concat(pivot, quicksort(right));
      };
      
      var unsorted = [array];
      var sorted = quicksort(unsorted);
      
    console.log('Sorted array', sorted);
    quicksort(unsorted);
    console.time('quicksort...')
    quicksort(unsorted)
    console.timeEnd('quicksort...')