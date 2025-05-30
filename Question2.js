function righttriangle(t){
    for(i=1; i<=t; i++){
        console.log(''.repeat(t-i)+'*'.repeat(i));
    }
}
righttriangle(10)