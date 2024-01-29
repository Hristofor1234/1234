// const pystoi=[];

// const numbers=[1,2,3,4,5,6];

// const fruits=[' яблоко ',' груша ','  апельсин '];

// document.write(fruits[0]);

// document.write(fruits[1]);

// document.write(fruits.length);

// fruits[1]='киви';

// fruits.push('манго');

// console.log(fruits[1]);

// console.log(fruits[3]);


//практика

const class1=document.querySelector(".class1");
const class2=document.querySelector(".class2");
const class3=document.querySelector(".class3");




const massiv=[class1, class2, class3];
// console.log(massiv);

let summ=class1+class2+class3;
// console.log(summ);

for(let i = 0; i < massiv.length; i++){
    if(massiv[i]>0 && massiv[i]/2){
        massiv[i]*=2;
        let result1=('Четное');
        console.log(result1);
    }else{
        massiv[i]*=3;
        let result2=('НЕчетное');
        console.log(result2);
    }
    
}
// console.log(massiv);